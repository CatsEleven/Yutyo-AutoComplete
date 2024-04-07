# Chrome拡張機能 Yutyo-AutoComplete の作成

## ダウンロード・インストール
ダウンロードはchrome web store（ここにURL）からどうぞ。

## 機能説明
ゆうちょが提供するネット銀行サービスに「ゆうちょダイレクト」があります。PCやスマホから残高照会や送金、投資信託などが行えるサービスです。  
便利な機能ですが、認証情報（ログインIDとパスワード）はセキュリティの都合でChromeの自動入力機能が使えません。ログインIDは12ケタもあるので覚えられません。毎回通帳を取り出して打ち込むのも大変なので、自動入力させるChrome拡張を作ることにしました。


## ダウンロード・インストール方法
chrome web store（ここにURL）からダウンロード・インストールしてください。導入時に権限の承認画面が出たら、承諾してください。  
インストールに成功したら、chrome画面右上にアイコンが出現します（出ない場合は、ジグソーパズルアイコンを押して、拡張機能をピン留めしてください。）通帳のアイコンをクリックすると、設定画面が現れます。  
通帳アイコン右クリック→オプションからも飛べます。

## 使い方
上に書いた方法で設定画面に入ったら、ログインIDとパスワードを入力して登録ボタンを押します。内容を消したくなったら、キャンセルボタンを押すと消えます。  
chromeにログインしているGoogleアカウント間では、データが同期されます。


## 備考
* Google Chrome上のみでの動作を保証しています。  
* Edge, Firefox, Safari, Firefox for Android, Safari on iOSはstorage.syncをサポートするため、動作する可能性はあります。Operaは非対象です。  
  詳しくは、[storage.sync](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync （MDN Web Docs）をご参照ください。


## 今後の予定
- 認証情報の管理方法の変更
  -  ただStrage APIを使っても、多分スクリプトに認証情報を直書きすることは変わらない？XSS攻撃（クロスサイト・スクリプティング）を食らってしまう。
  -  うーんやっぱ他サービスと連携するかDB構築するしか無いのかなぁ..[DBなしのchrome拡張でsecureに認証情報を扱いたい](https://qiita.com/daichi_yamazaki/items/6337e5a5086104bcabf0) （qiita.com/daichi_yamazaki/items/6337e5a5086104bcabf0）
- グチャグチャすぎるCSSをなんとかする
  - 一部JSで無理やり実装している