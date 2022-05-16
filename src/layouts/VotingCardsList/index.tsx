import * as React from 'react';
import "./styles.css"


interface IVotingCardsListProps {
    children?: React.ReactNode
}


const VotingCardsList = ({children}: IVotingCardsListProps) => {
    return (
        <div className='voting-list__container'>
            {children}
        </div>
    )
}

export default VotingCardsList;
