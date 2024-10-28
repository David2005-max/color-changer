// handle click to change color

const colorboxElem = document.getElementById(`colorBox`)
const changeBtn = document.getElementById(`changeBtn`)

changeBtnElem.addEventListener(`click`, () => {
    const randomColor = Math.floor(Math.random()*123456789);
    colorboxElem.style.backgroundColor = `#${randomColor}`;

    
})