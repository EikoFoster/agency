let animObj = document.querySelectorAll('#animate')

for(let i = 0; i < animObj.length; i++){
    window.addEventListener('scroll', animLogic)
    function animLogic(){
        let animItem = animObj[i]
        let animHeight = animItem.offsetHeight
        let animTop = offset(animItem).top
        let animStart = 4
        let animEnd = window.innerHeight - animHeight / animStart

        if(scrollY < (animTop + animHeight) && (scrollY > animHeight - animEnd)){
            animItem.classList.add('animationActive')
        }else{
            if(!animItem.classList.contains('noHight')){
                animItem.classList.remove('animationActive')
            }
        }
    }
    
    function offset(elem){
        let par = elem.getBoundingClientRect()
        let offsetTop = window.scrollY
        let offsetLeft = window.scrollX
        return {
            top: par.top + offsetTop,
            left: par.left + offsetLeft,
        }
    }
    
    animLogic()
}