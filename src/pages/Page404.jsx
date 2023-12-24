import "./Page404.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"

function Page404() {
  return (
    <div>
        < Header />
        <div className="container_page404">
            <h1 className="title404">404</h1>
            <h2 className="text404">Oups ! La page que vous demandez n&apos;existe pas.</h2>
            <Link className="redirection_accueil" to="/">
                Retourner sur la page d&apos;accueil
            </Link>
        </div>
        < Footer />
    </div>
  )
}

export default Page404