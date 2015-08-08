window.onload = function(){
    
    // DOM Q.01
    
    var button = document.getElementById('button');
    button.onclick = function(){
        
        var text = document.getElementById('dom-text').innerText;
        document.getElementById('result').innerHTML = text;
        
   }
   
   // DOM Q.02
    
    var button02 = document.getElementById('button02');
    button02.onclick = function(){
        
        var text02 = document.getElementById('result02');
        var elem = document.createElement('p');
        
        elem.id = 'msg';
        elem.innerHTML = '今日は５キロ走ったよ！カポエイラやりたい！ダイエット万歳！';
        
        text02.appendChild(elem);    
   }
   
   // DOM Q.02
    var text03 = document.getElementById('result03');
    var button03 = document.getElementById('button03');

    button03.addEventListener('click', function(){

        text03.innerHTML = '背景がバッチリ変わりましたね！';
        text03.style.backgroundImage = 'url(images/bg01.jpg)';
        text03.style.color = '#381a06';

    },false);
        

}