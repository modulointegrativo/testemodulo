import React from 'react';
import './Toque.css';

const GenderSelection = ({ onGenderSelect }) => {
    return (
        <div className="gender-selection">
            <h2>Escolha o gênero:</h2>
            <div className="gender-options">
                <button
                    className="gender-button"
                    onClick={() => onGenderSelect('menino')}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/icon-boy.jpg`}
                        alt="Menino"
                        className="gender-icon"
                    />
                    Menino
                </button>
                <button
                    className="gender-button"
                    onClick={() => onGenderSelect('menina')}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/icon-girl.jpg`}
                        alt="Menina"
                        className="gender-icon"
                    />
                    Menina
                </button>
            </div>
        </div>
    );
};

export default GenderSelection;
