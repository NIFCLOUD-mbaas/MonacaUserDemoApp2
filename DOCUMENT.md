name: inverse
layout: true
class: center, middle, inverse
---
# <span style="font-size: 30%">【Monaca × ニフクラ mobile backend】</span><br>アプリに会員認証機能<br>を導入しよう！
富士通クラウドテクノロジーズ株式会社

.right[<img src="document-img/takano.png" alt="takano.png" width="150px">]

.footnote[
20180313 MonacaUserDemoApp2 (20210412 Update)
]

---
layout: true
class: center, middle, inverse_sub
---
# はじめに

---
layout: false

.footnote_right[
概要
]

## 概要
* アプリに会員管理機能を導入したい！
* 既存サービスに会員管理機能を導入したい！
* ログインしないと見られないコンテンツを作りたい！

.size_small_7[
プレミアム会員機能イメージ
]

.center[<img src="document-img/premiumImage.png" alt="PREMIUM会員イメージ" width="500px">]


気軽に導入できる「会員認証機能」サービスがあったらいいと思いませんか？

---
layout: false

.footnote_right[
概要
]

## 概要
ニフクラ mobile backendを使うことで、既存アプリにも、新規アプリにも **簡単に会員認証機能を導入することができます**！

.center[<img src="document-img/Appimage.png" alt="会員認証機能イメージ" width="450px">]

