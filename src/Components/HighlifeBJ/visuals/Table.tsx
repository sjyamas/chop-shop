import './Table.css'

import CardStack from './CardStack'
import PlayerCards from './PlayerCards'

import { card } from './Cards'

import EmptyCard from './EmptyCard'

export default function Table({ cards, players }) {
    console.log('dfdfdfd', cards)
    return (
        <div className='table-cloth'>
            <div className='area-1'>
                <div className='card-cont'>
                    <CardStack cards={cards.cardsList[0]} />
                </div>
            </div>
            <div className='area-2'>
                <PlayerCards cards={cards.cardsList[1]} />
            </div>
            <div className='area-3'>
                {cards.cardsList.length > 2 ? <div>
                    <PlayerCards cards={cards.cardsList[2]} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-4'>
                {cards.cardsList.length > 3 ? <div>
                    <PlayerCards cards={cards.cardsList[3]} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-5'>
                {cards.cardsList.length > 4 ? <div>
                    <PlayerCards cards={cards.cardsList[4]} />
                </div> : <EmptyCard />}
            </div>
        </div>
    )
}
