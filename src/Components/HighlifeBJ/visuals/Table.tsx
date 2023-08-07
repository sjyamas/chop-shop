import './Table.css'

import CardStack from './CardStack'

import { Back, CA, SA } from './Cards'

export default function Table() {
    return (
        <div className='table-cloth'>
            <div className='area-1'>
                <div className='card-cont'>
                    <CardStack/>
                </div>
                <div className='card-cont'>
                    <Back size={'%40'} />
                </div>
            </div>
            <div className='area-2'>
                
            </div>
            <div className='area-3'>

            </div>
            <div className='area-4'>

            </div>
            <div className='area-5'>

            </div>
        </div>
    )
}