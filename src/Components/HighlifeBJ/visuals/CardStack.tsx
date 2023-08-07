import './CardStack.css';

import { Back, CA, SA } from './Cards'


const CardStack = () => {
    let cards = [<SA size={'%40'} />, <SA size={'%40'} />, <SA size={'%40'} />, <SA size={'%40'} />]
    let faceDown = <Back size={'40%'} />
    return (
        <div className="card-stack">
            <div className='up-cards'>
                {cards.map((o, i) => (
                    <div key={i} className='pcard'>
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
