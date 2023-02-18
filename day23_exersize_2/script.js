const body=document.querySelector('body');
const h1= document.querySelector('h1');
const div= document.querySelector('div');
document.body.addEventListener('keypress', e=>{
    let s=e.key;
    h1.innerHTML=`you enter <span style='color:green'>${s}</span>`;
    div.innerHTML=`${e.keyCode}`;
    div.style.boxShadow=  '5px 2px 15px black';
    div.style.width= '200px';
    div.style.height= '200px';
    div.style.margin= '0 auto';
    div.style.padding= '5px';
    div.style.marginTop='50px';
    div.style.fontSize='50px';
    div.style.padding='60px';
    div.style.color='green';
    div.style.fontWeight='bold';
    body.appendChild(h1);
    body.appendChild(div);
})