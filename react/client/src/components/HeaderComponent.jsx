import { Link } from "react-router-dom"
import logoWow from "../../../../base/client/images/LogoWOW.png";

//Component for the header with logo and nav-bar
export function HeaderComponent() {
    return (
        <header class="w-full bg-background dark:bg-backgrounddark">
            <div class="flex flex-row w-full justify-around items-center -mt-2">
                <img class="relative right-39 w-40 right-4 p-2" src={logoWow}/>
                    <div>
                        <h1 class="text-primary text-center font-extrabold text-3xl md:text-5xl">
                            <span class="font-extrabold text-3xl text-secondary md:text-6xl">&not;</span>Forgettify
                        </h1>
                        <h2 class="text-primary text-center font-extrabold text-xl md:text-3xl">
                            Don't Forgetti The Spaghetti
                        </h2>
                    </div>
                <img src={logoWow} class="w-0 sm:invisible sm:w-40"/>
            </div>
            <nav class="flex justify-center bg-backlground dark:bg-backgrounddark -mt-5 pb-3">
                <ul class="list-none overflow-hidden py-3">
                    <li class="float-none border-solid border-2 border-backgroundbright w-36 md:float-left">
                        <Link class="block text-slate-200 text-center text-xl py-3 hover:bg-primary duration-200" to="/">Startseite</Link>
                    </li>
                    <li class="float-none border-solid border-2 border-backgroundbright w-36 md:float-left">
                        <Link class="block text-slate-200 text-center text-xl py-3 hover:bg-primary duration-200" to="/about">Über uns</Link>
                    </li>
                    <li class="float-none border-solid border-2 border-backgroundbright w-36 md:float-left">
                        <Link class="block text-slate-200 text-center text-xl py-3 hover:bg-primary duration-200" to="/input">Eingabe</Link>
                    </li>
                    <li class="float-none border-solid border-2 border-backgroundbright w-36 md:float-left">
                        <Link class="block text-slate-200 text-center text-xl py-3 hover:bg-primary duration-200" to="/recall">Abruf</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
}