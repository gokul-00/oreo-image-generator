let inputString = document.querySelector('#input-string')
let button = document.querySelector('#enter')
let truthValue = []
let img0 = './img/0.png'
let img1 = './img/1.png'
let container = document.querySelector('container')
let size = document.getElementById('size')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


button.addEventListener('click', (e) => {
    e.preventDefault()
    canvas.width = Number(size.value)
    canvas.height = Number(size.value)
    if(inputString.value != null){
    let string = inputString.value.toLowerCase()
    let arrayCount = 0
    for(let i=0;i<string.length;i++){
        if(string[i] === 'o'){
            truthValue[arrayCount] = 1
            arrayCount++
        }else if(string[i] === 'r'){
            truthValue[arrayCount] = 0
            arrayCount++
            i++
        }else{
            alert('enter string in crt format(should contain either \'o\' or \'re\' )')
            return
        }
    }
    imgArrangement(truthValue)
  } 
})

const imgArrangement = (truthValue) => {
    truthValue.forEach((e,i) => {
        let topPos = (canvas.height-100)-(i*10 + 25)

        if(e === 1){
            let img = document.createElement('img')
            img.id = `img${i}`
            img.src = img1
            img.style.width = '50px'
            img.style.height = '50px'
            img.style.position = 'absolute'
            ctx.drawImage(img,canvas.width/2-40,topPos)
            
        }else{
            let img = document.createElement('img')
            img.id = `img${i}`
            img.src = img0
            img.style.width = '50px'
            img.style.height = '50px'
            img.style.position = 'absolute'
            ctx.drawImage(img,canvas.width/2-40,topPos)         
        }
        // resizeImg()
        displayImg()
    });
    
}

let img = document.getElementById('img')
const displayImg = () => {

    let caption = document.getElementById('caption')
    caption.innerText = `Fig. ${inputString.value} size=${canvas.width}x${canvas.height}`
    img.src = canvas.toDataURL('image/jpeg')
    img.alt = inputString.value
    if(window.innerWidth <= 640){
        img.width = window.innerWidth
        img.height = 400 
    }else {
        img.width = 300
        img.height = 300 
    }
    
}


const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
}

// let isDraging = false
// let x=0, y=0
// const resizeImg = () => {
//     canvas.addEventListener('mousedown', e => {
//        console.log(e.offsetX,e.offsetY)
//        if(e.offsetX <= canvas.width && e.offsetY <= canvas.height){
//         isDraging = true;
//        }
//       });
      
//       canvas.addEventListener('mousemove', e => {
//         if (isDraging === true) {
//           x = e.offsetX;
//           y = e.offsetY;
//         }
//       });
      
//       window.addEventListener('mouseup', e => {
//         if (isDraging === true) {
//           canvas.width = canvas.offsetWidth - x
//           canvas.height = canvas.offsetHeight - y
//           isDraging = false;
//           x = 0;
//           y = 0;
//         }
//       });
// }


  
