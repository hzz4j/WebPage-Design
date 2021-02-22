const panels = document.querySelectorAll(".panel");


panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        removeActiveForAllPanel();
        panel.classList.add("active");
    })
})


function removeActiveForAllPanel(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
