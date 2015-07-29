window.onload = function(){
    
    // if Q.01
    var yes = document.getElementById('yes');
    
    yes.onclick = function(){
        var age = 20;
            if (age == 20) {
                document.getElementById("result").innerHTML = "ビールをどうぞ！";
            }
        }
    
    var no = document.getElementById('no');
    
    no.onclick = function(){
        var age = 19;
            if (age == 19) {
                document.getElementById("result").innerHTML = "ジュースをどうぞ！";
            } 
        }
    
    // if Q.02
    
    var mynum = 0;
    
    if(mynum==1){
        document.getElementById("result02").innerHTML = "こっちのメッセージが表示されます。";
    }else{
        document.getElementById("result02").innerHTML = "このメッセージが表示されます。";
    }

}