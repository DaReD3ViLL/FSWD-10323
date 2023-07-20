const body = document.querySelector('body')
const button = document.querySelector('button')
const content = document.querySelector('#content')
const progressBar = document.querySelector('progress')

const contentHeight = content.clientHeight

document.addEventListener('scroll', (event)=>{
    const scroll = window.scrollY
    const percentage = scroll / (contentHeight - window.innerHeight)
    console.log(percentage*100)
    progressBar.value = (percentage*100).toFixed(0)
})

// Below method shows which key is pressed on the console
// body.addEventListener('keydown', (event)=>{
//     console.log(`Key Pressed: ${event.key}`)
// })

// button.addEventListener('click', (event)=>{
//     console.log(event)
// })
// body.addEventListener('click', (event)=>{
//     console.log(`You clicked on this position: ${event.clientX} ${event.clientY}`)
//     const ele = document.createElement('div')
//     ele.style.position = 'absolute'
//     ele.style.top = `${event.clientY}px`
//     ele.style.left = `${event.clientX}px`
//     ele.style.width = '10px'
//     ele.style.height = '10px'
//     ele.style.backgroundColor = 'red'
//     ele.style.borderRadius = '50%'
//     body.appendChild(ele)
// })