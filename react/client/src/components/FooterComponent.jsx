import { Link } from "react-router-dom"

//Component for the footer with link to sitenotice
export function FooterComponent() {
    return (
        <footer class="flex justify-center items-center bg-background dark:bg-backgrounddark text-xl py-5">
            <Link class="text-slate-200 hover:bg-primary duration-200" to="/sitenotice">Impressum</Link>
        </footer>
    )
}