import * as React from 'react';
import Test from "../../assets/img/elon.png"
import "./styles.css";

interface IVotingCardProps {
    showAs?: 'square' | 'long-rectangle'
}

const VotingCard = ({ showAs = 'square' }: IVotingCardProps) => {
    return (
        <div className={showAs === 'square' ? 'voting-card__squared': 'voting-card__long_rectangle'}>
            <img src={Test} alt="ALT" />
        </div>
    )
}

export default VotingCard;
