const calc = {
    clear : function () {//(AC) function
         out.innerHTML = '0';
         txt.innerHTML = '0';
    },
 
    inpt : function (btnName) {//Add txt
         if (txt.innerHTML == "0"){
             txt.innerHTML = '';
             txt.innerHTML += btnName;    
         }
         else{
             txt.innerHTML += btnName;
         }
         
    },

} 

let out = document.getElementById('e'),
    txt = document.getElementById('t');
