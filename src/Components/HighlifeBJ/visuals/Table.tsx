import './Table.css'

import CardStack from './CardStack'
import PlayerCards from './PlayerCards'

import { card } from './Cards'

import EmptyCard from './EmptyCard'
import { useEffect } from 'react'

export default function Table({ players, cards }) {
    // gameParser(players, cards)

    let split = []
    // let split = [card['S3']]
    // console.log('dsfasdfasdfsadfdsafdas', cards.cards)
    // const selectedPlayerCards = cards.cards.filter(card => card.player === "1").map(card => card.card).map(key => card[key]);

    let pcards = []
    let scards = []
    for(let i = 0; i <= players; i++){
        let p = 'D'
        if(i > 0){
            p = i.toString()
        }
        const cardsString = cards.cards.filter(card => card.player === p ).map(card => card.card)
        const selectedPlayerCards = cardsString.map(key => card[key]);
        pcards.push(selectedPlayerCards.filter(element => element !== undefined))

        scards.push(cardsString.filter(element => element !== undefined))
    }

    return (
        <div className='table-cloth'>
            <div className='area-1'>
                <div className='card-cont'>
                    <CardStack cards={pcards[0]} scards={scards[0]} />
                </div>
            </div>
            <div className='area-2'>
                <PlayerCards cards={pcards[1]} split={split} scards={scards[1]} />
            </div>
            <div className='area-3'>
                {Number(players) >= 2 ? <div>
                    <PlayerCards cards={pcards[2]} split={split} scards={scards[2]} />
                </div> : <EmptyCard /> }
            </div>
            <div className='area-4'>
                {Number(players) >= 3 ? <div>
                    <PlayerCards cards={pcards[3]} split={split} scards={scards[3]} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-5'>
                {Number(players) >= 4 ? <div>
                    <PlayerCards cards={pcards[4]} split={split} scards={scards[4]} />
                </div> : <EmptyCard />}
            </div>
        </div>
    )
}
