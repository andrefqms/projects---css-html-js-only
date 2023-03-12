const Timer = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hr < 10){
        hr = "0" + hr
    }
    if(min < 10){
        min = "0" + min
    }
    if(sec < 10){
        sec = "0" + sec
    }

    document.getElementById("hora").innerText = hr;
    document.getElementById("minuto").innerText = min;
    document.getElementById("segundo").innerText = sec;
    setTimeout(Timer, 1000);
}

Timer();