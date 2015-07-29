/*****
簡単なスライドショーのプログラム
*****/

window.onload = function() {

    /*============================
     * 変数の定義
     *===========================*/

    // 写真のリストの定義
    var photoList = [
        { src: 'img/img01.png', title: 'sky' },
        { src: 'img/img02.png', title: 'door' },
        { src: 'img/img03.png', title: 'city' },
        { src: 'img/img04.png', title: 'lake' }
    ];
    var photoLength = photoList.length;

    // 要素の取得
    var photo = document.getElementById('photo');
    var nextBtn = document.getElementById('nextBtn');
    var title = document.getElementById('title');

    // 現在のインデックスを保存するための変数
    var currentIndex = 0;

    /*============================
     * 関数の定義
     *===========================*/

    // 指定の写真に表示を切り替える関数
    function showPhoto(index) {
        // 全ての画像を非表示
        for (var i = 0; i < photoLength; i++) {
            photoList[i].elem.style.display = 'none';
        }

        // 表示する対象の要素を取得
        var targetPhoto = photoList[index];

        // タイトルを表示
        var viewNumber = index + 1;
        title.innerHTML = '[' + viewNumber + '] ' + targetPhoto.title;

        // 画像を表示
        targetPhoto.elem.style.display = 'inline';
    }

    /*============================
     * イベントの設定
     *===========================*/

    // nextボタンのイベントを設定
    nextBtn.onclick = function() {
        // 表示するインデックスを計算
        currentIndex++;
        if (currentIndex === photoLength) {
            currentIndex = 0;
        }

        // 画像を切り替える
        showPhoto(currentIndex);
    };

    /*============================
     * 初期化処理
     *===========================*/

    // img要素をHTMLに追加
    var item, img;
    for (var i = 0; i < photoLength; i++) {
        item = photoList[i];

        // img要素を作成
        img = document.createElement('img');

        // 作成したimg要素に属性を設定
        img.src = item.src;
        img.alt = item.title;

        // 作成したimg要素をHTMLに追加
        photo.appendChild(img);

        // 作成したimg要素を保存
        item.elem = img;
    }

    // 初期表示のためにshowPhotoを一度だけ実行する
    showPhoto(currentIndex);
};