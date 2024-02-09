export function homePageSetup () {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the Star Restaurant!';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    const p1 = document.createElement('p');
    p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    welcome.appendChild(h1);
    welcome.appendChild(p);
    welcome.appendChild(p1);
    content.appendChild(welcome);

}

