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

    equal : function (){
        out.innerHTML = parseFloat(eval(txt.innerHTML));
    }
} 

let out = document.getElementById('e'),
    txt = document.getElementById('t');

function reverseString(str) {
    return str.split("").reverse().join("");
}
