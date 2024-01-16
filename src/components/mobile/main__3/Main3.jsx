import "./style.css";
import SANTA from "./../../../img/santaGPT/santa.png";
import User from "./../../../img/santaGPT/user.png";
import Send from "./../../../img/chatGPT/send.svg";
import React, { useState, useEffect, useRef } from "react";
import "./extra.css";


const Main3 = () => {
    const [response, setResponse] = useState('');
    const [inputText, setInputText] = useState('');
    const inputRef = useRef('');

    useEffect(() => {
        // Обновляем родительский компонент при изменении inputText
        console.log("Input Text Updated:", inputText);
    }, [inputText]);

    useEffect(() => {
        // Обновляем родительский компонент при изменении response
        console.log("Response Updated:", response);
    }, [response]);

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const handleImageClick = async () => {
        try {
            const response = await fetch('https://8867-2-133-130-122.ngrok-free.app/api/santa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputRef.current.value,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Обновляем родительский компонент при изменении inputText и response
            handleInputChange(inputRef.current.value);
            setResponse(data.message);

            // Очищаем инпут
            inputRef.current.value = '';
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    }; 


    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleImageClick(); // Trigger the same logic as button click on Enter key press
        }
    };
    
    return (
        <>
        <main className="main-page__3">
            <div className="main-page__3__container _container">
                <div className="main-page__3__row">
                    <div className="main-page__3__item page__3__item">
                        <div className="page__3__item__body item__2__body">
                            <div className="item__2__body__image">
                                <img src={SANTA} alt="" />
                            </div>
                            <div className="item__2__body__title">SANTA GPT</div>
                        </div>
                        <div className="item__2__body__text">Hello! How can I assist you today?</div>
                    </div>
                    {inputText && (
                                <div className="item__body__text">
                                    <img src={User} alt="" /> : {inputText}
                                </div>
                    )}
                            {response && (
                                <div className="item__body__text">
                                    <img src={SANTA} alt="" /> : {response}
                                </div>
                    )}
                </div>
            </div>
        </main>
        <footer className="footer">
            <div className="footer__container _container">
            <div className="footer__row row">
                <input
                ref={inputRef}
                placeholder="Your message"
                className="row__input"
                type="text"
                onKeyDown={handleEnterKeyPress}
                />
                <button onClick={handleImageClick} className="row__image">
                <img src={Send} alt="" />
                </button>
            </div>
            </div>
        </footer>
    </>
    );
}
 
export default Main3;