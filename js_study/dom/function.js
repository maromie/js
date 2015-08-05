window.onload = function(){
    
    // DOM Q.01
    
   var button = document.getElementById('button');
   button.onclick = function(){

    var text = document.getElementById('dom-text').innerText;
    document.getElementById('result').innerHTML = text;
   }

}