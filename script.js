var btn = document.querySelector('button');

function getRandom() {
    let leftRandom = Math.random() * 90;
    let topRandom = Math.random() * 90;
    let rotate = Math.floor(Math.random() * 360);
    let arr = [
        './images/d1.png', './images/d2.png', './images/d3.png',
        './images/d4.png', './images/s1.png', './images/s2.png', './images/s3.png'
    ];
    let imgRandom = arr[Math.floor(Math.random() * arr.length)];

    return { leftRandom, topRandom, rotate, imgRandom };
}

btn.addEventListener('click', () => {
    var img = document.createElement('img');
    var body = document.querySelector('body');

    let { leftRandom, topRandom, rotate, imgRandom } = getRandom();
    img.src = imgRandom;
    img.alt = "Image not found";
    img.style.height = '10px';
    img.style.opacity = '0'; 
    img.style.transform = `scale(0.5) `; 
    img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    img.style.position = 'absolute';
    img.style.left = `${leftRandom}%`;
    img.style.top = `${topRandom}%`;
    img.style.rotate = `${rotate}deg`;

    body.appendChild(img);

   
    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'scale(18) rotate(360deg)';
    }, 10);
});
