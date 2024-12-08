function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mints = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    if(hrs >= 12){
        document.getElementById("session").innerHTML = "PM";;
    }else{
        document.getElementById("session").innerHTML = "AM";;
    }
    if(hrs > 12){
        hrs = hrs - 12;

    }

    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(mints < 10){
        mints = '0' + mints;
    }
    if(secs < 10){
        secs = '0' +  secs;
    }
    
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mints;
    document.getElementById("seconds").innerHTML = secs;
}
setInterval(displayTime, 10)