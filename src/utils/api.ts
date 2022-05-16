import celebrities from "../assets/data.json";
import { ICelebrity } from "../types/celebrity";
import { imagesMap } from "./images";

const itemStorageName = "celebrities"

/**
 * Takes the celebrities from localstore or from json
 * and maps it into a new array with some extras attribute
 */
export const getCelebrities = (): Array<ICelebrity> => {
    const data = getCelebritiesFromLocalStorageOrResources()
    return data.map(celebrity => {
        return {
            ...celebrity,
            picture: imagesMap[celebrity.name],
            overallVotesResult: celebrity.votes.positive > celebrity.votes.negative
        }
    });
}

/**
 * Store a vote 
 * @param celebrity celebrity to modify
 * @param approved vote value true (positive) false (negative)
 */
export const emitVote = (celebrity: ICelebrity, approved: boolean): Array<ICelebrity> | undefined => {
    const data  = getCelebrities()
    const indexOfCelebrity = data.findIndex(celeb => celeb.name === celebrity.name)

    if(indexOfCelebrity !== -1){
        data[indexOfCelebrity] = {
            ...celebrity, 
            votes: {
                positive: celebrity.votes.positive + (approved ? 1 : 0), 
                negative: celebrity.votes.negative + (!approved ? 1 : 0)
            }
        } 
        localStorage.setItem(itemStorageName, JSON.stringify(data))

        return data
    }
}

/**
 * Checks when retrieves data from local storage or json file
 */
const getCelebritiesFromLocalStorageOrResources = (): Array<ICelebrity> => {
    const exitingCelebritiesData = localStorage.getItem(itemStorageName)

    return (exitingCelebritiesData === null) ? celebrities.data
        : JSON.parse(exitingCelebritiesData) as Array<ICelebrity>
}


