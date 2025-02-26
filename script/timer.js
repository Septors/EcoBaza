document.addEventListener('DOMContentLoaded', () =>{
        function timer(second , block){
            let  interval = setInterval(() =>{
            let houre = Math.floor(second / 3600);
            let minute = Math.floor((second % 3600) /60)  ;
            let seconds = (second % 3600) % 60; 
            block.textContent =
            `${houre.toString().padStart(2,'0')} hours :
             ${minute.toString().padStart(2,'0')} minute :
             ${seconds.toString().padStart(2, '0')} seconds`
             if(second > 0 ) {second--} 
             else{clearInterval(interval)}
              }, 1000);
        }
        function renderTimer(variant,time){
        const display = document.querySelector(`.${variant}--timer`);
        timer(time,display);
        }
        renderTimer('sale',16000);
     
})