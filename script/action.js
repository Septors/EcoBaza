
const changeFavorite = document.querySelector('.favorite--active');
changeFavorite.addEventListener('mouseover',(event) =>{
event.preventDefault();
changeFavorite.src = '/img/favorite--active.png';
}
)
changeFavorite.addEventListener('mouseout',(event) =>{
    event.preventDefault();
    changeFavorite.src = '/img/header__favorite.png';
    }
    )


