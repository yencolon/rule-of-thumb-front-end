import * as React from "react";
import { ICelebrity } from "../../types/celebrity";
import { calculateHowMuchTimePastFromNow } from "../../utils/dates";
import thumbUp from "../../assets/img/thumbs-up.svg"
import thumbDown from "../../assets/img/thumbs-down.svg"
import "./styles.css";
import GaugeBar from "../GaugeBar";
import { emitVote } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setCelebrities } from "../../redux/celebritiesSlice";

interface IVotingCardProps {
    showAs?: "square" | "long-rectangle",
    celebrity: ICelebrity
}

const VotingCard = ({ celebrity, showAs = "square" }: IVotingCardProps) => {

    // This hook defines 3 possibles states
    // waiting - user has not click any thumb button, so vote button is disabled 
    // ready - user clicked on some thumb button, so vote button is enabled
    // emitted - is this state, vote has been emitted and the user can vote again 
    const [readyToVote, setReadyToVote] = React.useState<"waiting" | "ready" | "emitted">("waiting")
    const [voteToCast, setVoteToCast] = React.useState(true)
    const dispatch = useDispatch()
    
    const overallResult = celebrity.overallVotesResult ? "thumbs up" : "thumbs down"
    const overallResultIcon = celebrity.overallVotesResult ? thumbUp : thumbDown

    const onStartVoting = (approved: boolean) => {
        setReadyToVote('ready')
        setVoteToCast(approved)
    }

    const onVote = () => {
        if (readyToVote === 'emitted')
            setReadyToVote('waiting')
        else {
            const result = emitVote(celebrity, voteToCast)
            setReadyToVote('emitted')
            if(result) dispatch(setCelebrities(result))
        }
    }

    return (
        <div className={showAs === "square" ? "voting-card__container--square" : "voting-card__container--rectangle"}>
            <img src={celebrity.picture} alt={celebrity.name} />
            {
                showAs === 'long-rectangle' &&
                <div className="voting-trend__indicator--floating" aria-label={overallResult}>
                    <img src={overallResultIcon} alt={overallResult} />
                </div>
            }
            <div className={showAs === "square" ? "voting-info__container--floating" : "voting-info__container"}>
                <div className="voting-info_heading">
                    <div>
                        {
                            showAs === 'square' &&
                            <div className="voting-trend__indicator" aria-label={overallResult}>
                                <img src={overallResultIcon} alt={overallResult} />
                            </div>
                        }
                    </div>
                    <div>
                        <h2 className="voting-info__title">{celebrity.name}</h2>
                        <p className="voting-info__description">{celebrity.description}</p> 
                    </div>
                </div>
                <div className="voting-section_container">
                    <p className="voting-buttons__time">
                        {
                            readyToVote === 'emitted' ? "Thank you for your vote!" :
                                `about ${calculateHowMuchTimePastFromNow(celebrity.lastUpdated)} in ${celebrity.category}`
                        }
                    </p>
                    <div className="voting-buttons__container">
                        {readyToVote !== 'emitted' &&
                            <>
                                <button
                                    onClick={() => onStartVoting(true)}
                                    className="icon-button thumb-button_container"
                                    aria-label="thumbs up">
                                    <img src={thumbUp} alt="thumbs up" />
                                </button>
                                <button
                                    onClick={() => onStartVoting(false)}
                                    className="icon-button thumb-button_container"
                                    aria-label="thumbs down">
                                    <img src={thumbDown} alt="thumbs down" />
                                </button>
                            </>
                        }
                        <button
                            className="voting_button_container"
                            disabled={readyToVote === 'waiting'}
                            onClick={onVote}>
                            {
                                readyToVote === 'waiting' || readyToVote === 'ready' ? "Vote Now" : "Vote Again"
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div className={showAs === 'long-rectangle' ? 'gauge-bar__container--floating--list' : 'gauge-bar__container--floating'}>
                <GaugeBar positiveVotes={celebrity.votes.positive} negativeVotes={celebrity.votes.negative} />
            </div>
        </div>
    )
}

export default VotingCard;
