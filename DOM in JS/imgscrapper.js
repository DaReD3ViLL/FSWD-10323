// Scraping Images from a WebPage:
const images = document.querySelectorAll('img')

const imageLinks = []
images.forEach(imageObject=>{
    imageLinks.push(imageObject.src)
})
console.log(imageLinks)