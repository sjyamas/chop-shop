export default function cardsReducer(games, action) {
    switch (action.type) {
        case 'addGame': {
            return [
                ...games,
                {
                    gameId: action.gameId,
                    players: action.players,
                    actions: [],
                    cardsList: [{ player: 0, cards: [], split: [] }, { player: 1, cards: [], split: [] }, { player: 2, cards: [], split: [] }]
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
            let curGame = games[games.length - 1]
            let playerIndex = curGame.cardsList.findIndex(player => player.player === action.player);

            let actionType = action.action

            if (curGame.actions.length > 0 && (['split', 'splitInitSplit', 'splitInitMain', 'splitMain', 'splitSplit', 'splitMainStand'].includes(curGame.actions[curGame.actions.length - 1].action))) { //['split', 'splitInitsplit', 'splitInitMain', 'splitMain', 'splitSplit'].includes(curGame.actions[curGame.actions.length - 1].action
                if ((curGame.actions[curGame.actions.length - 1].action === 'split')) {
                    curGame.cardsList[playerIndex].cards.push(action.card)
                    actionType = 'splitInitMain'
                } else {
                    if (curGame.actions[curGame.actions.length - 1].action === 'splitInitMain') {
                        curGame.cardsList[playerIndex].split.push(action.card)
                        actionType = 'splitInitSplit'
                    }
                    else {
                        if (action.action === 'stand') {
                            if (curGame.actions[curGame.actions.length - 1].action === 'splitMain' || curGame.actions[curGame.actions.length - 1].action === 'splitInitSplit') {
                                curGame.cardsList[playerIndex].cards.push(action.card)
                                actionType = 'splitMainStand'
                            } else {
                                if (curGame.actions[curGame.actions.length - 1].action === 'splitMainStand' || curGame.actions[curGame.actions.length - 1].action === 'splitSplit') {
                                    curGame.cardsList[playerIndex].split.push(action.card)
                                    actionType = 'splitSplitStand'
                                }
                            }
                        } else {
                            if (curGame.actions[curGame.actions.length - 1].action === 'splitMain' || curGame.actions[curGame.actions.length - 1].action === 'splitInitSplit') {
                                curGame.cardsList[playerIndex].cards.push(action.card)
                                actionType = 'splitMain'
                            } else {
                                if (curGame.actions[curGame.actions.length - 1].action === 'splitMainStand' || curGame.actions[curGame.actions.length - 1].action === 'splitSplit') {
                                    curGame.cardsList[playerIndex].split.push(action.card)
                                    actionType = 'splitSplit'
                                }
                            }
                        }
                    }
                }
            }
            else {
                curGame.cardsList[playerIndex].cards.push(action.card) //stand pushes null
            }


            if (curGame.cardsList[curGame.cardsList.length - 1].cards.length >= 2 && curGame.cardsList[curGame.cardsList.length - 1].cards[curGame.cardsList[curGame.cardsList.length - 1]] == null && action.player === 0) {
                actionType = 'dealer'
            }

            let newAction = games.map((game, i) => {
                if (i === games.length - 1) {
                    return { ...game, actions: [...game.actions, { player: action.player, action: actionType, card: action.card }], cardsList: curGame.cardsList }
                }
            });

            return newAction;
        }
        case 'removeCard': {
            let curGame = games[games.length - 1]
            let lastPlayer = curGame.actions[curGame.actions.length - 1].player
            let playerIndex = curGame.cardsList.findIndex(player => player.player === lastPlayer);

            if (curGame.cardsList[playerIndex].cards.length > 0) {
                if (['splitInitSplit', 'splitSplit', 'splitSplitStand'].includes(curGame.actions[curGame.actions.length - 1].action)) {
                    curGame.cardsList[playerIndex].split.pop()
                } else {
                    if (curGame.actions[curGame.actions.length - 1].action === 'split') {
                        curGame.cardsList[playerIndex].cards.push(curGame.cardsList[playerIndex].split[0])
                        curGame.cardsList[playerIndex].split.pop()
                    } else {
                        curGame.cardsList[playerIndex].cards.pop()
                    }
                }
            }

            let newAction = games.map((game, index) => {
                if (index === games.length - 1) {
                    const newActions = game.actions.slice(0, -1); // Remove the action
                    return { ...game, actions: newActions, cardsList: curGame.cardsList };
                }
            })

            return newAction;
        }
        case 'split': {
            let curGame = games[games.length - 1]
            let playerIndex = curGame.cardsList.findIndex(player => player.player === action.player);

            let lastCard = curGame.cardsList[playerIndex].cards.pop()
            curGame.cardsList[playerIndex].split.push(lastCard)

            let newAction = games.map((game, index) => {
                if (index === games.length - 1) {
                    return { ...game, actions: [...game.actions, { player: action.player, action: 'split' }], cardsList: curGame.cardsList };
                }
            })

            return newAction;
        }

        case 'removeGame': {
            return games.slice(0, -1);
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}