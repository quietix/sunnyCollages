function updateGallery(imgSrcList) {
    const gridContainer = document.querySelector('.gallery')

    for (const imgSrc of imgSrcList) {
        const figure = createGalleryFigure(imgSrc)
        gridContainer.appendChild(figure)
    }
}

function createGalleryFigure(imgSrc) {
    const figure = document.createElement("figure")
    figure.setAttribute('class', 'gallery-figure')

    const imgWrapper = document.createElement("div")
    imgWrapper.setAttribute('class', 'img-wrapper')
    const img = document.createElement("img")
    img.setAttribute('src', imgSrc)
    img.setAttribute('class', 'img-thumbnail')
    img.setAttribute('alt', 'picture')
    imgWrapper.appendChild(img)

    const figcaption = document.createElement("figcaption")
    figcaption.setAttribute('class', 'gallery-figcaption')
    figcaption.innerText = 'Когда человека не было на Земле'

    figure.appendChild(imgWrapper)
    figure.appendChild(figcaption)

    return figure
}