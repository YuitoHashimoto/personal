
'use strict';
window.onload = () =>{
    
    // let cardPersentage = document.querySelector('#cardPersentage');
    // let cardFrame = document.querySelector('#cardFrame');
    let num = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let personaly = [
        ['img/card_youkya.png', "陽キャ"],
        ['img/card_inkya.png', "陰キャ"],
        ['img/card_yankee.png', "ヤンキー"],
        ['img/card_majime.png', "真面目"],
        ['img/card_otaku.png', "オタク"]
    ]

    console.log(Btn); 

    // ランダムにnumの配列の中身を取得する
    let random = Math.floor(Math.random()*num.length);
    console.log(num[random]);

    // ランダムにpersonalyの配列の中身を取得する
    let randomImg = Math.floor(Math.random()*personaly.length);
    console.log(personaly[randomImg][0]);

    // h1の度数を変更
    cardPersentage.innerHTML = `${personaly[randomImg][1]}度${num[random]}%`;

    // imgのカードフレームを変更
    cardFrame.setAttribute('src', personaly[randomImg][0]);

    // pの度数を変更
    number.innerHTML = `${num[random]}`;
    
    console.log(`あなたは${personaly[randomImg][1]}で${num[random]}%です`);

    let btn = document.querySelector('#btn');
    btn.onclick = () =>{
        let card = document.querySelector('#card');
        console.log(card);
    }
}
