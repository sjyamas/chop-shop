import { card } from "./Cards"

export default function EmptyCard(){
    return(
        <div style={{position: 'relative', bottom: '5rem'}}>
            {card['Back']}
        </div>
    )
}