本セミナーでは、サンプルアプリを使ってMonacaアプリに会員管理機能を導入する手順について学んでいきます。
---
.footnote_right[
概要
]
### Monacaって何？
* __もなか 【[Monaca](https://ja.monaca.io/)】__ HTML5/JavaScript/CSS3でスマホアプリが開発できる開発環境。開発スタイル／コーディング環境は選択可能。

.center[![Monacaとは？](document-img/AboutMonaca.png)]

---
.footnote_right[
概要
]
### ニフクラ mobile backend って何？
* __にふくら-もばいる-ばっくえんど 【[ニフクラ mobile backend](https://mbaas.nifcloud.com/about.htm)】__ スマートフォンアプリに必要なバックエンド機能が開発不要で利用できるクラウドサービス。 クラウド上に用意された機能をAPIで呼び出すだけで利用できます。また、APIを簡単に使うためのSDKを用意しています（ iOS / Android / Monaca / Unity ）。mobile Backend as a Service の頭文字を取って、通称 **mBaaS** と呼ばれています。

.center[<img src="document-img/About_mBaaS.png" alt="mBaaSとは？" width="350px">]

---
.footnote_right[
概要
]

### Monaca と mBaaS で<br>サーバー連携アプリは簡単に実現可能に
この２つを組み合わせると、高度なアプリも簡単スピーディーに開発できます

.center[![Monaca×mBaaS](document-img/Monaca_mBaaS.png)]

.left-column[
__《アプリ側》Monaca のすごいところ__
.size_small_7[
* 無料で使える！
* iOS / Android 同時に開発可能！
* いつでもどこでも、ブラウザで開発OK！
* **mBaaSのSDK導入** がクリックだけで簡単に！
]
]
.right-column[
__《サーバー側》mBaaS のすごいところ__
.size_small_7[
* 無料で使える！
* **バックエンドの開発・運用は一切不要**！
* ログイン処理はたった **１行** で実装可能！
* **管理画面** からクラウドの状況をパッと確認できる！
]
]

---
.footnote_right[
概要
]

### 今回体験する内容
#### 会員認証機能の導入方法について学びます
* ニフクラ mobile backend で用意している __３つの認証方法__ についてそれぞれ実装方法をサンプルアプリを利用して解説します

#### ３つの認証方法
* ID / PW 認証
* Email / PW認証
* 匿名認証

.center[<img src="document-img/userimage.png" alt="会員管理機能" width="700px">]

---
.footnote_right[
概要
]

### ３つの認証方法
#### ID / PW 認証

.left-column[
* 会員が設定したIDとPWを使用して簡単に認証ができます
]
.right-column[
.center[<img src="document-img/ID&PWimage.png" alt="ID&パスワード認証イメージ" width="250px">]
]

---
.footnote_right[
概要
]

### ３つの認証方法
#### Email / PW 認証

.left-column[
* 登録メールアドレスに届くパスワード設定用のメールでパスワードを設定することでアカウントを作成します
* 有効なメールアドレスであることを確認した上で認証を行うことができます
]
.right-column[
.center[<img src="document-img/Email&PWimage.png" alt="メールアドレス&パスワード認証イメージ" width="250px">]
]

---
.footnote_right[
概要
]

### ３つの認証方法
#### 匿名認証

.left-column[
* 会員情報を入力することなくログインを行うことができます
* 一度ログアウトして再び匿名認証でログインをすると別会員として登録されるため、アプリを使い始めてもらうまで __仮会員__ としての利用用途があります
]
.right-column[
.center[<img src="document-img/Anonymousimage.png" alt="匿名認証イメージ" width="250px">]
]
---
layout: true
class: center, middle, inverse_sub
---
# ハンズオン

---
layout: false

.footnote_right[
.right[
ハンズオン<br>準備
]
]

## 準備
### 事前準備
下記登録を完了し、アカウントを作成しておいてください

* [Monaca](https://ja.monaca.io/register/start.html) の利用登録（無料）
* [ニフクラ mobile backend](https://mbaas.nifcloud.com/signup.htm) の利用登録（無料）

### 動作環境準備
* iOS: OS ver.10.0 ~ ver.13.4
* 端末: iphone 8 (13.4)
* Xcode: ver.11.4
* MacOS: ver.10.15.4

---
.footnote_right[
.right[
ハンズオン<br>作業手順
]
]

## 作業手順
.size_large_13[
1. Monacaの準備
1. mBaaSの準備
1. mBaaS Javascript SDK の導入と初期化
1. 動作確認と実装コード解説
  * ID / PW 認証
  * Email / PW 認証
  * 匿名認証
]

* 今回はmBaaSとの連携部分をよりわかりやすく理解するために、コーディング済みのプロジェクトを用意しました
* Monaca にプロジェクトをインポートして使用します

---
.footnote_right[
.right[
ハンズオン<br>1. Monacaの準備
]
]

### 1. Monacaの準備
* Monacaにログインをします

.center[![Monacaの準備1](document-img/Monaca_1.png)]
https://ja.monaca.io/

---
.footnote_right[
.right[
ハンズオン<br>1. Monacaの準備
]
]

#### サンプルプロジェクトのインポート

* プロジェクトをインポートします
  * [Monaca](https://ja.monaca.io) にログインし、「インポート」をクリックします
  * 「インポート方法」で「URL」をクリックします
.center[<img src="document-img/006_01.png" alt="import_project" width="400px">]
  * 下記URLをコピーして貼り付けます  
  https://github.com/NIFCLOUD-mbaas/MonacaUserDemoApp2.git
* プロジェクトがインポートされたら「開く」をクリックします

---
.footnote_right[
.right[
ハンズオン<br>1. Monacaの準備
]
]

* プロジェクトが開かれます

.center[<img src="document-img/Monaca_3.png" alt="Monacaの準備3" width="750px">]

これでMonacaの準備は完了です

---
.footnote_right[
.right[
ハンズオン<br>2. mBaaSの準備
]
]
### 2. mBaaSの準備
* mBaaS にログインします

.center[<img width="750px" alt="mBaaSの準備1" src="document-img/mBaaS_1.png">]
https://mbaas.nifcloud.com/

---
.footnote_right[
.right[
ハンズオン<br>2. mBaaSの準備
]
]

* 新しいアプリを作成します
* アプリ名を入力し、「新規作成」をクリックします　例）.color_blue[__UserDemo__]

.center[![mBaaSの準備2-1](document-img/mBaaS_2-1.png)]

* mBaaSを既に使用したことがある場合は、画面上方のメニューバーにある「+新しいアプリ」をクリックすると同じ画面が表示されます

.center[![mBaaSの準備2-2](document-img/mBaaS_2-2.png)]

---
.footnote_right[
.right[
ハンズオン<br>2. mBaaSの準備
]
]

* アプリが作成されるとAPIキー（２種類）が発行されます
    * APIキーは後で使用します
* ここでは使用しないので、「OK」で閉じます

.center[![mBaaSの準備3](document-img/mBaaS_3.png)]

---
.footnote_right[
.right[
ハンズオン<br>2. mBaaSの準備
]
]

* 管理画面が表示されます

.center[<img src="document-img/mBaaS_4.png" alt="mBaaSの準備4" width="600px">]

* 次に、会員管理機能を利用するための設定を行います

---
.footnote_right[
.right[
ハンズオン<br>2. mBaaSの準備
]
]

* 今回利用する３つの会員認証機能について利用許可設定を行います
* 右上の「アプリ設定」から「会員認証設定」、「基本」を開き、<br>それぞれ「許可する」を選択して「保存する」をクリックします
* 確認メールの送信にも「許可する」を選択して「保存する」をクリックします

.center[<img src="document-img/mBaaS_5.png" alt="会員管理設定1" width="750px">]

* これでmBaaSの準備は完了です

---
.footnote_right[
.right[
ハンズオン<br>3. mBaaS Javascript SDK の導入と初期化
]
]
### 3. mBaaS Javascript SDK の導入と初期化
* mBaaSを利用するためのSDKを導入します
* Monacaを開きます
* 上部メニューバーから「設定」＞「JS/CSSコンポーネントの追加と削除...」をクリックします
.center[<img src="document-img/add_js_sdk_0.png" alt="SDK導入0" width="280px">]

---
.footnote_right[
.right[
ハンズオン<br>3. mBaaS Javascript SDK の導入と初期化
]
]

* 「コンポーネント」の右のテキストフィールドに「`ncmb`」と入力し、「検索」をクリックします

.center[<img src="document-img/add_js_sdk_1.png" alt="SDK導入1" width="780px">]

---
.footnote_right[
.right[
ハンズオン<br>3. mBaaS Javascript SDK の導入と初期化
]
]
* 「ncmb」と表示されるので、「追加」をクリックします

.center[<img src="document-img/add_js_sdk_2.png" alt="SDK導入2" width="600px">]

* SDKのバージョンはそのまま（最新版を指定）で、「インストール」をクリックします
* 「`components/ncmb/ncmb.min.js`」のチェックボックスにチェックを入れて「保存する」をクリックします

.center[<img src="document-img/add_js_sdk_3.png" alt="SDK導入3" width="600px">]

---
.footnote_right[
.right[
ハンズオン<br>3. mBaaS Javascript SDK の導入と初期化
]
]

* 下記のように表示されれば導入完了です！

.center[<img src="document-img/add_js_sdk_4.png" alt="SDK導入4" width="780px">]

---
.footnote_right[
.right[
ハンズオン<br>2. SDKの初期化
]
]
* 導入したSDKを初期化して使用できる状態にします
* `www/js/mb.js`を開きます

.center[<img src="document-img/Monaca_appjs.png" alt="SDK導入4" width="600px">]

---
.footnote_right[
.right[
ハンズオン<br>2. APIキーの設定
]
]

* １行目「APIキーの設定」にmBaaSでアプリ作成時に発行されたAPIキーを設定します

.center[<img src="document-img/code_api.png" alt="SDK初期化1" width="750px">]

* mBaaS の管理画面から、<br>APIキー（アプリケーションキーとクライアントキー）をコピーして、<br>それぞれ`YOUR_NCMB_APPLICATIONKEY`と`YOUR_NCMB_CLIENTKEY`に貼り付けます
* このとき、シングルクォーテーション「`'`」は消さないように注意しましょう

---
.footnote_right[
.right[
ハンズオン<br>2. APIキーの設定
]
]

* APIキーはmBaaSの管理画面「アプリ設定」＞「基本」で確認できます
* アプリケーションキーとクライアントキーをコピーして、それぞれ`YOUR_NCMB_APPLICATIONKEY`と`YOUR_NCMB_CLIENTKEY`に貼り付けます
* このとき、シングルクォーテーション「`'`」は消さないように注意しましょう


.center[<img src="document-img/confirm_apikey.png" alt="SDK初期化2" width="700px">]

---
.footnote_right[
.right[
ハンズオン<br>3. 読み込むJavaScriptファイルの変更
]
]

* 設定したAPIキーを使用して、５行目～「SDKの初期化」でSDKを初期化をしています

.center[<img src="document-img/code_api2.png" alt="SDK初期化3" width="700px">]

* 作成したインスタンス「`ncmb`」を使うことで、mBaaSの機能を使用できます
* 作業は以上です！

#### .color_blue[作業が完了したら保存を忘れずに！]
* メニューバーの「保存」をクリックします
 * Windowsの場合は、「Ctrl + S」でも保存できます
 * Macの場合は、「Command + S」でも保存できます

ここからは動作確認をしながら実装コードを見ていきましょう！

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

### 4. 動作確認と実装コード解説

次の流れで動作確認と実装コードを解説していきます

.size_large_13[
1. ID / PW 認証 新規登録
1. ログアウト
1. ID / PW 認証 ログイン
1. Email / PW 認証 新規登録
1. Email / PW 認証 ログイン
1. 匿名認証
1. おまけ
]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]


#### 1. ID / PW 認証 新規登録


* ID / PW で新しい会員を作成します

.center[<img src="document-img/ID&PW_1.png" alt="ID&パスワード認証新規登録" width="400px">]

* 「Sign up」をクリックすると会員情報が登録され、ログイン処理を行います
* ログイン後、Alert画面に作成された会員会員の「objectId」が表示されます

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]


#### 1. ID / PW 認証 新規登録

* Alertの「OK」を押すとログアウトされます

.center[<img src="document-img/ID&PW_2.png" alt="ログアウト" width="180px">]

* ここまでで会員情報の「登録」「ログイン」「ログアウト」の３つの処理が行われています

実際にmBaaSの管理画面を確認して、どのように会員情報が保存されているか見てみましょう！

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 1. ID / PW 認証 新規登録

* mBaaSの管理画面を開いて「会員管理」をクリックします

.center[<img src="document-img/ID&PW_3.png" alt="ID&パスワードmBaaS画面" width="750px">]

* １件データが作成されていることを確認できます
* IDは「userName」として、PWは「password」として登録されます
* mBaaS保有データにすべてに自動で割り振られるUUID「objectId」や、<br>会員情報が登録された日時として「createDate」などの値が付与されます

.size_small_7[
* 注：PWは暗号化されるため、<br>　　管理画面からも確認することはできません（仕様）
]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 1. ID / PW 認証 新規登録

* 実装コードは以下のように記述しています
 * `wwww/js/mb.js` の `signupByID` メソッド内参照

.size_small_9[

```js
// user インスタンスの生成
var user = new ncmb.User();
// ID/PWで新規登録
user.set('userName', username).set('password', password)
    .signUpByAccount()
    .then(function(user) {
        /* 処理成功 */
        console.log('【ID/PW 認証】新規登録成功');
        // 新規登録したuserインスタンスでログイン
        ncmb.User.login(user)
                 .then(function(user) {
                     /* 処理成功 */
                     userSuccess('【ID/PW認証】ログイン成功:', user);
                 })
                 .catch(function(error) {
                     /* 処理失敗 */
                     userError('【ID / PW 認証】ログイン失敗:', error);
                 });
    })
    .catch(function(error) {
        /* 処理失敗 */
        userError('【ID / PW 認証】新規登録失敗:', error);
    });
```

]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 2. ログアウト

* 実装コードは以下のように記述しています
 * `wwww/js/mb.js` の `logout` メソッド内参照

```js
// ログアウト
ncmb.User.logout();
```

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 3. ID / PW 認証 ログイン

.left-column[
* ログアウト（AlertのOKをタップ）すると、元の画面に戻ります
* 先ほど新規作成したアカウントでログインしてみましょう
]
.right-column[
.center[<img src="document-img/ID&PW_2.png" alt="ログアウト" width="80px">]
]

.center[<img src="document-img/ID&PW_4.png" alt="ID&パスワードログイン" width="400px">]

* 会員情報が表示されればとログイン成功です

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 3. ID / PW 認証 ログイン

* 既存会員情報と照合してログインを行います
* 実装コードは以下のように記述しています
 * `wwww/js/mb.js` の降 `signinByID` メソッド内参照

```js
// ID/PWでログイン
ncmb.User.login(username, password)
         .then(function(user) {
             /* 処理成功 */
             userSuccess('【ID/PW認証】ログイン成功:', user);
         })
         .catch(function(error) {
             /* 処理失敗 */
             userError('【ID / PW 認証】ログイン失敗:', error);
         });
```

.size_small_9[
* ログイン処理は、２パターンあります◎
 1. 会員情報のインスタンスで行う場合（新規登録処理で使用）<br>`.login(user)`
 1. ID/パスワードで行う場合（ログイン処理で使用）<br>`.login(username, password)`
]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* Alertの「OK」をタップしてログアウトをします
* 「Email / PW 認証」画面を開き、新規登録を行います

.center[<img src="document-img/Email&PW_1.png" alt="メールアドレス&パスワード画面へ" width="500px">]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* __有効なメールアドレス__ を入力します

.size_small_7[
* Email/PW認証の場合は、登録したメールアドレスに配信されるメールにてパスワードの設定を行うため、 __有効なメールアドレス__ を設定する必要があります
]

.center[<img src="document-img/Email&PW_2.png" alt="メールアドレス&パスワード新規登録1" width="750px">]

* 届いたメールのURLをクリックします

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* パスワードを設定します

.center[<img src="document-img/Email&PW_3.png" alt="メールアドレス&パスワード新規登録2" width="700px">]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* 設定完了メールが届きます

.center[<img src="document-img/Email&PW_4.png" alt="メールアドレス&パスワード新規登録3" width="400px">]

* 会員情報が登録されたことを、mBaaSの管理画面で確認しましょう

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* 会員が１件追加されたことが確認できます

.center[<img src="document-img/Email&PW_5.png" alt="メールアドレス&パスワード新規登録4" width="750px">]

* メールアドレス認証の場合は`userName`が自動的に設定されます
  * この`userName`を利用してID/PW認証でのログインも可能です
* `mailAddressConfirm`の値（`true`/`false`）はメールにてPW設定を行った場合に`true`が設定されます
  * ID/PW認証の会員にも追加でメールアドレスの設定が可能です。<br>この場合は`false`が設定されます。

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* 実装コードは以下のように記述しています
 * `wwww/js/mb.js` の `signupByEmail` メソッド内参照

```js
// 設定したEmailに会員登録メールを送信
ncmb.User.requestSignUpEmail(mailAddress)
        .then(function(user){
            /* 処理成功 */
            // 省略
        })
        .catch(function(error){
            /* 処理失敗 */
            userError('【Email/PW認証】新規登録メールの配信に失敗しました:', error);

        });
```

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 4. Email / PW 認証 新規登録

* 参考
  * 会員登録時に配信されるメールの文章や、パスワード登録画面デザインや自由にカスタマイズ可能です

.size_small_7[
* 「アプリ設定」＞「会員認証設定」の「メールの文面」、「カスタムページ」参照
]

.center[<img src="document-img/Email&PW_6.png" alt="メールアドレス&パスワード新規登録5" width="600px">]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 5. Email / PW 認証 ログイン

* Alertの「OK」をタップしてログアウトをします
* Email/PW認証でログインしてみましょう
* メールアドレスとパスワードを入力します

.center[<img src="document-img/Email&PW_7.png" alt="メールアドレス&パスワードログイン1" width="480px">]


---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 5. Email / PW 認証 ログイン

* 実装コードは以下のように記述しています
    * `wwww/js/mb.js` の `signinByEmail` メソッド内参照

```js
// Email/PWでログイン
ncmb.User.loginWithMailAddress(mailAddress, password)
         .then(function(user) {
             /* 処理成功 */
             userSuccess('【Email/PW認証】ログイン成功:', user);
         })
         .catch(function(error) {
             /* 処理失敗 */
             userError('【Email/PW認証】ログイン失敗:', error);
         });
```

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 6. 匿名認証

* Alertの「OK」をタップしてログアウトをします
* 匿名認証でログインしてみましょう

.center[<img src="document-img/anonymous_1.png" alt="匿名ログイン1" width="500px">]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 6. 匿名認証

* 匿名会員として一回のログイン中のみ使用可能なアカウントが作成されます

.center[<img src="document-img/anonymous_2.png" alt="匿名ログイン2" width="500px">]

* 会員情報が登録されたことを、mBaaSの管理画面を確認しましょう

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

#### 6. 匿名認証

.size_small_9[
* 自動で`userName`と`password`が割り振られます
* 匿名会員では`authData`が設定されていることが確認できます
* `authData`にSDKの内部で発行したIDを設定して会員情報を作成しています
  * 例：`{"anonymous":{"id":"6f9cb6aa-be0f-6756-6fd9-c58a5ae737ad"}}`
* 匿名会員情報はログアウト（またはセッション切れ）で破棄され、無効な会員情報となります
  * 再び匿名会員としてログインを行うと別の会員として登録されます
]

.center[<img src="document-img/anonymous_3.png" alt="匿名ログイン3" width="750px">]

.size_small_9[
* ログイン後にIDとパスワードを設定（会員情報の更新処理）することで、<br> __通常の会員に変更__ することも出来ます
]

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

.size_large_13[
#### 6. 匿名認証
]

* 実装コードは以下のように記述しています
 * `wwww/js/mb.js` の 161行目以降 `signinByAnonymousID` メソッド内参照

```js
// 匿名でログイン
ncmb.User.loginAsAnonymous()
         .then(function(user){
             /* 処理成功 */
             userSuccess('【匿名認証】ログイン成功:', user);
         })
         .catch(function(error){
             /* 処理失敗 */
             userError('【匿名認証】ログイン失敗:', error);
         });
```

---
.footnote_right[
.right[
ハンズオン<br>4. 動作確認と実装コード解説
]
]

.size_large_13[
#### 7. おまけ
]

#### 現在ログイン中の会員を取得

```js
ncmb.User.getCurrentUser();
```

#### 認証有効時間（セッション）の設定
* デフォルトでは 24時間 で設定されています（最大168時間）

.center[<img src="document-img/mBaaS_6.png" alt="セッション設定" width="780px">]


---
## まとめ

.size_large_13[
__３つの会員認証機能を体験しました！__

1. ID / PW 認証
2. Email / PW 認証
3. 匿名認証
]

* 会員管理機能の導入は mBaaS で簡単に実現可能！
 * Monaca なら JavaScript SDK が利用できるから実装も簡単！
 * 既存アプリにもすぐに導入可能！
* ID / PW で気軽な会員管理を実現！
* Email / PW で不正な会員登録を防ぎ、確実な会員管理を！
* 仮会員として匿名認証を上図に利用することで、通常会員化の導線が作れる！

---
layout: true
class: center, middle, inverse_sub
---

# おわりに

---
layout: false

## おわりに
いかがでしたでしょうか？こんなに使いやすくて便利なmBaaSをもっと活用してみたい方へ、mBaaSの各機能をすぐに試すことができるサンプルアプリを多数ご用意しています。Monacaにサンプルプロジェクトをインポートして、簡単な操作をするだけですぐにお試しいただけます！ぜひご活用ください。

.size_large_11[
* [mobile backend を体験しよう！](https://github.com/NIFCloud-mbaas/monaca_data_registration)
 * 使用機能 / データストア
* [アプリにプッシュ通知を組み込もう！](https://github.com/NIFCloud-mbaas/MonacaPushApp)
 * 使用機能 / プッシュ通知
* [地図アプリを作ろう！](https://github.com/NIFCloud-mbaas/MonacaMapApp)
 * 使用機能 / データストア,位置情報検索
* [and more...](https://mbaas.nifcloud.com/doc/current/tutorial/tutorial_monaca.html)
]

---
layout: true
class: center, middle, inverse_sub
---
.center[
## ご清聴ありがとうございました！
]
