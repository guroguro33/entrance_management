# entrance_management
拠点の入退室管理

以下デプロイの方法について示す
# モジュールのインストール
- PCにnode.jsをインストールしてから、npmコマンドで下記を実行
```
npm install
```

# claspについて
## claspとは
- google Apps Script用のCLIツールのこと
- 使用することで下記のことが実現できる
  - GASをローカルで開発し、GASにpushできる
  - ローカル開発できるので、GitHubで管理できる
  - TypeScriptが使用できる

## claspのインストール
- claspをグローバルインストールしてください
```bash
npm i -g @google/clasp
```

# clasp.jsonの設定
1. ルートディレクトリ内にある「example.clasp.json」をコピーし「.clasp.json」にリネームする

2. 入退室記録用のGASプロジェクトを作成し、そのプロジェクトのスクリプトIDを取得し、json内のscriptIdのパラメータ「XXXX」の部分に設定する

- URLのhttps://script.google.com/home/projects/<SCRIPT_ID>/edit の<SCRIPT_ID>と同じ値を「XXXX」に設定

3. rootDirのパラメータにsrcディレクトリの絶対パスを設定する

# 入退室記録スプレッドシートIDの登録
1. 入退室記録用のスプレッドシートを作成し、そのスプレッドシートIDを取得し、src/main.ts内のSSIDのパラメータ「XXXX」の部分にスプレッドシートIDを設定する

- URLのhttps://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/editの<SPREADSHEET_ID>と同じ値を「XXXX」に設定

```
// 入退室管理を記録するスプレッドシートIDを登録する
SP.setProperty('SSID', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
```

- なお、スプレッドシートの項目は下記を参考にすること

| 時刻  | 入退室種別 | 名前 | エアコン停止 | 空間共有PC電源OFF | 消灯 | 換気扇停止 | ALSOK警備開始 | 備考 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |

# 閑話（clasp操作のコマンド紹介）
- clasp login :googleアカウントへのログイン
- clasp push  :GASエディタへのソース反映
- clasp pull  :GASエディタの内容を取得(GAS内のgsファイルがjsファイルに変換されて落ちて来て上書きされてしまうため注意！)

# claspでログイン
1. ターミナルで下記コマンドでログインすると、ブラウザが立ち上がり、googleログイン画面が開くので、ログインやアカウントの選択を行い、GASプロジェクトを保存したいアカウントで認証を行う

```
clasp login
```

2. ターミナルに戻って下記の通り表示されていたらログイン成功となる

```
Authorization successful.
```

# claspでGASにソースをpush
1. ログイン後に下記コマンドでソースをpushするとclasp.jsonで設定したscriptIdのGASエディタにソースがアップロードされる

```
clasp push
```

# 仮デプロイ
1. push後、ブラウザからGASエディタを開き、「デプロイ」ボタンからデプロイを実施する
2. デプロイ後にアプリケーションのURLが払い出されるため、そのアプリURLをメモしておく

# formタグのaction属性の設定
1. src\index.htmlファイルを開く
2. formのaction属性にデプロイ後のアプリURLを登録する
3. clasp pushコマンドで再度pushする

# 再デプロイ
1. 再度ブラウザからGASエディタ画面を開き、action属性にアプリURLが反映されていることを確認する
2. GASエディタから「デプロイ」ボタンで再度デプロイを実行する(その際に固定URLでデプロイすること)
[GoogleAppsScript(GAS)を固定URLでデプロイする方法](https://codeaid.jp/gas-deploy/)
3. デプロイ完了！


