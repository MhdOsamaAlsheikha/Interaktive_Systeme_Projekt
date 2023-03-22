//imports
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { Outlet } from "react-router-dom";
import wallpaperNeon from "../../../base/client/images/wallpaperneon.jpg";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Outlet />
      <div class="flex flex-col w-auto h-fit p-3 bg-gray-100 dark:bg-background dark:text-slate-200">
        <div class="flex flex-col w-auto lg:flex-row">
          <section class="flex w-auto h-96 mt-5 p-3 bg-gray-300 dark:bg-backgroundbright text-lg lg:mr-3 lg:w-1/2">
            &not;Forgettify ist eine neue innovative Einkauflisten-Anwendung, die
            dir dabei helfen soll deine Einkäufe besser zu planen, damit auch auch
            nichts vergessen wird... besonders die Spaghetti nicht. Es ist möglich
            Lebensmittel einer Sammlung hinzuzufügen, samt derer Preise und allen
            wichtigen Informationen, wie zum Beispiel Gewicht und Nährwerte. Nun
            lässt sich eine personalisierte Einkaufsliste um einiges einfacher
            erstellen.
          </section>
          <section class="flex w-auto h-96 mt-5 p-3 bg-gray-300 dark:bg-backgroundbright text-lg lg:ml-3 lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam
            deleniti nostrum eligendi dignissimos quaerat debitis doloremque
            neque, explicabo ipsam earum sit in quasi voluptatem consequuntur
            ullam, magnam accusantium suscipit.
          </section>
        </div>
        <section class="flex w-auto h-1/4 overflow-hidden mt-5 p-3 bg-gray-400 dark:bg-backgroundbright text-lg">
          <img src={wallpaperNeon} />
        </section>
        <div class="flex flex-col">
          <section class="flex w-auto h-96 mt-5 p-3 bg-gray-300 dark:bg-backgroundbright text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam
            deleniti nostrum eligendi dignissimos quaerat debitis doloremque
            neque, explicabo ipsam earum sit in quasi voluptatem consequuntur
            ullam, magnam accusantium suscipit.
          </section>
          <section class="flex w-auto h-96 mt-5 p-3 bg-gray-300 dark:bg-backgroundbright text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam
            deleniti nostrum eligendi dignissimos quaerat debitis doloremque
            neque, explicabo ipsam earum sit in quasi voluptatem consequuntur
            ullam, magnam accusantium suscipit.
          </section>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
