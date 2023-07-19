const body = document.querySelector('body')

const toggleTheme = () => {
    console.log('toggling Theme')
    body.classList.toggle('dark')
    // if(body.classList.contains('dark')) {
    //     body.classList.remove('dark')
    //     body.classList.add('light')
    // }else {
    //     body.classList.remove('light')
    //     body.classList.add('dark')
    // }
}