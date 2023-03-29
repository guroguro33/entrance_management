# entrance_management
拠点の入退室管理

# モジュールのインストール
npm install

# claspについて
## claspとは
- google Apps Script用のCLIツールのこと
- 使用することで下記のことが実現できる
  - GASをローカルで開発し、GASにpushできる
  - ローカル開発できるので、GitHubで管理できる
  - TypeScriptが使用できる

## claspのインストール
PCにnode.jsをインストールしてから、npmコマンドでclaspをグローバルインストールしてください
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

# clasp操作
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

# アクション属性の設定
src\index.html
formのアクション属性にデプロイ後のアプリのURLを指定する
