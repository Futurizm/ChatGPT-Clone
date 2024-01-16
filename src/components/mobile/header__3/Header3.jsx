import "./style.css";
import { NavLink } from "react-router-dom";
import arrow from "./../../../img/santaGPT/arrow.png";

const Header3 = () => {
    return (
        <header className="header-page__3">
            <div className="header-page__3__container page__3 _container">
                <div className="page__3__row">
                    <NavLink to="/">
                        <div className="page__3__image">
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    <h3 className="page__3__text">Chat with Santa</h3>
                </div>
            </div>
        </header>
    );
}
 
export default Header3;