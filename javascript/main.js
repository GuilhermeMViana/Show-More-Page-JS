const readButton = document.querySelector('.read-button');
const text = document.querySelector('.text');

readButton.addEventListener('click',(e)=>{
    text.classList.toggle("show-more");
    if(readButton.innerText === 'Show More'){
        readButton.innerText = 'Show Less';
    }else{
        readButton.innerText = 'Show More';
    }
})