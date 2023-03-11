import React from "react";

import push from '../../Assets/bj-svg/push.svg'
import win from '../../Assets/bj-svg/win.svg'
import loss from '../../Assets/bj-svg/loss.svg'
import bjWin from '../../Assets/bj-svg/bj-win.svg'
import bjLoss from '../../Assets/bj-svg/bj-loss.svg'
import ddWin from '../../Assets/bj-svg/dd-win.svg'
import ddLoss from '../../Assets/bj-svg/dd-loss.svg'
import splitPushPush from '../../Assets/bj-svg/split-push-push.svg'
import splitWinLoss from '../../Assets/bj-svg/split-win-loss.svg'
import splitWinWin from '../../Assets/bj-svg/split-win-win.svg'
import splitWinPush from '../../Assets/bj-svg/split-win-push.svg'
import splitLossLoss from '../../Assets/bj-svg/split-loss-loss.svg'
import splitLossPush from '../../Assets/bj-svg/split-loss-push.svg'

let width = 80
let height = 80

export function Push(){
    return(
        <img
            src={push}
            style={{height: width, width: height}}
            alt='Push'
        />
    )
}

export function Win(){
    return(
        <img
            src={win}
            style={{height: width, width: height}}
            alt='Win'
        />
    )
}
export function Loss(){
    return(
        <img
            src={loss}
            style={{height: width, width: height}}
            alt='Loss'
        />
    )
}
export function BjWin(){
    return(
        <img
            src={bjWin}
            style={{height: width, width: height}}
            alt='Blackjack'
        />
    )
}

export function BjLoss(){
    return(
        <img
            src={bjLoss}
            style={{height: width, width: height}}
            alt='Blackjack Loss'
        />
    )
}

export function DdWin(){
    return(
        <img
            src={ddWin}
            style={{height: width, width: height}}
            alt='Double Down Win'
        />
    )
}

export function DdLoss(){
    return(
        <img
            src={ddLoss}
            style={{height: width, width: height}}
            alt='Double Down Loss'
        />
    )
}

export function SplitPushPush(){
    return(
        <img
            src={splitPushPush}
            style={{height: width, width: height}}
            alt='Split Push Push'
        />
    )
}

export function SplitWinLoss(){
    return(
        <img
            src={splitWinLoss}
            style={{height: width, width: height}}
            alt='Split Win-Loss'
        />
    )
}

export function SplitWinWin(){
    return(
        <img
            src={splitWinWin}
            style={{height: width, width: height}}
            alt='Split Win-Win'
        />
    )
}


export function SplitWinPush(){
    return(
        <img
            src={splitWinPush}
            style={{height: width, width: height}}
            alt='Split Win-Push'
        />
    )
}


export function SplitLossLoss(){
    return(
        <img
            src={splitLossLoss}
            style={{height: width, width: height}}
            alt='Split Loss-Loss'
        />
    )
}


export function SplitLossPush(){
    return(
        <img
            src={splitLossPush}
            style={{height: width, width: height}}
            alt='Split Loss-Push'
        />
    )
}