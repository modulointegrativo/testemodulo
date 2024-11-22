import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GenderSelection from './GenderSelection';
import ToqueGame from './ToqueGame';

const Toque = ({ isMobile }) => {
    const [gender, setGender] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            setGender(null);
        }
    }, [location]);

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        if (isMobile) {
            navigate('/jogo', { state: { gender: selectedGender } });
        }
    };

    return (
        <div className="container">
            {!gender && <GenderSelection onGenderSelect={handleGenderSelect} />}
            {!isMobile && gender && <ToqueGame gender={gender} onBack={() => setGender(null)} />}
        </div>
    );
};

export default Toque;
