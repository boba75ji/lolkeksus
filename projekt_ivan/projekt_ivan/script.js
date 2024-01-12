const btn1 = document.querySelectorAll('.btnJs');
const btn2 = document.querySelectorAll('.button-with-icon');

//this is a function #1
const onClickFuction = (e) => {
    const event = e.target;

    btn1.forEach((button) => {
        if(button !== event && button.classList.contains('btnJs')) {
            button.classList.remove('active')
        }
    })

    event.classList.add('active')
}
//this is a function #2
const onClickFuction1 = (e) => {
    const event = e.target;

    btn2.forEach((button) => {
        if(button !== event && button.classList.contains('button-with-icon')) {
            button.classList.remove('active')
        }
    })

    event.classList.add('active')
}

//this is eventListener
btn1.forEach((button) => {
    button.addEventListener('click', onClickFuction)
})

//this is eventListener
btn2.forEach((button) => {
    button.addEventListener('click', onClickFuction1)
})





