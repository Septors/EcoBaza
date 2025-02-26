const products = [
    {name: "Apple", image: "/base/imgProduct/apple.png", rating: 3, price: '10.99', type: "fruit" ,sold:132},
    {name: "Cabbage", image: "/base/imgProduct/cabbaga.png", rating: 4, price: '12.99', type: "vegetables" ,sold:231},
    {name: "Capsicum", image: "/base/imgProduct/capsicum.png", rating: 5, price: '15.99', type: "vegetables" ,sold:212},
    {name: "Cauliflower", image: "/base/imgProduct/cauliflower.png", rating: 2, price: '8.99', type: "vegetables" ,sold:322},
    {name: "Chilli", image: "/base/imgProduct/chilli.png", rating: 3, price: '11.99', type: "vegetables" ,sold:123},
    {name: "Corn", image: "/base/imgProduct/corn.png", rating: 4, price:' 9.99', type: "vegetables" ,sold:435},
    {name: "Cucumber", image: "/base/imgProduct/cucumber.png", rating: 4, price: ' 7.99', type: "vegetables" ,sold:654},
    {name: "Eggplant", image: "/base/imgProduct/eggplant.png", rating: 5, price: '14.99', type: "vegetables" ,sold:123},
    {name: "Lettuce", image: "/base/imgProduct/lettuce.png", rating: 3, price: '5.99', type: "vegetables" ,sold:142},
    {name: "Mango", image: "/base/imgProduct/mango.png", rating: 4, price: '13.99', type: "fruit" ,sold:152},
    {name: "Potato", image: "/base/imgProduct/potato.png", rating: 2, price: '6.99', type: "vegetables" ,sold:231},
    {name: "Tomato", image: "/base/imgProduct/tomato.png", rating: 4, price: '8.49', type: "vegetables",sold:340},
];



const featuredList = document.querySelector('.featured');
const bestPriceList = document.querySelector('.best__price'); const topSoldList = document.querySelector('.best__sold');
const topratedList = document.querySelector('.top__rated');
const cartContainer = document.querySelector('.cart__container'); const shopProduct = document.querySelector('.shop__product');



function filterRating(){
        return products.sort((a,b) => b.rating - a.rating);
    }
    function filterSold(){
        return products.sort((a,b) => a.sold -b.sold)
    }
    function filterTopPrice(){
        return products.sort((a,b) => a.price - b.price)
    }


function createCollection (type,name,price,image,rating){
            const productCard = document.createElement('div');
            productCard.classList.add(`product__card-${type}`);

            const productImage = document.createElement('img');
            productImage.classList.add(`product__image-${type}`);
            productImage.src = image;

            const productMain = document.createElement('div');
            productMain.classList.add(`product__main-${type}`)

            const productInfo = document.createElement('div');
            productInfo.classList.add(`product__info-${type}`)

            const productName = document.createElement('h5');
            productName.classList.add(`product__name-${type}`);
            productName.textContent = name;

            const productPrice = document.createElement('p');
            productPrice.classList.add(`product__price-${type}`);
            productPrice.innerText = (`${price} $`);

            const productRating = document.createElement('div');
            productRating.classList.add(`product__rating-${type}`);

            const productBy =  document.createElement('button');
            productBy.classList.add('product__by');
            productBy.innerHTML =`<img src ="/img/Bag.png" alt="Добавить в корзину">`;

            for(let i = 1; i<= 5;i++ ){
                const star = document.createElement('span');
                star.classList.add("product__star");
                star.innerHTML = i<= rating ? "★" : "☆";
                productRating.appendChild(star)
            }
         
            productCard.appendChild(productImage);

            productInfo.appendChild(productName);
            productInfo.appendChild(productPrice);
            productInfo.appendChild(productRating);

            productMain.appendChild(productInfo);
            productMain.appendChild(productBy);

            productCard.appendChild(productMain);

            return productCard;
    }
function renderCart(data,type,limit,box){
        const sortedData = data.slice(0,limit);
           sortedData.forEach(({name,price,image,rating}) => {
        const card = createCollection(type,name,price,image,rating);
           box.appendChild(card)
        });
        
            
        }


   

 if(window.location.pathname === "/index.html"){ document.addEventListener('DOMContentLoaded',() =>{  renderCart(filterRating(),"futered",5,featuredList);
     renderCart(filterSold(), "sold",3,topSoldList)
        renderCart(filterTopPrice(),'top-price',3,bestPriceList)
        renderCart(filterRating(),'top-rated',3,topratedList)
        })}


if(window.location.pathname.endsWith("/shop.html")){ document.addEventListener('DOMContentLoaded',() =>{  renderCart(filterRating(),"shop",12,shopProduct);
        })}

const showView = document.getElementById('elect__card-view');
showView.addEventListener('change', () => {
    const selectedView = showView.value;  // Получаем выбранное значение
    shopProduct.innerHTML = "";
    renderCart(filterRating(),'shop',selectedView,shopProduct)
    console.log(selectedView);  // Выведет, например, "16", "12" или "8"
    });

const rating = document.getElementById('select__rating');rating.addEventListener('change', () => {
    const selectedRating = rating.value;  
    const selectedView = showView.value; 
    shopProduct.innerHTML = "";

    if(selectedRating == 'all' ){
        renderCart(filterRating(),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
    }
    if(selectedRating == "5"){
        renderCart(products.filter(items => items.rating == 5),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
    }
    if(selectedRating == "4"){
        renderCart(products.filter(items => items.rating == 4),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
    }

    console.log(selectedRating);  // Выведет, например, "16", "12" или "8"
    });

    const category = document.getElementById('select__category');
    category.addEventListener('change',() => {
        const selectedCategory = category.value;  
        const selectedView = showView.value; 
        shopProduct.innerHTML = "";
    
        if(selectedCategory == 'all' ){
            renderCart(filterRating(),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
        }
        if(selectedCategory == "fruit"){
            renderCart(products.filter(items => items.type == 'fruit'),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
        }
        if(selectedCategory == "vegetables"){
            renderCart(products.filter(items => items.type == "vegetables"),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
        }
    })

    const price = document.getElementById('select__price');
    price.addEventListener('change', () => {
        const selectedPrice = price.value;  
        const selectedView = showView.value; 
        shopProduct.innerHTML = "";
        if(selectedPrice == "expensive"){
            renderCart(products.sort((a,b) => b.price-a.price),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
        }
        if(selectedPrice == "less"){
            renderCart(products.sort((a,b) => a.price-b.price),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
        }
    })

    const sold = document.getElementById('select__sold');
        sold.addEventListener('change',() => {
            const selectedSold = sold.value;  
            const selectedView = showView.value; 
            shopProduct.innerHTML = "";
            if(selectedSold == "moreSold"){
                renderCart(products.sort((a,b) => b.sold-a.sold),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
            }
            if(selectedSold == "lessSold"){
                renderCart(products.sort((a,b) => a.sold-b.sold),'shop', selectedView == 0 ? 8 : selectedView,shopProduct)
            }
        })


    
