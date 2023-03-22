import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { useState, useEffect } from "react";
import { CardComponent } from "../components/CardComponent";

export function RecallComponent() {
  //hook declaration
  const [item, setItem] = useState([]);

  //fetches items from backend and sets the hook
  useEffect(() => {
    async function fetchItems() {
      await fetch(`http://${"127.0.0.1"}:${"3001"}/items`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        })
        .catch((err) => console.log(err));
    }

    fetchItems();
  }, []);

  //event listener on click
  async function handleClick() {
    const selectedCategories = document.querySelector("#selectCategory");
    //create array of selected categories
    const searchCategories = Array.from(selectedCategories.options)
      .filter(function (option) {
        return option.selected;
      })
      .map(function (option) {
        return option.text;
      });
    //fetchGet with selected categories
    await fetchGet(searchCategories);
  }

  //fetchGet function
  async function fetchGet(categoriesArray) {
    const url =
      "http://127.0.0.1:3002/" +
      "api/items" +
      "?" +
      "search=" +
      encodeURIComponent(JSON.stringify(categoriesArray));
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(JSON.parse(data));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <div class="flex flex-col justify-center items-center px-3 py-6 bg-gray-100 dark:bg-background">
        <p class="text-neutral-900 dark:text-slate-200">Wähle Kategorie(n)</p>
        <select class="text-neutral-900 mb-2 w-64 md:w-1/3 lg:h-40 border-2 border-gray-900 dark:border-0" multiple name="kategorie" id="selectCategory">
          <option value="food">Nahrungsmittel</option>
          <option value="meat">Fleischprodukt</option>
          <option value="bio">Bioprodukt</option>
          <option value="vegetables">Gemüse</option>
          <option value="fruit">Obst</option>
          <option value="milk">Milchprodukt</option>
          <option value="freezer">Tiefkühlprodukt</option>
          <option value="veggie">Veggieprodukt</option>
          <option value="pastries">Teigware</option>
          <option value="sweets">Süßware</option>
          <option value="drinks">Getränk</option>
          <option value="other">Anderes</option>
        </select>
        <button class="w-36 h-10 text-neutral-900 bg-primary border-orange-600 border-2 rounded-md my-3" id="searchButton" type="button" onClick={handleClick}>
          Suche
        </button>
      </div>
      <div class="flex flex-col items-center bg-gray-100 dark:bg-background  md:flex-row md:flex-wrap md:justify-around">
      <CardComponent item={item} />
      </div>
      <FooterComponent />
    </div>
  );
}
