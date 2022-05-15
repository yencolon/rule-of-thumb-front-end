import * as React from "react";
import VotingCardsGrid from "../../layouts/VotingCardsGrid";
import VotingCardsList from "../../layouts/VotingCardsList";
import VotingCardContentHeading from "../VotingCardContentHeading";
import "./styles.css"

const VotingCardsContent = () => {
    const [viewStyle, setViewStyle] = React.useState<"list" | "grid">("grid")

    return (
        <div className="voting-cards__container">
            <VotingCardContentHeading onChange={setViewStyle}/>
            {
                viewStyle === "grid" ? 
                <VotingCardsGrid /> :
                <VotingCardsList />
            }
        </div>
    )
}

export default VotingCardsContent;
