import * as React from "react";
import { ICelebrity } from "../../types/celebrity";
import { calculateHowMuchTimePastFromNow } from "../../utils/dates";
import thumbUp from "../../assets/img/thumbs-up.svg"
import thumbDown from "../../assets/img/thumbs-down.svg"
import "./styles.css";
import GaugeBar from "../GaugeBar";

interface IVotingCardProps {
    showAs?: "square" | "long-rectangle",
    celebrity: ICelebrity
}

const VotingCard = ({ celebrity, showAs = "square" }: IVotingCardProps) => {
    return (
        <div className={showAs === "square" ? "voting-card__container--square" : "voting-card__container--rectangle"}>
            <img src={celebrity.picture} alt={celebrity.name} />
            {
                showAs === 'long-rectangle' && 
                <div className="voting-trend__indicator--floating" aria-label="thumbs up">
                    <img src={thumbUp} alt="thumbs down" />
                </div>
            }
            <div className={showAs === "square" ? "voting-info__container--floating" : "voting-info__container"}>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                    <div className="voting-trend__indicator" aria-label="thumbs up">
                        <img src={thumbUp} alt="thumbs down" />
                    </div>
                    <div>
                        <h2 className="voting-info__title">{celebrity.name}</h2>
                        <p className="voting-info__description--square">{celebrity.description}</p>
                    </div>
                </div>
                <div>
                    <p className="voting-buttons__time">{`about ${calculateHowMuchTimePastFromNow(celebrity.lastUpdated)} in`} <span>{celebrity.category}</span></p>
                    <div className="voting-buttons__container">
                        <button className="icon-button thumb-button_container" aria-label="thumbs up">
                            <img src={thumbUp} alt="thumbs up" />
                        </button>
                        <button className="icon-button thumb-button_container" aria-label="thumbs down">
                            <img src={thumbDown} alt="thumbs down" />
                        </button>
                        <button className="voting_button_container">
                            Vote Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="gauge-bar__container">
                <GaugeBar positiveVotes={celebrity.votes.positive} negativeVotes={celebrity.votes.negative}/>
            </div>
        </div>
    )
}

export default VotingCard;
