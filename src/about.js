
export function aboutPageSetup () {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const h1 = document.createElement('h1');
    h1.textContent = 'ABOUT US!';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    const img = document.createElement('img');
    img.src = '/src/assets/pizza.jpg'
    welcome.appendChild(h1);
    welcome.appendChild(p);
    welcome.appendChild(img);
    content.appendChild(welcome);

}