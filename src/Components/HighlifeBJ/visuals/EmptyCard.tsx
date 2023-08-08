import { card } from "./Cards"

export default function EmptyCard(){
    return(
        <div style={{position: 'relative', bottom: '5rem', left: '7.5rem', filter: 'brightness(0.1) opacity(0.4)' }}>
            {card['Back']}
        </div>
    )
}