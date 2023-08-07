import './CardStack.css';

import { card } from './Cards'


const CardStack = () => {

    let cards = [card['SA'], card['C7'], card['C2']]
    let faceDown = card['Back']

    return (
        <div className="card-stack">
            <div className='up-cards'>
                {cards.map((o, i) => (
                    <div key={i} className='dcard'>
                        {o}
                    </div>
                ))}
            </div>
            <div className='down-card'>
                {faceDown}
            </div>
        </div>
    );
};

export default CardStack;
