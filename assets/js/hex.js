const btn = document.querySelector('.btn');
const bgColorTxt = document.querySelector('.bg__color');
const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',()=>{
    
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        newColor += color[getRandomColor()];
    }
    document.body.style.backgroundColor = newColor;
    bgColorTxt.innerText = newColor;
});

const getRandomColor = ()=>{
    return Math.floor(Math.random() * color.length);
}