import "./style.css";
import GPT from "./../../../img/chatGPT/gpt.png";
import User from "./../../../img/chatGPT/user.png";
import React, { useState, useEffect, useRef } from "react";
import Send from "./../../../img/chatGPT/send.svg";
import "./extra.css";

const Main2 = () => {

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
            const response = await fetch('https://8867-2-133-130-122.ngrok-free.app/api/gpt3', {
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
        <main className="main-page__2">
            <div className="main-page__2__container _container">
                <div className="main-page__2__row">
                    <div className="main-page__2__item page__2__item">
                        <div className="page__2__item__body item__body">
                            <div className="item__body__image">
                                <img src={GPT} alt="" />
                            </div>
                            <div className="item__body__title">CHAT GPT</div>
                        </div>
                        <div className="item__body__text">Hello! How can I assist you today?</div>
                    </div>
                    {inputText && (
                                <div className="item__body__text">
                                    <img src={User} alt="" /> : {inputText}
                                </div>
                    )}
                            {response && (
                                <div className="item__body__text">
                                    <img src={GPT} alt="" /> : {response}
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

            {/* Render messages from the state */}
            </div>
        </footer>
        </>
    );
}
 
export default Main2;