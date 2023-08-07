import './PlayerCards.css';

const PlayerCards = ({cards, split}) => {
    let isSplit = false;

    if(split.length !== 0){
        isSplit  = true
    }

    return (
        <div className="pcard-stack">
            <div className='pup-cards'>
                <p className='pcard-label'> HELLO </p>
                {cards.map((o, i) => (
                    <div key={i} className='pcard'>
                        {o}
                    </div>
                ))}
            </div>
            {isSplit && <div className='split-cards'>
            <p className='pcard-label'> HELLO </p>
                {split.map((o, i) => (
                    <div key={i} className='pcard'>
                        {o}
                    </div>
                ))}
            </div>}

        </div>
    );
};

export default PlayerCards;
