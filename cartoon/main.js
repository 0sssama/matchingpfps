var cartoonImages = [
    11, 45, 46, 47, 53,
    54, 64, 71, 73, 74,
    75, 81, 96, 97, 99
    ]
var imagesInPage = []
var host = '.'
var chunkAmount = 9
const addCoupleImage = () => {
    let imagesNotInPage = cartoonImages.filter(id=>!imagesInPage.includes(id))
    if (!imagesNotInPage.length <= 0) {
        var id = imagesNotInPage[Math.floor(Math.random()*imagesNotInPage.length)]
        imagesInPage.push(id)
        var coupleImageHTML = `
            <div class="${id} image-couple">
                <a href="${host}/imgs/${id}_left.jpg" download="image_1.jpg" class="${id} img1-container">
                    <img onload="hideLoadings(${id})" class="img1" src="${host}/imgs/${id}_left.jpg" />
                    <div class="${id} loading-pic pic1 show"></div>
                    <div class="${id} hover-dwnld">Click To Download</div>
                </a>
                <a href="${host}/imgs/${id}_right.jpg" download="image_2.jpg" class="${id} img2-container">
                    <img onload="hideLoadings(${id})" class="img2" src="${host}/imgs/${id}_right.jpg" />
                    <div class="${id} loading-pic pic2 show"></div>
                    <div class="${id} hover-dwnld">Click To Download</div>
                </a>
            </div>
        `
        $('.image-couples').append(coupleImageHTML)
    }
}
const hideLoadings = (id) => {
    $(`.${id}.loading-pic.pic1`).removeClass('show')
    $(`.${id}.loading-pic.pic2`).removeClass('show')
}
const addCoupleImages = (amount) => {
    for (let i = 0; i <= amount; i++) {addCoupleImage()}
}
const viewMore = () => {
    $('.view-more').remove()
    let imagesNotInPage = cartoonImages.filter(id=>!imagesInPage.includes(id))
    if (imagesNotInPage.length <= chunkAmount) {
        for (let i = 0; i < imagesNotInPage.length; i ++) {
            addCoupleImage()
        }
    } else {
        for (let i = 0; i <= chunkAmount; i++) {
            addCoupleImage()
        }
        $('.image-couples').append(viewMoreHTML)
    }
    
}
const viewMoreHTML = `
    <div class="view-more">
        <button onClick="viewMore()">View More</button>  
    </div>
`
window.onload = () => {
    if (cartoonImages.length <= chunkAmount) {
        for (let i = 0; i < cartoonImages.length; i ++) {
            addCoupleImage()
        }
    } else {
        for (let i = 0; i <= chunkAmount; i++) {
            addCoupleImage()
        }
        $('.image-couples').append(viewMoreHTML)
    }
}
