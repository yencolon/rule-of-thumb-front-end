/**
 * Funcion que recibe un fecha en formato string 
 * y devuelve la cantidad de tiempo que ha pasado desde entonces
 * @param date string, en formato ISO YYYY/MM/DD HH:MM:SS
 */
export const calculateHowMuchTimePastFromNow = (date: string): string => {
    const initialDate = new Date(date).getTime()
    const finalDate = Date.now()

    return getHumanTime(finalDate - initialDate);
}

/**
 * Función simple, que dada la resta de dos fechas, devuelve el  tiempo relativo que ha
 * transcurrido en un formato [cantidad] [unidad]
 * @param timestamp number, fechaInicial - fechaFinal
 * @returns string con el tiempo que ha pasado
 */
const getHumanTime = (timestamp: number): string => {
    // Convert to a positive integer
    const time = Math.abs(timestamp);
    // Define humanTime and units
    let humanTime: number;
    let units: string;

    // If there are years
    if (time > (1000 * 60 * 60 * 24 * 365)) {
        humanTime = time / (1000 * 60 * 60 * 24 * 365);
        units =  humanTime >= 2 ? "years" : "year"
    }

    // If there are months
    else if (time > (1000 * 60 * 60 * 24 * 30)) {
        humanTime =time / (1000 * 60 * 60 * 24 * 30)
        units =  humanTime >= 2 ? "months": "month"
    }

    // If there are weeks
    else if (time > (1000 * 60 * 60 * 24 * 7)) {
        humanTime = time / (1000 * 60 * 60 * 24 * 7)
        units =  humanTime >= 2 ? "weeks" : "week"
    }

    // If there are days
    else if (time > (1000 * 60 * 60 * 24)) {
        humanTime = time / (1000 * 60 * 60 * 24)
        units =  humanTime >= 2 ? "days": "day"
    }

    // If there are hours
    else if (time > (1000 * 60 * 60)) {
        humanTime = time / (1000 * 60 * 60)
        units =  humanTime >= 2 ? "hours" : "hour"
    }

    // If there are minutes
    else if (time > (1000 * 60)) {
        humanTime = time / (1000 * 60)
        units = humanTime >= 2 ? "minutes" : "minute"
    }

    // Otherwise, use seconds
    else {
        humanTime = time / (1000)
        units = humanTime >= 2 ? "seconds" : "second"
    }

    return Math.trunc(humanTime) + " " + units;
};
