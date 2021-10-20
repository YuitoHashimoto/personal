"use strict";

window.onload = () =>{
    const back = document.querySelector('#back');

    back.onclick = () => {
        window.location.href = "home.html"
    }

    let video = document.querySelector('#camera');
    let shutter = document.querySelector('#shutter');
    // let SAVE_URL = "index.html";
    /* カメラ設定 */
    const set = {
        video: {
            width: 375,
            height: 400,
            facingMode: "user"/* フロントカメラを使用する */
            // facingMode: {exact: "environment"} /* リアカメラを使用する */
        }
    };

    // カメラを<video>と同期させる
    navigator.mediaDevices.getUserMedia(set)
    .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })

    // シャッターボタン
    shutter.onclick = () =>{
        let canvas = document.querySelector('#picture');
        const context = canvas.getContext('2d');
    // 映像を一時停止する
       video.pause();

    // 0.5秒後に映像を再開
       setTimeout(() => {
           video.play();
       },1000);

    // canvasに撮った映像を描画
       context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // canvasのデータを取得する
       const canvasData = canvas.toDataURL("img/png");
       console.log(canvasData);

    // 送信情報の設定
       const param = {
           method: "post",
           headers: {
               "Content-Type": "application/json; charset=utf-8"
           },
           body: JSON.stringify({data: canvas})
       };
       console.log(param);
    
    // サーバーに送信
        // sendServer(SAVE_URL, param);

    // 確認画面に遷移する
        location.href = 'makeCard.html';
    }
}