import * as React from 'react';
import VotingCard from '../VotingCard';
import "./styles.css"

const VotingCardsList = () => {
    return (
        <div className='voting-list__container'>
            <VotingCard showAs='long-rectangle' />
            <VotingCard showAs='long-rectangle' />
            <VotingCard showAs='long-rectangle' />
            <VotingCard showAs='long-rectangle' />
            <VotingCard showAs='long-rectangle' />
            <VotingCard showAs='long-rectangle' />
        </div>
    )
}

export default VotingCardsList;
