const EmailMenu = document.querySelector('.navbar-email');
const BurgerIco = document.querySelector('.menu');
const CarIco = document.querySelector('.navbar-shopping-cart');
const DesktopMenu = document.querySelector('.desktop-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const Aside = document.querySelector('.product-detail');
const CardsContainer = document.querySelector('.cards-container');

EmailMenu.addEventListener('click', ToggleDesktopMenu);
BurgerIco.addEventListener('click', ToggleMobileMenu);
CarIco.addEventListener('click', ToggleAside);

function ToggleDesktopMenu() {
    const isAside = Aside.classList.contains('inactive');

    if (!isAside) {
        Aside.classList.add('inactive');
    }
    DesktopMenu.classList.toggle('inactive');
}

function ToggleMobileMenu() {
    const isAside = Aside.classList.contains('inactive');

    if (!isAside) {
        Aside.classList.add('inactive');
    }
    MobileMenu.classList.toggle('inactive');
}

function ToggleAside() {
    const isMobileMenu = MobileMenu.classList.contains('inactive');
    const isDesktopMenu = DesktopMenu.classList.contains('inactive');

    if (!isMobileMenu) {
        MobileMenu.classList.add('inactive');
    } if (!isDesktopMenu) {
        DesktopMenu.classList.add('inactive');
    }
    Aside.classList.toggle('inactive');
}

// BD Productos //

const ProductList = [];
ProductList.push({
    name: 'Bike 1',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 2',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 3',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 4',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 5',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 6',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 7',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike 8',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (product of ProductList) {
    const ProductCard = document.createElement('div');
    ProductCard.classList.add('product-card');

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src',product.image);

    const ProductInfo = document.createElement('div');
    ProductInfo.classList.add('product-info');

    const div = document.createElement('div');

    const ProductPrice = document.createElement('p')
    ProductPrice.innerText = '$' + product.price;

    const ProductName = document.createElement('p')
    ProductName.innerText = product.name;

    div.appendChild(ProductPrice);
    div.appendChild(ProductName);

    const figure = document.createElement('figure');

    const ProductImgCart = document.createElement('img');
    ProductImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    figure.appendChild(ProductImgCart);

    ProductInfo.appendChild(div);
    ProductInfo.appendChild(figure);

    ProductCard.appendChild(ProductImg);
    ProductCard.appendChild(ProductInfo);

    CardsContainer.appendChild(ProductCard);
};