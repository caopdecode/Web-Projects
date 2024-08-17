const images = document.querySelectorAll('.img');
const cointainerImage = document.querySelector('.containerImg');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeV = document.querySelector('.bx.bx-x-circle');


images.forEach(image =>{
        image.addEventListener('click', ()=>{
            addImage(image.getAttribute('src'), image.getAttribute('alt'))
        })
    })

const addImage = (srcImage, altImage)=>{
    cointainerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}

closeV.addEventListener('click', ()=>{
    cointainerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})