import * as React from "react";
import VotingCardsGrid from "../../layouts/VotingCardsGrid";
import VotingCardsList from "../../layouts/VotingCardsList";
import { getCelebrities } from "../../utils/api";
import VotingCard from "../VotingCard";
import VotingCardContentHeading from "../VotingCardContentHeading";
import "./styles.css"

const VotingCardsContent = () => {
    const [viewStyle, setViewStyle] = React.useState<"list" | "grid">("grid")
    const celebrities = getCelebrities()

    const renderCelebritiesCards =
        celebrities.map(celebrity =>
            <VotingCard celebrity={celebrity} showAs={viewStyle === 'grid' ? 'square' : 'long-rectangle'} />)

    return (
        <div className="voting-cards__container">
            <VotingCardContentHeading onChange={setViewStyle} />
            {
                viewStyle === "grid" ?
                    <VotingCardsGrid>
                        {renderCelebritiesCards}
                    </VotingCardsGrid> :
                    <VotingCardsList>
                        {renderCelebritiesCards}
                    </VotingCardsList>
            }
        </div>
    )
}

export default VotingCardsContent;
