var btn = document.querySelector('button');
function getRandom() {
    let leftRandom = Math.random()*90
    let topRandom = Math.random()*90
    let rotate = Math.floor(Math.random()*360)
    let arr = ['https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy_183364-81177.jpg?semt=ais_hybrid',
    'https://img.freepik.com/free-vector/kick-logo_1308-30806.jpg?t=st=1738571457~exp=1738575057~hmac=ecf34eeaa896f0df70c2376917c10d65c3a0c382b3ecd3af6dda7d86e346d426&w=740',        
    'https://img.freepik.com/premium-photo/fun-3d-cartoon-asian-teenage-girl_183364-122412.jpg?ga=GA1.1.1149006170.1738571415&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/happy-skater-boy_1196-553.jpg?t=st=1738571768~exp=1738575368~hmac=9eb82ddeb005338e6bcbbf2cb3fbcdfc897693c51cf56e4a9fd9f2347eb45740&w=360',
    'https://img.freepik.com/free-vector/happy-girl-with-big-smile-jumping_1308-38519.jpg?ga=GA1.1.1149006170.1738571415&semt=ais_hybrid'
    ]
   let imgRandom = arr[Math.floor(Math.random()*arr.length)]

    return {leftRandom , topRandom ,rotate , imgRandom}
}

btn.addEventListener('click',()=>{
    var img = document.createElement('img')
    var body = document.querySelector('body')
     let {leftRandom , topRandom, rotate, imgRandom} = getRandom()
    img.src = imgRandom;
    img.alt = "img not found"
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = `${leftRandom}%`
    img.style.top = `${topRandom}%`
    img.style.rotate = `${rotate}deg`
    body.appendChild(img)
})