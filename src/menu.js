import pizza from '/src/assets/pizza.jpg';
import burger from './assets/burger.jpg';
import pasta from './assets/pasta.jpg';
import logo from './assets/logo.jpg';

const menuItems = [

    { title: 'Pizza', price: '9.99', imageUrl: pizza },
    { title: 'Burger', price: '3.99', imageUrl: burger },
    { title: 'Pasta', price: '4.00', imageUrl: pasta },
    { title: 'Pizza', price: '9.99', imageUrl: pizza},
    { title: 'Burger', price: '3.99', imageUrl: burger },
    { title: 'Pasta', price: '4.00', imageUrl: pasta },
    { title: 'Pizza', price: '9.99', imageUrl: pizza },
    { title: 'Burger', price: '3.99', imageUrl: burger },
    { title: 'Pasta', price: '4.00', imageUrl: pasta},
    // Add more items as needed
  ];
  
function menuPageSetup() {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    menuItems.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        const imgdiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        imgdiv.appendChild(img);

        const infodiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        const button = document.createElement('button');
        button.textContent = `🛒 Price: ${item.price}`;
        infodiv.appendChild(h3);
        infodiv.appendChild(button);

        gridItem.appendChild(imgdiv);
        gridItem.appendChild(infodiv);
        grid.appendChild(gridItem);
    })

    welcome.appendChild(grid);
    content.appendChild(welcome);


    
}

export { menuPageSetup };