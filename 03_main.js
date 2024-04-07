//一個目のinputの処理
let form1 = document.getElementById('first');
//form1.addEventListener('change', {name:form1, handleEvent: isLength4});

//二個目のinputの処理
let form2 = document.getElementById('second');
//form2.addEventListener('change', {name:form2, handleEvent: isLength4});

// ３個めのinputの処理
let form3 = document.getElementById('third');
//form3.addEventListener('change', {name:form3, handleEvent: isLength5});

function isLength4(e){ //eはなくてもいい。イベント発生元の要素だけでなく押されたキーの情報なども取得できる。
    let form = this.name;  //関数の中に記述することでイベント発生元の要素を取得することができる
    if (!form.value.match(/^[0-9]{4}$/)) {
        window.alert('数字4ケタで入力してください');
        form.value = '';
    }
}

function isLength5(e){ 
    let form = this.name;  
    if (!form.value.match(/^[0-9]{5}$/)) {
        window.alert('数字5ケタで入力してください');
        form.value = '';
    }
}



form1.addEventListener('keyup', function(event){
    let regex = /^[0-9]{4}$/;
    let nextField = document.getElementById('second');
    if(form1.value.match(regex)){
        nextField.focus();
        }
})

form2.addEventListener('keyup', function(event){
    let regex = /^[0-9]{4}$/;
    let nextField = document.getElementById('third');
    if(form2.value.match(regex)){
        nextField.focus();
        }
})



// パスワード非表示の処理
const passwordToggle = document.querySelector('.password__toggle')
 
passwordToggle.addEventListener('click', (e) => {
    const input = e.target.previousElementSibling
    const type = input.getAttribute('type') //password or textが返る
    // 条件式 ? Trueの処理 : Falseの処理→条件（三項）演算子
    input.setAttribute('type', type === 'password' ? 'text' : 'password')
    // element（クラス名をチェックする対象）にクラス名があれば、クラス名を除去し、クラス名がなければ追加します。
    passwordToggle.classList.toggle('is-visible')
})


// パスワード入力中に青くする処理
let inputPassword = document.getElementById('input-password');
let passwordWrapper = document.getElementsByClassName('password-wrapper')[0]; // HTMLCollectionから要素を取得

inputPassword.addEventListener('focus', (e) => {
    passwordWrapper.style.outline = '1px #6666ff solid';
});

inputPassword.addEventListener('blur', (e) => {
    passwordWrapper.style.outline = '';
});


// 自動遷移処理
// function nextFieldToSecond(num){
//     let enterrdNum = num.value;
//     let regex = /^[0-9]{4}$/;
//     let nextField = document.getElementById('second');
//     if(enterrdNum.match(regex)){
//         nextField.focus();
//         }else{
//             return;
//         }
// }

function nextFieldToThird(num){
    let enterrdNum = num.value;
    let regex = /^[0-9]{4}$/;
    let nextField = document.getElementById('third');
    if(enterrdNum.match(regex)){
        nextField.focus();
        console.log('OK')
        }else{
            console.log('NG')
            return;
        }
}


// データの保存場所
function saveIdData(){
    let cofilm = window.confirm('IDを登録します。よろしいですか？');
    let warningArray = [];
    if(cofilm){
        let first = document.getElementById('first').value;
        let second = document.getElementById('second').value;
        let third = document.getElementById('third').value;

        if(first.length == 4 && second.length == 4 && third.length == 5){
            document.getElementById('id-js').innerHTML = form1.value + "-" + form2.value + "-" + form3.value;

            chrome.storage.sync.set({'first': first}, function () {});
            chrome.storage.sync.set({'second': second}, function () {});
            chrome.storage.sync.set({'third': third}, function () {});
            // let f = chrome.storage.sync.set({'first' : first});
            // let s = chrome.storage.sync.set({'second' : second});
            // let t = chrome.storage.sync.set({'third' : third});

            // let f = syncStorage.setItem('first', first);
            // let s = syncStorage.setItem('second', second);
            // let t = syncStorage.setItem('third', third);

            // 登録情報に反映する
            // document.getElementById('id-js').innerHTML = form1.value + "-" + form2.value + "-" + form3.value;
            

        } else {
            let warningArray = [];
            if (first.length !== 4) {
                warningArray.push('1番目のIDが違います。4ケタで入力してください');
                form1.value = '';
            }
            if (second.length !== 4) {
                warningArray.push('2番目のIDが違います。4ケタで入力してください');
                form2.value = '';
            }
            if (third.length !== 5) {
                warningArray.push('3番目のIDが違います。5ケタで入力してください');
                form3.value = '';
            }
            window.alert('＜正しく入力されていてもエラーが出る方へ＞' + '\n' + '全角文字で入力していませんか？' + '\n' + '\n' + warningArray.join('\n'));
        }
            
        
    }
}


