import * as React from 'react';
import "./styles.css"

interface IVotingCardsGridProps {
    children?: React.ReactNode
}

const VotingCardsGrid = ({ children }: IVotingCardsGridProps) => {
    return (
        <div className="voting-grid__container" aria-label="grid-container">
            {children}
        </div>
    )
}

export default VotingCardsGrid;
