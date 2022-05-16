import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import VotingCardsGrid from "../../layouts/VotingCardsGrid";
import VotingCardsList from "../../layouts/VotingCardsList";
import { setCelebrities } from "../../redux/celebritiesSlice";
import { RootState } from "../../redux/store";
import { getCelebrities } from "../../utils/api";
import VotingCard from "../VotingCard";
import VotingCardContentHeading from "../VotingCardContentHeading";
import "./styles.css"

const VotingCardsContent = () => {
    const [viewStyle, setViewStyle] = React.useState<"list" | "grid">("grid")
    const celebrities = useSelector((state: RootState) => state.celebritiesReducer.celebritiesList)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setCelebrities(getCelebrities()))
    }, [dispatch])

    const renderCelebritiesCards =
        celebrities.map(celebrity =>
            <VotingCard key={celebrity.name} celebrity={celebrity} showAs={viewStyle === 'grid' ? 'square' : 'long-rectangle'} />)

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
