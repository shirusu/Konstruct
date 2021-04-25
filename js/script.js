//menu-btn burger menu button
document.querySelector('.menu-btn').addEventListener('click', () => {
    //.toggle() adds class if it doesn't exist and deletes if it's exist
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header-menu').classList.toggle('active')
})
//.header_menu_item -this is a class the one in menu's link
//we need it to close once we click on it
document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
    //oneLink this is the name of one of the link in menu. We are the one who creates the name
    oneLink.addEventListener('click', () => {
        document.querySelector('.menu-btn').classList.toggle('active')
        document.querySelector('.header-menu').classList.toggle('active')
    })
})


//.addEventListener (What we are listening, what we are doing)