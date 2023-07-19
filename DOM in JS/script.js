// For every element in our HTML document, the browser creates nodes/objects which we can access and modify. These nodes or objects have properties that we can use to modify the content of these nodes, like changing the heading, changing the CSS properties of elements,etc.

// console.log(document)
// console.log(document.body.childNodes)
// const headingObject = document.querySelector('h1');
// headingObject.innerHTML = 'This is new Heading'
// headingObject.style.color = 'red'
// console.log(headingObject)
// const headingObject = document.getElementById('heading')

// const listObject = document.getElementById('list')

// const arr = ['element1', 'element2', 'element3', 'element4', 'element5']
// arr.forEach((element)=>{
//     const li = document.createElement('li')
//     li.innerText = element
//     listObject.appendChild(li)
//     console.log(li)
// })
// const listElement = document.getElementsByClassName('list-ele')

// listElement.forEach(ele => {
//     console.log(ele)   
// });

const heading = document.querySelector('#heading')
console.log(heading)