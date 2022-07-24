let genre_chooseBtn = document.querySelector('.genre-choose');
let bookContent = document.querySelectorAll('.book-content');
let genreIdx = 0;
let genresForChoose = ['Фэнтези', 'Приключения', 'Сказки'];

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