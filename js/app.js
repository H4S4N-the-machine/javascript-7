const darkBtn = document.querySelector('.darkBtn')
const body = document.querySelector('body')

const darkMode = () => body.classList.toggle('darkMode')   
    // line of code 1 howar karone curly braces use na kore "= () =>" ei function e likha hoiche//
    


darkBtn.addEventListener('click', darkMode)

// ⭐⭐

const faqs = Array.from(document.querySelectorAll('.faq'))



const faqToggle = (event) => {
   
    const faq = event.currentTarget
    

    if (faq.classList.contains('active')) {
        faqs.map(faq => faq.classList.remove('active'))  
    } else {
        faqs.map(faq => faq.classList.remove('active')) 
        faq.classList.add('active')
    }
}




faqs.map(faq => faq.addEventListener('click', faqToggle))


const galleryPopup = document.querySelector('.popupImg')
const galleryImages = Array.from(document.querySelectorAll('.popup'))
const galleryPopupImage = galleryPopup.querySelector("img")
let currentPosition = 0



const openGallery = (event, index) => {
    currentPosition = index
    
    console.log(currentPosition);
    

    const image = event.currentTarget.src
    galleryPopupImage.src = image

    galleryPopup.classList.add('active')
    
    
}




galleryImages.map((gallImg, index) => {
    gallImg.addEventListener('click', () => openGallery (event, index) )
})



const cancelBtn = document.querySelector('.cancelBtn')

const closegallery = () => galleryPopup.classList.remove('active')



    cancelBtn.addEventListener('click' ,closegallery )



const nextArrow = document.querySelector('.rightArrow')
const prevArrow = document.querySelector('.leftArrow')

const galleryNext = () => {
   
    if (currentPosition == (galleryImages.length - 1)) {
        currentPosition = 0
    } else {
        currentPosition += 1
    }
    galleryPopupImage.src = galleryImages[currentPosition].src
}


const galleryprev = () => {
   

    if (currentPosition == 0) {
    currentPosition = galleryImages.length - 1
    } else {
        currentPosition -= 1
}
galleryPopupImage.src = galleryImages[currentPosition].src
}


nextArrow.addEventListener('click', galleryNext)
prevArrow.addEventListener('click' , galleryprev)