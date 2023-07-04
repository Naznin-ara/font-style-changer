const heading = document.getElementById('heading');
const h1 = document.querySelector('h1');
const align =document.querySelectorAll('.align');
const size =document.getElementById('size');
const color = document.getElementById('color');
const font = document.querySelector('select[name="font"]');

heading.onkeyup =() =>{
    h1.innerHTML = heading.value;
    h1.style.fontSize = "20px";
    h1.style.fontWeight = 400;
   
}

align.forEach(item =>{
    item.onchange = () =>{
        h1.style.textAlign = item.value;
    }
})

size.oninput = () =>{
    h1.style.fontSize = size.value +"px";
}
color.oninput = () =>{
    h1.style.color = color.value;
}

font.onchange = () =>{
    h1.style.fontFamily = font.value;
}