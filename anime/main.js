var animeImages = [
    1, 2, 3, 4, 5, 6, 7, 
    14, 15,16, 17, 18, 19, 
    20, 21, 23, 24, 25, 26, 
    27, 28, 29, 30, 31, 39, 
    41, 46, 48, 49, 50, 51, 
    52, 55, 56, 57, 58, 59, 
    60, 61, 62, 63, 65, 66,
    67, 68, 69, 70, 72, 76,
    78, 83, 84, 85, 86, 87,
    88, 89, 90, 102, 103,
]
var imagesInPage = []
var host = '.'
var chunkAmount = 9
const addCoupleImage = () => {
    let imagesNotInPage = animeImages.filter(id=>!imagesInPage.includes(id))
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
    let imagesNotInPage = animeImages.filter(id=>!imagesInPage.includes(id))
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
    if (animeImages.length <= chunkAmount) {
        for (let i = 0; i < animeImages.length; i ++) {
            addCoupleImage()
        }
    } else {
        for (let i = 0; i <= chunkAmount; i++) {
            addCoupleImage()
        }
        $('.image-couples').append(viewMoreHTML)
    }
}
