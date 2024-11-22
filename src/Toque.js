import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GenderSelection from './GenderSelection';
import ToqueGame from './ToqueGame';

const Toque = () => {
    const [gender, setGender] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Sempre que o usuário navega para "/", resetamos o gênero
        if (location.pathname === '/') {
            setGender(null);
        }
    }, [location]);

    return (
        <div className="container">
            {!gender ? (
                <GenderSelection onGenderSelect={setGender} />
            ) : (
                <ToqueGame gender={gender} onBack={() => setGender(null)} />
            )}
        </div>
    );
};

export default Toque;