function savePasswordData(){
    // window.alert('パスワードを登録しました');
    let confilm = window.confirm('パスワードを登録します。よろしいですか？');
    if(confilm == true){
        let data = document.getElementById('input-password').value;
        let length = data.length;
        let chr = '●';
        let setData = chr.repeat(length);
        document.getElementById('pass-js').innerHTML = setData;

        chrome.storage.sync.set({'password': data}, function () {});

        
        //let pass = chrome.storage.sync.set({'password' : data});
        //let pass = syncStorage.setItem('password', data);
    }
}


function deleteId(){
    let conf = window.confirm('登録されたID情報を削除します。よろしいですか？');
    if(conf){
        let first = document.getElementById('first');
        let second = document.getElementById('second');
        let third = document.getElementById('third');
        first.value = '';
        second.value = '';
        third.value = '';

        let p = document.getElementById('id-js');
        p.innerHTML = '登録情報はありません。';
        
        chrome.storage.sync.set({'first': ''}, function () {});
        chrome.storage.sync.set({'second': ''}, function () {});
        chrome.storage.sync.set({'third': ''}, function () {});

        // chrome.storage.sync.set({'first' : ''});
        // chrome.storage.sync.set({'second' : ''});
        // chrome.storage.sync.set({'third' : ''});

        // syncStorage.setItem('first', '');
        // syncStorage.setItem('second', '');
        // syncStorage.setItem('third', '');
    }
}


function deletePass(){
    let conf = window.confirm('登録されたパスワードを削除します。よろしいですか？');
    if(conf){
        let data = document.getElementById('input-password');
        data.value = '';

        let p = document.getElementById('pass-js');
        p.innerHTML = '登録情報はありません。'

        chrome.storage.sync.set({'password': ''}, function () {});
        //chrome.storage.sync.set({'password' : ''});
        // syncStorage.setItem('password', '');
    }
}



// データ復元（起動時）
// function restoreData(){
//     let value_data_first = chrome.storage.sync.get('first');
//     let value_data_second = chrome.storage.sync.get('second');
//     let value_data_third = chrome.storage.sync.get('third');
//     let value_data_password = chrome.storage.sync.get('password');
        
//     document.getElementById('first').value = value_data_first;
//     document.getElementById('second').value = value_data_second;
//     document.getElementById('third').value = value_data_third;
//     document.getElementById('input-password').value = value_data_password;

//     // IDとパスワードを変数置き
//     let mergeId = value_data_first + value_data_second + value_data_third;
//     let mergePass = value_data_password
//     console.log(mergePass)

//     // IDとパスワードの長さを取得
//     let idLen = mergeId.length;

//     if(idLen == 0 && typeof idLen === undefined){
//         document.getElementById('id-js').innerHTML = '登録IDはありません。'
//     }else{
//         document.getElementById('id-js').innerHTML = first + '-' +  second + '-' + third
//     }
// };

// データ復元（起動時）
async function restoreData(){
    await chrome.storage.sync.get(['first', 'second', 'third', 'password'], function(items) {
        let value_data_first = items.first;
        let value_data_second = items.second;
        let value_data_third = items.third;
        let value_data_password = items.password;
        
    document.getElementById('first').value = value_data_first;
    document.getElementById('second').value = value_data_second;
    document.getElementById('third').value = value_data_third;
    document.getElementById('input-password').value = value_data_password;

    // IDを設定
    let mergeId = value_data_first + '-' + value_data_second + '-' + value_data_third;
    let idLen = value_data_first + value_data_second + value_data_third;

    if (idLen.length == 0 || idLen === undefined || idLen === null) {
        document.getElementById('id-js').innerHTML = '登録IDはありません。';
    } else {
        document.getElementById('id-js').innerHTML = mergeId;
    }
    
    // パスワードを設定
    if (value_data_password.length == 0) {
        document.getElementById('pass-js').innerHTML = '登録パスワードはありません。';
    } else {
        let passLen = value_data_password.length;
        let chr = '●';
        let setData = chr.repeat(passLen);
        document.getElementById('pass-js').innerHTML = setData;
    }
    });
}

// ID登録時に実行
let idRegisterButton = document.getElementById('register-id');
idRegisterButton.addEventListener('click', saveIdData);

// ID削除時に実行
let idCancelButton = document.getElementById('cancel-id');
idCancelButton.addEventListener('click', deleteId);

// パスワード登録時に実行
let passwordRegisterButton = document.getElementById('register-pass')
passwordRegisterButton.addEventListener('click', savePasswordData);

// パスワード削除時に実行
let passwordCancelButton = document.getElementById('cancel-pass');
passwordCancelButton.addEventListener('click', deletePass);


// 読み込み時に複数の関数を実行
window.addEventListener('load', function() {
    restoreData();
    // 他の処理もここで実行する
});