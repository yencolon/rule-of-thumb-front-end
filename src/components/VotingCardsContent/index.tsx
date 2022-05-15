import * as React from 'react';
import VotingCardsGrid from '../VotingCardsGrid';
import VotingCardsList from '../VotingCardsList';
import "./styles.css"

const VotingCardsContent = () => {
    const viewStyle: string = "list"
    return (
        <div className='voting-cards__container'>
            {
                viewStyle === "grid" ? 
                <VotingCardsGrid /> :
                <VotingCardsList />
            }
        </div>
    )
}

export default VotingCardsContent;
