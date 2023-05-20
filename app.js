const header = document.querySelector('header')
const sectionOne = document.querySelector('.carousel')

// console.log(header)
// console.log(sectionOne)

header.style.backgroundColor = "transparent"
header.style.boxShadow = "none"

const options = {
    rootMargin: '-200px 0px 0px 0px'
}

const observer = new IntersectionObserver((Element)=>{
    Element.forEach((item)=>{
        // console.log(item.target)
        if(!item.isIntersecting){
            header.style.backgroundColor = "#fff"
            header.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.1)"
        } else{
            header.style.backgroundColor = "transparent"
            header.style.boxShadow = "none"
        }
    })
}, options)

observer.observe(sectionOne)