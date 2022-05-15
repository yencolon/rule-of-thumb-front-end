import * as React from 'react';
import { ICelebrity } from '../../types/celebrity';
import { calculateHowMuchTimePastFromNow } from '../../utils/dates';
import "./styles.css";

interface IVotingCardProps {
    showAs?: 'square' | 'long-rectangle',
    celebrity: ICelebrity
}

const VotingCard = ({ celebrity, showAs = 'square' }: IVotingCardProps) => {
    return (
        <div className={showAs === 'square' ? 'voting-card__container': 'voting-card__container--gradient'}>
            <img src={celebrity.picture} alt={celebrity.name} />
            <div className="voting-info__container">
                <h2>{celebrity.name}</h2>
                <p>{celebrity.description}</p>
                <p>{`about ${calculateHowMuchTimePastFromNow(celebrity.lastUpdated)} in`} <span>{celebrity.category}</span></p>
            </div>
        </div>
    )
}

export default VotingCard;
