import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export function SitenoticeComponent() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <div class="flex flex-col h-screen bg-slate-100 dark:bg-background p-3 lg:items-center">
        <div class="bg-gray-300 dark:bg-backgroundbright mt-4 p-2 rounded-md lg:w-1/2">
          <h3 class="text-primary text-">Herausgeber und Betreiber des Internetangebots:</h3>
          <div class="dark:text-slate-200">
            <p>Max Mustermann</p>
            <p>Musterstrasse 1 </p>
            <p>12345 Musterstadt</p>
          </div>
        </div>
        <div class="bg-gray-300 dark:bg-backgroundbright mt-4 p-2 rounded-md lg:w-1/2">
          <h3 class="text-primary"> Kontaktdaten:</h3>
          <div class="dark:text-slate-200">
            <p>Telefon: +49 (0)815 / 12 34 50</p>
            <p>Telefax: +49 (0)815 / 12 34 51</p>
            <p>E-Mail: max@mustermann.de</p>
          </div>
        </div>
        <div class="bg-gray-300 dark:bg-backgroundbright dark:text-slate-200 mt-4 p-2 rounded-md lg:w-1/2">
          <h3 class="text-primary"> Umsatzsteuer-Identifikationsnummer: </h3>
          <p>DE 1234567</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
