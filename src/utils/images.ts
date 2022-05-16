import CristinaFPng from "../assets/img/cristina.png"
import ElonMPng from "../assets/img/elon.png"
import GretaTPng from "../assets/img/greta.png"
import KanyeWPng from "../assets/img/kanye.png"
import MalalaYPng from "../assets/img/malala.png"
import MarkZPng from "../assets/img/mark.png"

type ImagesMap = { [key: string]: string }

/**
 * Map of exiting images
 */
export const imagesMap: ImagesMap  = {
    "Cristina Fernández de Kirchner": CristinaFPng,
    "Elon Musk": ElonMPng,
    "Greta Thumberg": GretaTPng,
    "Kanye West": KanyeWPng,
    "Malala Yousafzai": MalalaYPng,
    "Mark Zuckerberg": MarkZPng
}