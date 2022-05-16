import * as React from 'react';
import "./styles.css"

interface IVotingCardsListProps {
    children?: React.ReactNode
}

const VotingCardsList = ({children}: IVotingCardsListProps) => {
    return (
        <div className='voting__container' aria-label="list-container">
            {children}
        </div>
    )
}

export default VotingCardsList;
