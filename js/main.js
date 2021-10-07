var elCardsList = $_(".movies-list");
var elSearchInput = $_(".header__search-input-js");
var elSearchForm = $_(".form");
var elReasultP = $_(".result-sorry");

elCardsList.innerHTML = '';
var searchResult = [];

var moviesRender = function (movie) {
  var elNewLi = createElement("li", "movies__ietm-js", );
  var elNewtTitle = createElement("h5", "card-title-js", movie.title);
  var elNewSapn = createElement("span", "card-year", movie.year);
  var elNewCategory = createElement("p", "card-categoty", movie.categories);
  var elNewTrailer = createElement('a', "whatch-trailer", 'Whatch-trailer');
  elNewTrailer.href = `https://www.youtube.com/watch?v=${movie.yuoTubeId}`;

  elCardsList.appendChild(elNewLi);
  elNewLi.appendChild(elNewtTitle);
  elNewLi.appendChild(elNewSapn);
  elNewLi.appendChild(elNewCategory);
  elNewLi.appendChild(elNewTrailer);
}

normalizedMovies.forEach(function (movie) {
  moviesRender(movie);
});




elSearchForm.addEventListener('input', function (e) {
  e.preventDefault()

  var elSearchInputText = elSearchInput.value.trim().toLowerCase();
  // elSearchInput.value = null;

  var filteredTitles = normalizedMovies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(elSearchInputText)
    );
  });

  elCardsList.innerHTML = '';
  filteredTitles.forEach((item) => {
    moviesRender(item);
  });
});

