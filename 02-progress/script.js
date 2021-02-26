const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let count = 1;
next.addEventListener("click",event => {
    count++;

    if(count>circles.length){
        count = circles.length;
    }
    _update();
})


prev.addEventListener('click',event => {
    count--;
    if(count < 1){
        count = 1
    }
    _update();
})


function _update(){
    circles.forEach((circle,index) => {
        if(index<count){
            circle.classList.add('active');
        }else{
            circle.classList.remove("active");
        }
    })

    //  进度条
    const precentWidth = ((count-1) / (circles.length-1))*100;
    progress.style.width = precentWidth+"%";

    // 更新btn状态
    if(count === circles.length){
        next.disabled = true;
    }else if(count === 1){
        prev.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }
}
