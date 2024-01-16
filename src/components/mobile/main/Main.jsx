import "./style.css";
import chatGPT from "./../../../img/main_page/chatGPT.png"
import santaGPT from "./../../../img/main_page/santaGPT.png";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <>
        <main className="main-page">
            <NavLink to="/chatGPT" className="main-page__link">
                <div className="main-page__first__block">
                    <div className="main-page__container _container">
                        <div className="main-page-item">
                            <div className="main-page-image">
                                <img src={chatGPT} alt="" />
                            </div>
                            <div className="main-page__text">
                                <div className="main-page__title">Chat GPT</div>
                                <div className="main-page__subtitle">Default ChatGPT 3.5 model</div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/santaGPT" className="main-page__link__2">
                <div className="main-page__second__block">
                    <div className="main-page__container _container">
                        <div className="main-page-item">
                            <div className="main-page-image">
                                <img src={santaGPT} alt="" />
                            </div>
                            <div className="main-page__text">
                                <div className="main-page__title">Santa GPT</div>
                                <div className="main-page__subtitle">Santa Claus now is available!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </main>
        </>
    );
}
 
export default Main;