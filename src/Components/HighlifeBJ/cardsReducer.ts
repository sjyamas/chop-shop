export default function cardsReducer(games, action) {
    switch (action.type) {
        case 'addGame': {
            return [
                ...games,
                {
                    gameId: action.gameId,
                    players: action.players,
                    actions: [],
                    cardsList: []
                },
            ];
        }
        case 'player': {
            let tempCards = []

            for (let i = 0; i <= action.players; i++) {
                tempCards.push({ player: i, cards: [], split: [] })
            }

            let newPlayer = games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, players: action.players, cardsList: tempCards }
                }
            });

            return newPlayer;
        }
        case 'addCard': {
            let curCards = games[games.length - 1].cardsList
            let playerIndex = curCards.findIndex(player => player.player === action.player);

            curCards[playerIndex].cards.push(action.card) //stand pushes null

            let newAction = games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, actions: [...game.actions, {player: action.player, action: action.action, card: action.card }], cardsList: curCards }
                }
            });

            return newAction;
        }
        case 'removeCard': {
            let curGame = games[games.length - 1]
            let lastPlayer = curGame.actions[curGame.actions.length - 1].player
            let playerIndex = curGame.cardsList.findIndex(player => player.player === lastPlayer);

            if(curGame.cardsList[playerIndex].cards.length > 0 && curGame.actions[curGame.actions.length - 1].action !== 'stand'){
                curGame.cardsList[playerIndex].cards.pop()
            }

            let newAction = games.map((game, index) => {
                if (index === games.length - 1) {
                    const newActions = game.actions.slice(0, -1); // Remove the last card
                    return { ...game, actions: newActions, cardsList: curGame.cardsList};
                }
            })

            return newAction;
        }
        case 'split' : {
            let curGame = games[games.length - 1]
            let lastPlayer = curGame.actions[curGame.actions.length - 1].player
            let playerIndex = curGame.cardsList.findIndex(player => player.player === lastPlayer);

            let lastCard = curGame.cardsList[playerIndex].cards.pop()
            curGame.cardsList[playerIndex].split.push(lastCard)
            
            let newAction = games.map((game, index) => {
                if (index === games.length - 1) {
                    return { ...game, actions: [...game.actions, {player: lastPlayer, action: 'split' }],cardsList: curGame.cardsList};
                }
            })

            return newAction;
        }
        case 'addSplit' : {
            let curGame = games[games.length - 1]
            let lastPlayer = curGame.actions[curGame.actions.length - 1].player
            let playerIndex = curGame.cardsList.findIndex(player => player.player === lastPlayer);

            let actionType = ''
            
            if((curGame.cardsList[playerIndex].cards.length === 1 || curGame.cardsList[playerIndex].split.length === 2) && curGame.cardsList[playerIndex].cards[curGame.cardsList[playerIndex].cards.length-1]!= null){
                curGame.cardsList[playerIndex].cards.push(action.card)
                if(curGame.cardsList[playerIndex].cards.length === 2){
                    actionType = 'splitInitMain'
                } else {
                    actionType = 'splitMain'
                }
            }
            else {
                curGame.cardsList[playerIndex].split.push(action.card)
                if(curGame.cardsList[playerIndex].cards[curGame.cardsList[playerIndex].cards.length-1] != null){
                    actionType = 'splitInitSplit'
                } else {
                    actionType = 'splitSplit'
                }
            }

            let newAction = games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, actions: [...game.actions, {player: lastPlayer, action: actionType, card: action.card }], cardsList: curGame.cardsList }
                }
            });

            return newAction;
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
