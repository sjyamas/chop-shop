import './Table.css'

import CardStack from './CardStack'
import PlayerCards from './PlayerCards'

import { card } from './Cards'

import EmptyCard from './EmptyCard'

export default function Table({ players }) {
    let cards = [card['SA'],card['SA'],card['SA'],card['SA'],card['SA'],]

    let split = [card['S3']]
    return (
        <div className='table-cloth'>
            <div className='area-1'>
                <div className='card-cont'>
                    <CardStack />
                </div>
            </div>
            <div className='area-2'>
                <PlayerCards cards={cards} split={split}/>
            </div>
            <div className='area-3'>
                {Number(players) >= 2 ? <div>
                    <PlayerCards cards={cards} split={split} />
                </div> : <EmptyCard />}
            </div>
            <div className='area-4'>
                {Number(players) >= 3 ? <div>
                    <PlayerCards cards={cards} split={split}/>
                </div> : <EmptyCard />}
            </div>
            <div className='area-5'>
                {Number(players) >= 4 ? <div>
                    <PlayerCards cards={cards} split={split}/>
                </div> : <EmptyCard />}
            </div>
        </div>
    )
}