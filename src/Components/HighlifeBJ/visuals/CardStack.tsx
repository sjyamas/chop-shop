import { useState } from 'react';
import './CardStack.css';

import { card } from './Cards'


const CardStack = ({ cards }) => {
    const [hole, setHole] = useState(false)
    let stack = removeSecondElement(cards.cards)

    function removeSecondElement(arr) {
        if (!Array.isArray(arr)) {
            console.log("Input is not an array");
            return [];
        }
        if (arr.length === 0) {
            console.log("Array is empty");
            return [];
        }
        if (arr.length === 1) {
            console.log("Array has only 1 element");
            return [...arr];
        }
        if (arr.length >= 2) {
            const newArray = [...arr];
            newArray.splice(1, 1);
            return newArray;
        }
    }

    return (
        <div className="card-stack">
            <div className='up-cards'>
                <p className='pcard-label'> {label(cardValue(cards.cards))} </p>
                {stack.map((o, i) => (
                    <div key={i} className='dcard'>
                        {card[o]}
                    </div>
                ))}
            </div>
            {cards.cards.length > 1 ?
                <div className='down-card'>
                    {card[cards.cards[1]]}
                </div>
                :
                <div className='down-card'>
                    {card['Back']}
                </div>}
        </div>
    );
};

const valueMap = {
    'A': { value: 11, soft: true },
    '2': { value: 2, soft: false },
    '3': { value: 3, soft: false },
    '4': { value: 4, soft: false },
    '5': { value: 5, soft: false },
    '6': { value: 6, soft: false },
    '7': { value: 7, soft: false },
    '8': { value: 8, soft: false },
    '9': { value: 9, soft: false },
    'T': { value: 10, soft: false },
    'J': { value: 10, soft: false },
    'Q': { value: 10, soft: false },
    'K': { value: 10, soft: false },
}

const cardValue = (cards) => {
    let total = 0;
    let soft = false;

    console.log('dfsda', cards)

    cards.map((o, i) => {
        if (o > 0) {
            total += valueMap[o[1]].value
            if (valueMap[o[1]].soft) {
                soft = true
            }
        }

    })
    return ({ value: total, soft: soft })
}

const label = (total) => {
    if (total.soft) {
        return `${total.value - 10}`
    } else {
        return `${total.value}`
    }
}


export default CardStack;