import './Table.css'

import CardStack from './CardStack'
import PlayerCards from './PlayerCards'

import { card } from './Cards'

import EmptyCard from './EmptyCard'
import { useEffect } from 'react'

export default function Table({ players, cards }) {
    // gameParser(players, cards)

    let tcards = [card['SA'], card['SA'], card['SA'], card['SA'], card['SA'],]

    let split = [card['S3']]
    // console.log('dsfasdfasdfsadfdsafdas', cards.cards)
    const selectedPlayerCards = cards.cards.filter(card => card.player === "1").map(card => card.card);
    let test = selectedPlayerCards.map(key => card[key]);

    console.log('d', cards.cards)
    console.log('deal', selectedPlayerCards)

    return (
        <div className='table-cloth'>
            <div className='area-1'>
                <div className='card-cont'>
                    <CardStack cards={test} hole={card['Back']} />
                </div>
            </div>
            <div className='area-2'>
                <PlayerCards cards={tcards} split={split} />
            </div>
            <div className='area-3'>
                {Number(players) >= 2 ? <div>
                    <PlayerCards cards={tcards} split={split} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-4'>
                {Number(players) >= 3 ? <div>
                    <PlayerCards cards={tcards} split={split} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-5'>
                {Number(players) >= 4 ? <div>
                    <PlayerCards cards={tcards} split={split} />
                </div> : <EmptyCard />}
            </div>
        </div>
    )
}
