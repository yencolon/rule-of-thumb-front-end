
export interface ICelebrity {
    name: string,
    description: string, 
    category: string, 
    picture: string, 
    lastUpdated: string,
    overallVotesResult?: boolean, // Valor que dice si es lo votos son mas positivo o negativos. 
    votes: {
        positive: number, 
        negative: number
    }
}
