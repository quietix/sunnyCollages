function updateFigcaptions() {
    let images = document.querySelectorAll('.grid-container img')

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', function (event) {
            const caption = images[i].parentElement.parentElement.children.item(1)
            const myP = caption.querySelector('p')
            myP.style.opacity = '1'
        })
        images[i].addEventListener('mouseout', function (event) {
            const caption = images[i].parentElement.parentElement.children.item(1)
            const myP = caption.querySelector('p')
            myP.style.opacity = '0'
        })
    }
}

updateFigcaptions()