 var box = document.getElementById("color-box")
 var button = document.getElementById("change-color-btn")

document.addEventListener("DOMContentLoaded", (event) => {
  button.addEventListener('click', ()=>{
       getRandomColor()
  })
});

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

function getRandomColor(){
      box.setAttribute('style' , 'background-color:' + ''+ randomHexColorCode())
}

