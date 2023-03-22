import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { useState, useEffect, useRef } from "react";

export function InputComponent() {
  //hook declaration
  const [input, setInput] = useState({
    name: "",
    retail: "",
    price: "",
    file: "",
  });
  const [categories, setCategories] = useState([]);
  const [reset, setReset] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const previewRef = useRef(null);

  //clears inputs after successful input
  useEffect(() => {
    setInput({
      name: "",
      retail: "",
      price: "",
      file: "",
    });
    setCategories([]);
    document.getElementById("imgPreview").style.width = "0px";
  }, [reset]);

  //event listener on click
  async function handleClick() {

    //Image encoding
    async function encodeImageFileAsBase64(file) {
      if (!document.querySelector("input[type=file]").files[0]) {
        return "";
      }
      return new Promise((resolve) => {
        // Create new fileReader
        let reader = new FileReader();
        // Add onload event
        reader.onloadend = () => {
          // Call resolve
          resolve(reader.result);
        };
        // Pass file to fileReader
        reader.readAsDataURL(file);
      }).then((val) => {
        return val;
      });
    }

    //constant for groceryItem
    const groceryItem = {
      name: input.name,
      retailCompany: input.retail,
      price: input.price,
      categories: categories,
      image: await encodeImageFileAsBase64(
        document.querySelector("input[type=file]").files[0]
      ),
    };

    //fetchPost function
    async function fetchPost(data) {
      const url = "http://127.0.0.1:3002/" + "api/items";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          /* Check for response.status == 201 to show label */
          if (response.status == 201) {
            //create and display "Eingabe erfolgreich"-Label
            const inputDiv = document.getElementById("inputDiv");
            const timeoutLabel = document.createElement("label");
            timeoutLabel.style.display = "block";
            timeoutLabel.textContent = "Eingabe erfolgreich!";
            inputDiv.appendChild(timeoutLabel);
            setTimeout(function () {
              timeoutLabel.style.display = "none";
            }, 4000);
          }
        })
        /* Catch exceptions/errors */
        .catch((err) => console.log(err));
    }

    //checks required inputs, mark missing ones red
    const requiredInputs = document.querySelectorAll(
      "#nameInput, #retailCompanyInput, #priceInput"
    );
    for (let i = requiredInputs.length - 1; i >= 0; i--) {
      if (requiredInputs[i].value == "") {
        requiredInputs[i].style.borderColor = "red";
        requiredInputs[i].focus();
      } else {
        requiredInputs[i].style.borderColor = "none";
      }
    }

    //if all required inputs are filled post the data and clear inputs
    if (input.name != "" && input.retail != "" && input.price != "") {
      setReset(!reset);
      await fetchPost(groceryItem);
    }
  }

  //create an url for the preview
  function useImagePreview(file) {
    useEffect(() => {
      if (!file) return;

      const objectUrl = URL.createObjectURL(file);
      previewRef.current = objectUrl;
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(previewRef.current);
    }, [file]);

    if (preview != null) {
      return preview;
    } else {
      return "";
    }
  }

  //create an url for the image in the input
  const imagePreview = useImagePreview(selectedFile);

  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <div class="flex flex-col justify-center items-center bg-gray-100 dark:bg-background dark:text-slate-200">
        <div class="flex flex-col w-96 h-fit justify-center items-center bg-gray-300 dark:bg-backgroundbright my-8 rounded-md shadow-md lg:w-1/2">
          <p class="mt-2">Wähle Kategorie(n)</p>
          <select
            class="text-neutral-900 mb-2 w-64 lg:w-1/2 lg:h-40 border-2 border-gray-900 dark:border-0"
            multiple
            name="kategorie"
            //set categories to selected ones
            onChange={(e) => {
              const selectedCategories = [...e.target.options].filter(
                (option) => option.selected
              );
              setCategories(selectedCategories.map((option) => option.text));
            }}
          >
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
          <label class="mt-2" htmlFor="nameInput">
            Lebensmittel
          </label>
          <input
            class="mb-2 w-64 lg:w-1/2 lg:h-8 border-2 text-neutral-900 border-gray-900 dark:border-0"
            type="text"
            id="nameInput"
            name="name"
            value={input.name || ""}
            required
            minLength="3"
            maxLength="16"
            size="30"
            placeholder="Produkt"
            //set name to inputField value
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label class="mt-2" htmlFor="retailCompanyInput">
            Laden
          </label>
          <input
            class="mb-2 w-64 lg:w-1/2 lg:h-8 border-2 text-neutral-900 border-gray-900 dark:border-0"
            type="text"
            id="retailCompanyInput"
            name="retail"
            value={input.retail || ""}
            required
            minLength="3"
            maxLength="16"
            size="30"
            placeholder="Laden"
            //set retail to inputField value
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label class="mt-2" htmlFor="priceInput">
            Preis(€)
          </label>
          <input
            class="mb-2 w-64 lg:w-1/2 lg:h-8 border-2 text-neutral-900 border-gray-900 dark:border-0"
            type="number"
            id="priceInput"
            name="price"
            value={input.price || ""}
            required
            minLength="3"
            maxLength="16"
            size="30"
            placeholder="00,00€"
            min="1"
            //set price to inputField value
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input
            class="my-2 w-64 lg:w-1/2 lg:h-8"
            type="file"
            id="fileInput"
            name="file"
            value={input.file || ""}
            accept="image/png, image/jpg"
            max="1"
            ref={previewRef}
            //set file to inputField value and show a preview
            onChange={(e) => {
              setInput({ ...input, [e.target.name]: e.target.value });
              setSelectedFile(e.target.files[0]);
              document.getElementById("imgPreview").style.width = "400px";
            }}
          />
          <button
            class="w-36 h-10 text-neutral-900 bg-primary border-orange-600 border-2 rounded-md my-2 lg:w-48 lg:mb-6 lg:text-xl"
            id="inputButton"
            onClick={handleClick}
          >
            Hinzufügen
          </button>
          <div id="inputDiv"></div>
          <div class="flex flex-col w-80 h-80 justify-center items-center border-2 border-primary rounded-md my-6 lg:my-16 lg:w-1/2 lg:h-1/4">
            <h2 class="text-primary text-2xl my-3">Preview:</h2>
            <img class="w-60 h-60 my-3 lg:w-96 lg:h-96 p-2" id="imgPreview" src={imagePreview || ""} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
