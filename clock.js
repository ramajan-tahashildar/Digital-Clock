const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const amorpm = document.querySelector(".amorpm");

function formatTime(unit) {
    return String(unit).padStart(2, '0');
}

function getTime() {
    const now = new Date();
    let hr = now.getHours();
    const min = formatTime(now.getMinutes());
    const sec = formatTime(now.getSeconds());

    amorpm.innerHTML = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12; // Convert to 12-hour format
    hours.innerHTML = formatTime(hr);
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

setInterval(getTime, 1000);
getTime(); // Initial call to display time immediately

// const clockDiv = document.querySelector(".clock").addEventListener("mouseover",()=>{
    
//     alert("Please Don't Touch Me..🥲🥲")
    
// })




// const hours= document.querySelector(".hours")
// const minutes= document.querySelector(".minutes")
// const seconds= document.querySelector(".seconds")
// const amorpm = document.querySelector(".amorpm")


    // function gettime(){
    // const now_time = new Date()

    // let hr=now_time.getHours()
    // let min= now_time.getMinutes()
    // let sec= now_time.getSeconds()
    // hr = hr % 12;
    //     hr = hr ? hr : 12; 
    // if(hr<10){
    //     hr= "0"+hr
    // }
    // if(min<10){
    //     min= "0"+min
    // }
    // if(sec<10){
    //     sec= "0"+sec
    // }
    // if(hr>=12){
    //     amorpm.innerHTML="PM";
    // }else{
    //     amorpm.innerHTML="AM";
    // }
    // hours.innerHTML=hr
    // minutes.innerHTML=min
    // seconds.innerHTML=sec

    // requestAnimationFrame(gettime);
    // }
    // requestAnimationFrame(gettime);