var ttl = 5
var cnvs = document.createElement('div')
cnvs.classList.add('imgs-canvas')
var img1 = document.createElement('img')
img1.classList.add('img1')
var img2 = document.createElement('img')
img2.classList.add('img2')
let nxtn = Math.floor(Math.random() * ttl) + 1
var old = nxtn
let pco = `./imgs/${nxtn}_m.jpg`
let pct = `./imgs/${nxtn}_f.jpg`
img1.src = pco
img2.src = pct
var img1container = document.createElement('a')
img1container.classList.add('img1-container')
img1container.setAttribute('href', pco)
img1container.setAttribute('download', "download")
var img2container = document.createElement('a')
img2container.classList.add('img2-container')
img2container.setAttribute('href', pct)
img2container.setAttribute('download', "download")
var hoverdwnld = document.createElement('div')
hoverdwnld.classList.add('hover-dwnld')
hoverdwnld.textContent = 'CLICK TO DOWNLOAD'
var hoverdwnld2 = document.createElement('div')
hoverdwnld2.classList.add('hover-dwnld')
hoverdwnld2.textContent = 'CLICK TO DOWNLOAD'
img1container.appendChild(img1)
img2container.appendChild(img2)
img1container.appendChild(hoverdwnld)
img2container.appendChild(hoverdwnld2)
cnvs.appendChild(img1container)
cnvs.appendChild(img2container)
$('.imgs-wrapper').append(cnvs)
function svlevui() {
    let nxtn = Math.floor(Math.random() * ttl) + 1
    console.log(`${nxtn} is the new number, ${old} is the old number`)
    if (!(nxtn === old)) {
        let pco = `./imgs/${nxtn}_m.jpg`
        let pct = `./imgs/${nxtn}_f.jpg`
        old = nxtn
        ptpcs(pco, pct)
    } else {
        svlevui()
    }
}

const ptpcs = (a, b) => {
    $('.img1').attr('src', a)
    $('.img2').attr('src', b)
    $('.img1-container').attr('href', a)
    $('.img2-container').attr('href', b)
}