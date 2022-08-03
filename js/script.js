let genre_chooseBtn = document.querySelector('.genre-choose');
let bookContent = document.querySelectorAll('.book-content');
let genreIdx = 0;
let genresForChoose = ['Фэнтези', 'Приключения', 'Сказки'];
let book = document.querySelectorAll('.book');

genre_chooseBtn.addEventListener('click', function () {
    console.log('hello');
    genreIdx++;
    if (genreIdx > 2) {
        genreIdx = 0;
    }
    genre_chooseBtn.innerHTML = genresForChoose[genreIdx];
    for (let contentKey = 0; contentKey < bookContent.length; contentKey++) {
        bookContent[contentKey].classList.remove('active');
    }
    console.log(bookContent[genreIdx])
    bookContent[genreIdx].classList.add('active');
})
setInterval(() => {
    if (window.innerWidth < 992) {
        let batir = 0;
        for (let bookKey = 0; bookKey < book.length; bookKey++) {

            if (bookKey == 0) {
                batir = bookKey;
                book[batir].style = 'display: none';
            }
            if (bookKey - batir == 4) {
                batir = batir + 4;
                book[batir].style = 'display: none';
            }
        }
    }
    else {
        for (let ix = 0; ix < book.length; ix++) {

            book[ix].style = 'display: block';
        }
    }
}, 1000);
