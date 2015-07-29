window.onload = function(){

    var button = document.getElementById('button');
    
    button.onclick = function(){
    
        var num = document.getElementById('fruit').getElementsByTagName('li');
        var len = num.length;
        
        alert(len);
    }

}