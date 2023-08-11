import './PlayerCards.css';

import { card } from './Cards';

const PlayerCards = ({ cards }) => {
    return (
        <div className="pcard-stack">
            <div className='pup-cards'>
                <p className='pcard-label'> {label(cardValue(cards.cards))} </p>
                {cards.cards.length === 0 ?
                    <div className='pcard'>
                        {card['Back']}
                    </div> :
                    cards.cards.map((o, i) => (
                        <div key={i} className='pcard'>
                            {card[o]}
                        </div>
                    ))}
            </div>
            {cards.split.length > 0 && <div className='split-cards'>
                <p className='pcard-label'> {label(cardValue(cards.split))} </p>
                {cards.split.map((o, i) => (
                    <div key={i} className='pcard'>
                        {card[o]}
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
        if (o) {
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

export default PlayerCards;
