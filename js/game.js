window.onload=()=>{

   
   const box02 = document.getElementById("box02");
   let inner = document.getElementsByClassName("innerbox");
   inner = Array.from(inner);
   const text = document.getElementsByClassName("anime");
   const defaultcard = document.getElementsByClassName("defaultcard");
   const defaultcardAll = document.querySelectorAll("defaultcard");
   let card = document.getElementsByClassName("card");;
   card = Array.from(card);
   let cardOther = document.getElementsByClassName("cardOther");
   cardOther = Array.from(cardOther);
   let innerWrap = document.getElementsByClassName("innerwarp");
   innerWrap = Array.from(innerWrap);
   let child = inner[0].children;
   child = Array.from(child);
   const decision = document.getElementById("btn")
   const click = document.getElementById("click");
   let classclick = document.querySelectorAll('.click');
   const innerWindow = document.getElementById("innerWindow");
   let screen = true;
   let count = 5;
   let flag =1;
   let trf=[
      "translate(-100px,-10px) rotate(-20deg)",
      "translate(-50px,-25px) rotate(-10deg)",
      "translateY(-40px)",
      "translate(50px,-25px) rotate(10deg)",
      "translate(100px,-10px) rotate(20deg)"
   ] 
   let trfClick05=[
      "translate(-100px,-30px) rotate(-20deg)",
      "translate(-50px,-45px) rotate(-10deg)",
      "translateY(-40px)",
      "translate(50px,-45px) rotate(10deg)",
      "translate(100px,-30px) rotate(20deg)"
   ] 
   let trfClick04=[
      "translate(-75px,-15px) rotate(-15deg)",
      "translate(-25px,-25px) rotate(-5deg)",
      "translate(25px,-25px) rotate(5deg)",
      "translate(75px,-15px) rotate(15deg)"
   ] 
   let trfClick03=[
      "translate(-50px,-45px) rotate(-10deg)",
      "translateY(-40px)",
      "translate(50px,-45px) rotate(10deg)"
   ] 
   let trfClick02=[
      "translate(-25px,-25px) rotate(-5deg)",
      "translate(25px,-25px) rotate(5deg)"
   ] 
   let trfClick01=[
      "translateY(-40px)"
   ] ;
   

         const disappearG = function(cnt){
            const innerTest = function( test01 ){
               card = document.getElementsByClassName("card");
               card = Array.from(card);
               card.forEach(element => {
                  element.style.transform="";
                  element.removeAttribute("id")
               });
               count=cnt;
               console.log(cnt)
               card[cnt].style.transform=test01[cnt];
               card[cnt].setAttribute('id', 'choice')
               count=cnt;
            }//innerTest
      
            if( count === cnt){
               card = document.getElementsByClassName("card");
               card[cnt].style.transform="";
               card[cnt].removeAttribute("id")
               count = 5
               btn.style.display="none"
            }else{
               btn.style.display="block"
               if(card.length ===　5){
                  // console.log("i")
                     innerTest( trfClick05 );
                  }
                  if(card.length === 4){
                     // console.log("b")
                     innerTest( trfClick04 );
                  }
                  if(card.length ===　3){
                     innerTest( trfClick03 );
                  }
                  if(card.length ===　2){
                     innerTest( trfClick02 );
                  }
                  if(card.length ===　1){
                     innerTest( trfClick01 );
                  }
               }
            }//disappear

   
   

// カード配り
   let d=0; 
   let h=0;
   let g=0
   let b=0;
         // 自分のカード
         let testTimer00 = setInterval(function(){
            inner[0].children[d].classList.add("fcardAnimation");
               if(d >= inner[1].children.length-1){
                  clearInterval(testTimer00);
                  d = 0;
               }else{
                  d++
               }
             } , 200);
             
             

            //  その他

             let testTimer01 = setInterval(function(){
               inner[1].children[h].classList.add("fcardAnimation");
                  if(h >= inner[1].children.length-1){
                     clearInterval(testTimer01);
                     h = 0;
                  }
                  h++
                } , 200);
                
                let testTimer02 = setInterval(function(){
                  inner[2].children[g].classList.add("fcardAnimation");
                     if(g >= inner[2].children.length-1){
                        clearInterval(testTimer02);
                        g = 0;
                     }
                     g++
                   } , 200);

                   let testTimer03 = setInterval(function(){
                     inner[3].children[b].classList.add("fcardAnimation");
                        if(b >= inner[3].children.length-1){
                           clearInterval(testTimer03);
                           b = 0;
                        }
                        b++
                      } , 200);
           
// クリックイベント全体
       function secondAnime(){
         let fcardAnimation=document.getElementsByClassName("fcardAnimation");
            fcardAnimation=Array.from(fcardAnimation);
            fcardAnimation.forEach(event=>{
            event.classList.remove("defaultcard");
         })
         fcardAnimation.forEach(event=>{
            event.classList.add("scardAnimation");
         });
      
         const scardAnimation = document.getElementsByClassName("scardAnimation");

         for(let f=0;f<=inner[0].children.length-1 ;f++){
            scardAnimation[f].classList.remove("defaultcard");
            scardAnimation[f].classList.remove("fcardAnimation");
         }

// 一回目クリックイベント
         for( let p=0;p<=card.length-1;p++){
            // if(flag === 1){
               // card[p].addEventListener("click",disappearG(p))
               card[p].onclick=function(){
                  disappearG(p)
               }
         }
// 一回目クリックイベント

        
// クリックイベント外す
         let removeClass = function(){
            card.removeEventListener("click",disappearG());
         }
// クリックイベント外す

// カード決定イベント
         btn.onclick=function(){
            btn.style.display="none"
            document.getElementById("choice").parentNode.removeChild(document.getElementById("choice"));//idつけてる
            card.forEach(element => {//id消してる
               element.removeAttribute("id")
            });//id消してる


            // innerWrap.forEach(element => {
            //    innerWrap[removeCount].removeChild(element.lastElementChild);
            // });
            // card.indexOf.splice(count,1)
            card = document.getElementsByClassName("card",);
            card = Array.from(card);
            cardOther = document.getElementsByClassName("cardOther");
            cardOther = Array.from(cardOther);
            innerWrap = document.getElementsByClassName("innerwarp");
            innerWrap = Array.from(innerWrap);

            let classAR = function(addName,removeName){
               card.forEach(element => {//クラスのつけ外し
                  element.classList.add(addName);
                  element.classList.remove(removeName);
               });//クラスのつけ外し
               let removeCount = 0;
               let otherRemove = setInterval(() => {
   
                  if(removeCount <=  innerWrap.length-1){
                     innerWrap = document.getElementsByClassName("innerwarp");
                     innerWrap = Array.from(innerWrap);
                     for(let y=0;y<= innerWrap[removeCount].children.length-1;y++){
                        innerWrap[removeCount].children[y].classList.add(addName);
                        innerWrap[removeCount].children[y].classList.remove(removeName);
                     }
                     innerWrap[removeCount].removeChild(innerWrap[removeCount].lastElementChild); 
                     // innerWrap[removeCount].children.forEach(element => {//クラスのつけ外し
                     //    element.classList.add(addName);
                     //    element.classList.remove(removeName);
                     // });
                     removeCount=removeCount+1
                  }else{
                     clearInterval(otherRemove);
                     removeCount = 0
                     screen = true;
                     screenSwitch(screen)
                  }
               }, 1000);

               // cardOther.forEach(element => {//クラスのつけ外し
               //    element.classList.add(addName);
               //    element.classList.remove(removeName);
               // });
               const screenSwitch = (screen) => {
                  if(screen){
                     innerWindow.style.transform="translateX(-100vw)";
                  } else {
                     innerWindow.style.transform="";
                  }
               }
               
               let position = document.getElementsByClassName(addName);//つけたクラス
               position = Array.from(position);
               card = document.getElementsByClassName("card");
               card = Array.from(card);
               for(let w = 0; w<=card.length-1 ; w++){
                  card[w].onclick=function(){
                     disappearG(w)
                  }
               }
               count = 5;

            }
            if(card.length===4){
               classAR("cardPosition4","scardAnimation")

            }
            if(card.length===3){
               classAR("cardPosition3","cardPosition4")

            }
            if(card.length===2){
               classAR("cardPosition2","cardPosition3")
              
            }
            if(card.length===1){
               classAR("cardPosition1","cardPosition2")
            }  
         }
// カード決定イベント
   }
// クリックイベント全体


   setTimeout(secondAnime, 1600);
}