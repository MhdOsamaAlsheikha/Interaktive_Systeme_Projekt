const results = [
  {
    name: "Zimtschnecken",
    retailCompany: "Aldi Nord",
    price: 1.79,
    categories: ["Teigware", "Süßware", "Nahrungsmittel"],
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Glühwein",
    retailCompany: "Rewe",
    price: 3.99,
    categories: ["Getränk", "Alkohol"],
    image: "",
  },
  {
    name: "Orangen",
    retailCompany: "Rewe",
    price: 0.5,
    categories: ["Nahrungsmittel", "Obst"],
    image: "",
  },
];

console.log(results[0].name);
console.log(results[1].price);
console.log(results[2].categories[1]);

/* function headerr with parameter results
 * constant for parent
 * loop for results-array
 * create card for every entry in array
 * add it to the html document
 */
function createCards(results) {
  $("#cardDiv").empty();
  const container = document.getElementById("cardDiv");

  results.forEach((results) => {
    const card = document.createElement("div");
    card.classList = "card-body";
    const content = `                                                                 
  <div class="card m-2 shadow" style="width: 20rem; height: 35rem">
  <img
    src="${results.image}"
    class="card-img-top mx-auto"
    alt="${results.name}"
  />
  <div class="card-body">
    <h5 class="card-title">${results.name}</h5>
    <p class="card-text">Laden: ${results.retailCompany}</p>
    <p class="card-text">Preis: ${results.price}€</p>
    <p class="card-text">Kategorien: ${results.categories}</p>
    <a href="#" class="btn btn-primary">Ansehen</a>
  </div>
  </div>
  `;
    container.innerHTML += content;
  });
}

//createCards(results);
/**
 * Eventlistener on click
 * clear the modal-body
 * append standard text and unordered list element
 * loop for every selected category
 * copy the text of the category into a const
 * and append it to the unordered list as a list element
 */
$("#searchButton").on("click", function () {
  $(".modal-body").empty();
  $(".modal-body").append(
    "<p>Möchten Sie die Suche nach den ausgewählten Kategorien starten?</p> <ul></ul>"
  );
  $("#selectCategory option:selected").each(function () {
    const category = $(this).text();
    $(".modal-body ul").append($("<li>").text(category));
  });
});

/**
 * compare the mapped categories with the categories of the transfer arguments
 * and check if any match
 * return the result
 */
/** 
function filterByCategory(inputAll, categoryArray) {
  const match = inputAll.filter((category) => {
    if (
      category.categories
        .map((curElement) => categoryArray.includes(curElement))
        .includes(true)
    ) {
      return category;
    }
  });
  console.log(match);
  return match;
}
*/

//filterByCategory(results, ["Süßware"]);

//createCards(filterByCategory(results, ["Süßware", "Getränk"]));

//fetchGet-Function
async function fetchGet(urlServer, categoriesArray) {
  const url =
    urlServer +
    "api/items" +
    "?" +
    "search=" +
    encodeURIComponent(JSON.stringify(categoriesArray));
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
  return JSON.parse(response);
}

// Eventlistener for modalButton
$("#modalSearchButton").on("click", async function () {
  console.log("button clicked");
  const searchCategories = $("#selectCategory option:selected")
    .toArray()
    .map((category) => category.text);
  console.log(await fetchGet("http://127.0.0.1:3000/", searchCategories));
  $("#suchModal").modal("hide");
  createCards(await fetchGet("http://127.0.0.1:3000/", searchCategories));
});

const response = fetch(`http://${"127.0.0.1"}:${"3001"}/items`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    createCards(data);
  })
  .catch((err) => console.log(err));

  
