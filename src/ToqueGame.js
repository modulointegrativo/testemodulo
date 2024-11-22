import React, { useState, useRef, useEffect } from 'react';
import './Toque.css';

const ToqueGame = ({ gender, onBack }) => {
    const [areas, setAreas] = useState({});
    const [message, setMessage] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const areaRefs = useRef({});
    const ballRefs = useRef({});
    const [draggedBall, setDraggedBall] = useState(null);

    const areasMenino = {
        cabecaDireita: null,
        cabecaEsquerda: null,
        bochechaDireita: null,
        bocaDireita: null,
        peitoEsquerdo: null,
        peitoDireito: null,
        maoDireita: null,
        genitalia: null,
        pernaEsquerdaSuperior: null,
        pernaEsquerdaInferior: null,
        bunda: null,
    };

    const areasMenina = {
        cabecaDireita: null,
        cabecaEsquerda: null,
        bochechaDireita: null,
        bocaDireita: null,
        peitoEsquerdo: null,
        peitoDireito: null,
        maoDireita: null,
        genitalia: null,
        pernaDireitaSuperior: null,
        pernaDireitaInferior: null,
        dorso: null,
    };

    const correctBalls = {
        cabecaDireita: 'verde',
        cabecaEsquerda: 'verde',
        bochechaDireita: 'amarela',
        bochechaEsquerda: 'amarela',
        bocaDireita: 'vermelha',
        peitoEsquerdo: 'vermelha',
        peitoDireito: 'vermelha',
        maoDireita: 'verde',
        genitalia: 'vermelha',
        pernaEsquerdaSuperior: 'amarela',
        pernaEsquerdaInferior: 'verde',
        pernaDireitaSuperior: 'amarela',
        pernaDireitaInferior: 'verde',
        bunda: 'vermelha',
        dorso: 'verde',
    };

    const dicas = {
        verde: 'Esta é uma região onde o toque costuma ser seguro.',
        amarela: 'Dica: Esta é uma região que ao ser tocada por outra pessoa precisamos ficar atentos.',
        vermelha: 'Dica: Esta é uma região privada. Ninguém deve tocá-la sem sua permissão.',
    };

    useEffect(() => {
        setAreas(gender === 'menino' ? areasMenino : areasMenina);
    }, [gender]);

    const handleDrop = (e, area) => {
        e.preventDefault();
        const bolaId = draggedBall;
        const areaElement = areaRefs.current[area];

        if (correctBalls[area] === bolaId) {
            const newBall = document.createElement('div');
            newBall.className = `ball ${bolaId} fixed`;
            newBall.style.position = 'absolute';
            newBall.style.top = '50%';
            newBall.style.left = '50%';
            newBall.style.transform = 'translate(-50%, -50%)';
            newBall.style.width = '100%';
            newBall.style.height = '100%';
            areaElement.innerHTML = '';
            areaElement.appendChild(newBall);

            setMessage('');
            setCorrectCount((prev) => prev + 1);
        } else {
            setMessage(dicas[correctBalls[area]]);
        }

        resetBallPosition(bolaId);
    };

    const resetBallPosition = (bolaId) => {
        const ballElement = ballRefs.current[bolaId];
        if (ballElement) {
            ballElement.style.position = 'relative';
            ballElement.style.top = '0';
            ballElement.style.left = '0';
        }
        setDraggedBall(null);
    };

    const handleDragStart = (e, bolaId) => {
        e.dataTransfer?.setData('bola', bolaId);
        setDraggedBall(bolaId);
    };

    const handleTouchStart = (e, bolaId) => {
        e.preventDefault();
        setDraggedBall(bolaId);
    };

    const handleTouchMove = (e) => {
        e.preventDefault(); // Impede a rolagem da tela
        if (draggedBall) {
            const touch = e.touches[0];
            const ballElement = ballRefs.current[draggedBall];
            if (ballElement) {
                ballElement.style.position = 'absolute';
                ballElement.style.left = `${touch.clientX - ballElement.offsetWidth / 2}px`;
                ballElement.style.top = `${touch.clientY - ballElement.offsetHeight / 2}px`;
            }
        }
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        const touch = e.changedTouches[0];
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

        if (dropTarget && dropTarget.classList.contains('area')) {
            const area = dropTarget.classList[1];
            handleDrop({ preventDefault: () => {} }, area);
        } else {
            resetBallPosition(draggedBall);
        }
    };

    const resetGame = () => {
        setMessage('');
        setCorrectCount(0);

        Object.values(areaRefs.current).forEach((area) => {
            area.innerHTML = '';
        });
    };

    return (
        <div className="content">
            <button className="back-button" onClick={onBack}>
                Voltar
            </button>

            
       
            

             
            <div
                className="game-container"
                onTouchMove={handleTouchMove} // Impede rolagem ao tocar
                onTouchEnd={handleTouchEnd} //
            >
                <div className="person">
                    {gender === 'menino' && (
                        <img
                            src={`${process.env.PUBLIC_URL}/menino.png`}
                            alt="Menino"
                            className="image"
                        />
                    )}
                    {gender === 'menina' && (
                        <img
                            src={`${process.env.PUBLIC_URL}/menina.png`}
                            alt="Menina"
                            className="image"
                        />
                    )}

                    {Object.keys(areas).map((area) => (
                        <div
                            key={area}
                            ref={(el) => (areaRefs.current[area] = el)}
                            className={`area ${area}`}
                            onDrop={(e) => handleDrop(e, area)}
                            onDragOver={(e) => e.preventDefault()}
                        />
                    ))}
                </div>

                <div className="balls">
                    {['verde', 'amarela', 'vermelha'].map((color) => (
                        <div
                            key={color}
                            ref={(el) => (ballRefs.current[color] = el)}
                            className={`ball ${color}`}
                            draggable
                            onDragStart={(e) => handleDragStart(e, color)}
                            onTouchStart={(e) => handleTouchStart(e, color)}
                        />
                    ))}
                </div>
            </div>

            {message && <p className="message">{message}</p>}

            <button className="reset-button" onClick={resetGame}>
                Apagar
            </button>
        </div>
    );
};

export default ToqueGame;
