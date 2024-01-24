document.addEventListener('DOMContentLoaded', () => {
    
    fetch('db.json') 
        .then(response => response.json())
        .then(data => {
            
            renderProducts(data.products);
            renderContainerImages(data.container);
            initializeSliderScrollbar();
        })
        .catch(error => console.error('Error fetching data:', error));
});

function renderProducts(products) {
    const productsSection = document.querySelector('.products .row');
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsSection.appendChild(productElement);
    });
}

function createProductElement(product) {
    const col = document.createElement('div');
    col.classList.add('col');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('h4');
    price.textContent = `Ksh. ${product.price}`;

    const purchaseButton = createPurchaseButton();

    col.appendChild(img);
    col.appendChild(name);
    col.appendChild(price);
    col.appendChild(purchaseButton);

    return col;
}

function renderContainerImages(containerImages) {
    const containerSection = document.querySelector('.container .display');

    containerImages.forEach(imageItem => {
        const imageElement = createImageElement(imageItem);
        containerSection.appendChild(imageElement);
    });
}

function createImageElement(imageItem) {
    const displayItem = document.createElement('div');
    displayItem.classList.add('display-item');

    const img = document.createElement('img');
    img.src = imageItem.image;
    img.alt = imageItem.alt;

    const name = document.createElement('h3');
    name.textContent = imageItem.name;

    const price = document.createElement('h4');
    price.textContent = `Ksh. ${imageItem.price}`;

    const purchaseButton = createPurchaseButton();

    displayItem.appendChild(img);
    displayItem.appendChild(name);
    displayItem.appendChild(price);
    displayItem.appendChild(purchaseButton);


    return displayItem;
}

function createPurchaseButton() {
    const button = document.createElement('button');
    button.textContent = 'Purchase';
    button.classList.add('purchase-button');
    
    button.addEventListener('click', () => {
        alert('Purchase Confirmed!');
    });

    return button;
}


function initializeSliderScrollbar() {
    const scrollbarThumb = document.querySelector('.slider-scrollbar .scrollbar-thumb');
    const display = document.querySelector('.container .items .display');

    display.addEventListener('scroll', () => {
        const scrollPercentage = (display.scrollLeft / (display.scrollWidth - display.clientWidth)) * 100;
        scrollbarThumb.style.width = `${scrollPercentage}%`;
    });
}
