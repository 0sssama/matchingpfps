var ttl = 20
var cnvs = document.createElement('div')
cnvs.classList.add('imgs-canvas')
var img1 = document.createElement('img')
img1.classList.add('img1')
var img2 = document.createElement('img')
img2.classList.add('img2')
let nxtn = Math.floor(Math.random() * ttl) + 1
var old1, old2, old3, old4, old5
old1 = nxtn
let pco = `./imgs/${nxtn}_left.jpg`
let pct = `./imgs/${nxtn}_right.jpg`
img2.src = pct
img1.src = pco
var img1container = document.createElement('a')
img1container.classList.add('img1-container')
img1container.setAttribute('href', pco)
img1container.setAttribute('download', "matchingpfps")
var img2container = document.createElement('a')
img2container.classList.add('img2-container')
img2container.setAttribute('href', pct)
img2container.setAttribute('download', "matchingpfps")
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
    if (!(nxtn === old1) && !(nxtn === old2) && !(nxtn === old3) && !(nxtn === old4) && !(nxtn === old5)) {
        let pco = `./imgs/${nxtn}_left.jpg`
        let pct = `./imgs/${nxtn}_right.jpg`
        if (old5) {
            old5 = old4
            old4 = old3
            old3 = old2 
            old2 = old1
        } else {
            if (old4) {
                old5 = old4
                old4 = old3
                old3 = old2
                old2 = old1
            } else {
                if (old3) {
                    old4 = old3
                    old3 = old2
                    old2 = old1
                } else {
                    if (old2) {
                        old3 = old2
                        old2 = old1
                    } else {
                        old2 = old1
                    }
                }
            }
        }
        old1 = nxtn
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

/*
window.onload = () => {
    var downloadingBgImage = new Video()
    downloadingBgImage.onload = () => {
        $('body').css('background-image', 'url(\'./bg.gif\')')
        $('body').css('background-size', 'cover')
    }
    downloadingBgImage.src = './bg.gif'
}*/