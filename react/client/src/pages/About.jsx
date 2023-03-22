import { Outlet } from "react-router-dom";
import osamaLogo from "../../../../base/client/images/1.jpg";
import tillLogo from "../../../../base/client/images/2.jpg";
import sebastianLogo from "../../../../base/client/images/3.jpg";
import hannesLogo from "../../../../base/client/images/4.jpg";
import aaronLogo from "../../../../base/client/images/5.jpg";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";


export function AboutComponent() {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
            <div class="flex flex-col bg-gray-100 dark:bg-background p-3 dark:text-slate-200 lg:flex-row lg:flex-wrap lg:justify-center">
                <div class="flex bg-slate-300 dark:bg-backgroundbright flex-col mt-3 p-2 items-center lg:w-5/12 lg:mr-2">
                    <img class="w-1/3 h-1/3 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-2/3" src={osamaLogo} alt="" title="Osama"/>
                    <p class="text-primary text-2xl">Mhd Osama Alsheikha</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam deleniti nostrum eligendi dignissimos quaerat debitis doloremque neque, explicabo ipsam earum sit in quasi voluptatem consequuntur ullam, magnam accusantium suscipit.</p>
                </div>
                <div class="flex bg-slate-300 dark:bg-backgroundbright flex-col mt-3 p-2 items-center lg:w-5/12 lg:ml-2">
                    <img class="w-1/3 h-1/3 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-2/3" src={tillLogo} alt="" title="Till"></img>
                    <p class="text-primary text-2xl">Till Bartels</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam deleniti nostrum eligendi dignissimos quaerat debitis doloremque neque, explicabo ipsam earum sit in quasi voluptatem consequuntur ullam, magnam accusantium suscipit.</p>
                </div>
                <div class="flex bg-slate-300 dark:bg-backgroundbright flex-col mt-3 p-2 items-center lg:w-5/12 lg:mr-2">
                    <img class="w-1/3 h-1/3 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-2/3" src={sebastianLogo} alt="" title="Sebastian"/>
                    <p class="text-primary text-2xl">Sebastian Guhl</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam deleniti nostrum eligendi dignissimos quaerat debitis doloremque neque, explicabo ipsam earum sit in quasi voluptatem consequuntur ullam, magnam accusantium suscipit.</p>
                </div>
                <div class="flex bg-slate-300 dark:bg-backgroundbright flex-col mt-3 p-2 items-center lg:w-5/12 lg:ml-2">
                    <img class="w-1/3 h-1/3 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-2/3" src={hannesLogo} alt="" title="Hannes"/>
                    <p class="text-primary text-2xl">Hannes Hering</p>
                    <p>Ich bin Hannes Megahering. 23 Jahre jung und befinde mich aktuell im 3. Semester des Studienganges Medieninformatik. Ich persönlich habe eine große Interesse an der Schnitstelle von Technik und Kreativität. In meiner Freizeit spiele ich gerne Videospiele und befasse mich mit den unterschiedlichsten Themen.</p>
                </div>
                <div class="flex bg-slate-300 dark:bg-backgroundbright flex-col mt-3 p-2 items-center lg:w-5/12">
                    <img class="w-1/3 h-1/3 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-2/3" src={aaronLogo} alt="" title="Aaron"/>
                    <p class="text-primary text-2xl">Aaron Klütz</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam deleniti nostrum eligendi dignissimos quaerat debitis doloremque neque, explicabo ipsam earum sit in quasi voluptatem consequuntur ullam, magnam accusantium suscipit.</p>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}