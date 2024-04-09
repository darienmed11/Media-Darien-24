import { pinturas } from "./Data/Data.js"
console.log(pinturas);
const itemas =document.getElementById("item")

const templatecard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

const LoadData = (pinturas) =>{

    pinturas.forEach(data => {
        
        const {id,name,Image} =data
        templatecard.querySelector('h5').textcontent = name
        templatecard.querySelector('img').setAttribute('src',Image)
        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    
});
itemas.appendChild(fragment)

}

document.addEventListener('DOMContentLoaded',()=>{
    LoadData(pinturas)

})
