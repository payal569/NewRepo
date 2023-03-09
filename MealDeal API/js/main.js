const random = document.querySelector("#random");
const resultHeading = document.querySelector("#result-heading");
const single_mealEl = document.querySelector("#single-meal");
const submit = document.querySelector("#submit");
const search = document.querySelector("#search");
const mealsEl = document.querySelector("#meals");

const searchMeal = (e) => {
  e.preventDefault();
  resultHeading.innerHTML = "";
  const { value: term } = search;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        resultHeading.innerHTML = `<h2>Searches '${term}':</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>No Result Match. Try With The Diffrent Term</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="meal">
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                  <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h2>${meal.strMeal}</h2>
                  </div>
                </div>
              `
            )
            .join("");
        }
      });
    search.value = "";
  } else {
    alert("Please Enter With Correct Search Term");
  }
};

submit.addEventListener("submit", searchMeal);

