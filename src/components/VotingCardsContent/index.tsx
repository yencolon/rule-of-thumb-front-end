import * as React from "react";
import VotingCardsGrid from "../VotingCardsGrid";
import VotingCardsList from "../VotingCardsList";
import VotingContentHeading from "../VotingContentHeading";
import "./styles.css"

const VotingCardsContent = () => {
    const [viewStyle, setViewStyle] = React.useState<"list" | "grid">("grid")

    return (
        <div className="voting-cards__container">
            <VotingContentHeading onChange={setViewStyle}/>
            {
                viewStyle === "grid" ? 
                <VotingCardsGrid /> :
                <VotingCardsList />
            }
        </div>
    )
}

export default VotingCardsContent;
