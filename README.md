# entrance_management
拠点の入退室管理

# モジュールのインストール
npm install

# clasp.jsonの設定
exmple.clasp.json
上記をコピーし「clasp.json」にリネーム
対象のスプレッドシートからスクリプトIDを取得し設定する

# clasp操作
clasp login :googleアカウントへのログイン
clasp push  :GASエディタへの反映
clasp pull  :GASエディタの内容を取得(jsファイルで落ちてくるので注意！)

# アクション属性の設定
src\index.html
formのアクション属性にデプロイ後のアプリのURLを指定する
