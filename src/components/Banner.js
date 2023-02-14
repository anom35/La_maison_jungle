
import "../styles/Banner.css"
import logo from "../assets/logo.png"
import Recommandation from "./Recommandation"

function Banner() {
    const title = "La maison Jungle"


    return (
        <div className="lmj-banner">
            <div className="lmj-banner-row">
                <img src={logo} alt="La maison jungle" className="lmj-logo"></img>
                <h1 className="lmj-title">{title}</h1>
            </div>
            <Recommandation />
        </div>
    )
}

export default Banner