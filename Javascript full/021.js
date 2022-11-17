let setAlarm=document.getElementById('btn3');
setAlarm.addEventListener('click',set);
function ringbell(){
    var audio = new Audio('ring.mp3');
    audio.play(); 

}
function set() {
    let time=document.getElementById('time');
    let AlarmTime=new Date(time.value);

    currentTime=new Date();
    let TimingOfRinging=AlarmTime-currentTime;
    console.log(TimingOfRinging);
    
    setTimeout(() => {
       
       ringbell()
        
    }, TimingOfRinging);

}