import './CardStack.css';

import { card } from './Cards'


const CardStack = ({cards, hole}) => {

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
                {hole}
            </div>
        </div>
    );
};

export default CardStack;
