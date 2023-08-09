import './PlayerCards.css';

import { card } from './Cards';

const PlayerCards = ({ cards, split, scards }) => {
    let isSplit = false;

    if (split.length !== 0) {
        isSplit = true
    }
    return (
        <div className="pcard-stack">
            <div className='pup-cards'>
                <p className='pcard-label'> {label(cardValue(scards))} </p>
                {cards.length === 0 ?
                    <div className='pcard'>
                        {card['Back']}
                    </div> :
                    cards.map((o, i) => (
                        <div key={i} className='pcard'>
                            {o}
                        </div>
                    ))}
            </div>
            {isSplit && <div className='split-cards'>
                <p className='pcard-label'> {JSON.stringify(cardValue(split))} </p>
                {split.map((o, i) => (
                    <div key={i} className='pcard'>
                        {o}
                    </div>
                ))}
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
        total += valueMap[o[1]].value
        if (valueMap[o[1]].soft) {
            soft = true
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

export default PlayerCards;
