productRating = document.querySelectorAll('.product__rating');


productRatingNum = Number(productRating[0].innerHTML);
if (productRatingNum > 8) {
    for (let x = 0; x < productRating.length; x++) {
        productRating[x].style.color = '#198754'
    }
}
