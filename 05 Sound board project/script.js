const soundsContainer = document.getElementById("soundsContainer");
const btns = document.getElementById("btns");

//  HTMLCollection to Array
const sounds = Array.from(soundsContainer.children);

sounds.forEach(sound => {
    let name = sound.getAttribute("id");
    let btn = document.createElement("button");

    //  添加事件 button和对应的audio关联
    btn.addEventListener('click',(e)=>{
        stopAll();
        sound.play();   //  aydio api
    })

    btn.classList.add("btn");
    btn.innerText = name;
    btns.appendChild(btn);
    // console.log(btn);
})

function stopAll(){
    sounds.forEach(sound => {
        sound.pause();  //  aydio api 停止
        sound.currentTime = 0;  //  aydio api 设置当前时间为0
    })
}