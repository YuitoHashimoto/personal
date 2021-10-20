window.onload=()=>{
   // footボタンのジャンプ処理
   const camera = document.getElementById('camera');
   const gameStart = document.getElementById('gameStart');

   camera.onclick = () => {
      window.location.href = "camera.html"
   }

   gameStart.onclick = () => {
      window.location.href = "game.html"
   }


   const wrap = document.getElementById("wrap");
   const left = document.getElementById("left");
   const right = document.getElementById("right");
   let move = 30;//移動距離
   let flag = true;

   function leftMove(){//左ボタン押した時の移動処理
      flag = false;
      wrap.style.transition="0.2s";
      move = move - 10;
      wrap.style.transform="translateX(-" + move + "%)"
      if( move<=20 ){
         move=move+30;
         wrap.ontransitionend=()=>{ 
            wrap.style.transition="none";
            wrap.style.transform="translateX(-" + move + "%)";
            flag = true;
         }
      } else{
         wrap.ontransitionend=()=>{ 
            flag = true;
          }    
      }
        
   }
   
   function rightMove(){//右ボタン押した時の移動処理
      flag = false;
      console.log(move);
      wrap.style.transition="0.2s";
      move = move + 10;
      wrap.style.transform="translateX(-" + move + "%)"

      if( move>=50 ){
         move=move-30;
         wrap.ontransitionend=()=>{ 
            wrap.style.transition="none";
            wrap.style.transform="translateX(-" + move + "%)";
            flag = true;
         }
      } else{
         wrap.ontransitionend=()=>{ 
            flag = true;
          }    
      }
   }
   right.onclick=(event)=>{
      if( flag ){
         rightMove();
      }
      
   }
   left.onclick=()=>{
      if( flag ){
         leftMove();
      }
   }


   setInterval(rightMove, 4000);
  
}