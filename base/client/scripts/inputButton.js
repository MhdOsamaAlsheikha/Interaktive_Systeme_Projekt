/**
 * constant for the inputButton, itemInput, ladenInput, preisInput, kategorieInput, essenimgInput, requiredInputs and inputDiv
 * add eventListener to the inputButton
 * event on click
 * output in console
 * for-loop for every entrry in the array
 * if-condition for testing if the inputFields are empty
 * if empty then add a red border and set focus on the first element with empty input
 * if not empty remove the red border
 * if-condition for testing if inputFields are not empty
 * if not empty then empty inputFields
 * set a 5sec timeout for the window
 * create a label with a styling class and content
 * then append it to the parent node
 */
const button = document.getElementById("inputButton");
const itemInput = document.getElementById("item");
const storeInput = document.getElementById("laden");
const priceInput = document.getElementById("preis");
const categoryInput = document.getElementById("kategorie");
const imgInput = document.getElementById("essenimg");
const requiredInputs = document.querySelectorAll("#laden, #preis, #item");
const inputDiv = document.getElementById("inputDiv");

button.addEventListener("click", async function () {
  console.log("button clicked");

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

  // object for the groceryItem
  const groceryItem = {
    name: $("#item").val(),
    retailCompany: $("#laden").val(),
    price: $("#preis").val(),
    categories: $("#kategorie option:selected")
      .toArray()
      .map((kategorie) => kategorie.text),
    image: await encodeImageFileAsBase64(
      document.querySelector("input[type=file]").files[0]
    ),
  };

  console.log(groceryItem);

  // object convert to JSON
  console.log(JSON.stringify(groceryItem));

  async function fetchPost(data) {
    const url = "http://127.0.0.1:3000/" + "api/items";
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
          const inputDiv = document.getElementById("inputDiv");
          const timeoutLabel = document.createElement("label");
          timeoutLabel.classList.add(
            "font-medium",
            "text-xl",
            "text-orange-600",
            "mb-1"
          );
          timeoutLabel.textContent = "Eingabe erfolgreich!";
          inputDiv.appendChild(timeoutLabel);
        }
      })
      /* Catch exceptions/errors */
      .catch((err) => console.log(err));
  }

  //check if theres a file attached, if yes encode it
  /** 
  if (document.querySelector("input[type=file]").files[0]) {
    encodeImageFileAsBase64(
      document.querySelector("input[type=file]").files[0]
    );
  }
  */

  //HTTP-POST method
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  for (let i = requiredInputs.length - 1; i >= 0; i--) {
    if (requiredInputs[i].value == "") {
      requiredInputs[i].classList.add("border-red-600", "border-4");
      requiredInputs[i].focus();
    } else {
      requiredInputs[i].classList.remove("border-red-600");
    }
  }

  if (
    itemInput.value != "" &&
    storeInput.value != "" &&
    priceInput.value != ""
  ) {
    itemInput.value = "";
    storeInput.value = "";
    priceInput.value = "";
    categoryInput.selectedIndex = -1;
    imgInput.value = null;
    document.getElementById("imgPreview").classList.add("hidden");

    /** 
    window.setTimeout(function () {
      const inputDiv = document.getElementById("inputDiv");
      const timeoutLabel = document.createElement("label");
      timeoutLabel.classList.add(
        "font-medium",
        "text-xl",
        "text-orange-600",
        "mb-1"
      );
      timeoutLabel.textContent = "Eingabe erfolgreich!";
      inputDiv.appendChild(timeoutLabel);
    }, 5000);
    */
  }

  await fetchPost(groceryItem);
});

/**
 * add eventlistener to the imgInput
 * if-condition for testing if the input got a file
 * create an URL for that file
 * and display it in the document
 */

imgInput.addEventListener("change", (event) => {
  let selectedFiles = event.target.files;
  if (selectedFiles.length === 1) {
    let localUrl = URL.createObjectURL(selectedFiles[0]);
    let imagePreview = document.getElementById("imgPreview");
    imagePreview.src = localUrl;
    imagePreview.classList.remove("hidden");
  }
});
