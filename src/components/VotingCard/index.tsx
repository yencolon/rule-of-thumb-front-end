import * as React from 'react';
import { ICelebrity } from '../../types/celebrity';
import "./styles.css";

interface IVotingCardProps {
    showAs?: 'square' | 'long-rectangle',
    celebrity: ICelebrity
}

const VotingCard = ({ celebrity, showAs = 'square' }: IVotingCardProps) => {
    return (
        <div className={showAs === 'square' ? 'voting-card__squared': 'voting-card__long_rectangle'}>
            <img src={celebrity.picture} alt={celebrity.name} />
        </div>
    )
}

export default VotingCard;
