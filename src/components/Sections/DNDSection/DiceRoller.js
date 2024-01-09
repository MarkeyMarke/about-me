import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getRandomNumber from '../../../services/getRandomNumber';
import './__styles__/DiceRoller.scss';

function DiceRoller() {
    const diceRef = useRef();
    const [diceText, setDiceText] = useState('20');
    const [isRolling, setIsRolling] = useState(false);

    useEffect(() => {
        diceRef.current.addEventListener(
            'animationend',
            () => {
                const newNumber = getRandomNumber(1, 20);
                setDiceText(newNumber);
                setIsRolling(false);
            },
            true,
        );
    }, []);

    const handleClick = () => {
        setIsRolling(true);
        const dice = diceRef.current;
        dice.style.animationPlayState = 'running';
        dice.style.animationName = 'none';
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                dice.style.animationName = '';
            }, 0);
        });
    };

    return (
        <button
            type="button"
            aria-label="Roll a d20"
            className="dice-roller-button"
            onClick={handleClick}
        >
            <span className={cn({ rolling: isRolling })}>
                <strong>{diceText}</strong>
            </span>
            <FontAwesomeIcon icon={faDiceD20} className="dice" ref={diceRef} />
        </button>
    );
}

export default DiceRoller;
