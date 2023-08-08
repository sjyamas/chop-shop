export default function cardsReducer(games, action) {
    switch (action.type) {
        case 'addGame': {
            return [
                ...games,
                {
                    gameId: action.gameId,
                    players: action.players,
                    cards: [],
                    results: []
                },
            ];
        }
        case 'player': {
            return games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, players: action.players}
                }
            });
        }
        case 'addCard': {
            return games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, cards: [...game.cards, action.obj] }
                }
            });
        }
        case 'removeCard': {
            return games.map((game, index) => {
                if (index === games.length - 1) {
                    const newCards = game.cards.slice(0, -1); // Remove the last card
                    return { ...game, cards: newCards };
                }
            })
        }
        case 'removeGame': {
            return games.slice(0, -1);
        }
        // case 'finishGame': {
        //     return games.map((game, i) => {
        //         if (i === games.length - 1) {
        //             return { ...game, results:  }
        //         }
        //     });
        // }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
