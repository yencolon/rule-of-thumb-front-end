import celebrities from "../assets/data.json";
import { ICelebrity } from "../types/celebrity";
import { imagesMap } from "./images";

export const getCelebrities = () => {
    const data: Array<ICelebrity> = celebrities.data;
    return data.map(celebrity => {
        return {
            ...celebrity, 
            picture: imagesMap[celebrity.name]
        }
    });
}

