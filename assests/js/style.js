
function display(){
    let today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(00);
    var date =today.toLocaleDateString(); 
    document.getElementById('time').innerHTML= time;
   
    }
    setInterval(JSClock, 1000);
    function JSClock() {
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
       
        var temp = '' + ((hour > 12) ? hour - 12 : hour);
        if (hour == 0)
          temp = '12';
        temp += ((minute < 10) ? ':0' : ':') + minute;
        temp += ((second < 10) ? ':0' : ':') + second;
        temp += (hour >= 12) ? ' P.M.' : ' A.M.';
        


        document.getElementById('time').innerHTML= temp;
         var date = time.toLocaleDateString('en-US', { timeZone: 'Asia/Jakarta' });
        
        document.getElementById('date').innerHTML= date;
        
      }
   