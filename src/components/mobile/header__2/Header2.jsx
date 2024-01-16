import "./style.css";
import arrow from "./../../../img/chatGPT/arrow.png";
import {NavLink} from "react-router-dom";


const Header2 = () => {
    return (
        <header className="header-page__2">
            <div className="header-page__2__container page__2 _container">
                <div className="page__2__row">
                    <NavLink to="/">
                        <div className="page__2__image">
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    <h3 className="page__2__text">Chat with GPT</h3>
                </div>
            </div>
        </header>
    );
}
 
export default Header2;