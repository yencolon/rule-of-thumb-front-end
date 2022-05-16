import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ICelebrity } from "../../types/celebrity"
import { render } from "../../tests/testUtils"
import VotingCard from './'

const celebrityRating: ICelebrity = {
    category: 'category',
    description: 'description',
    name: 'name',
    lastUpdated: 'lastUpdated',
    picture: 'picture',
    votes: {
        negative: 10,
        positive: 11
    },
    overallVotesResult: true
}

test('renders celebrity card with correct information', () => {

    render(<VotingCard celebrity={celebrityRating} />)

    expect(screen.getByText('name')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
})


test('thumbs buttons works and enable emit vote button', () => {
    render(<VotingCard celebrity={celebrityRating} />)

    expect(screen.getByText('Vote Now')).toBeDisabled()
    userEvent.click(screen.getByLabelText('thumbs up')) 
    expect(screen.getByText('Vote Now')).toBeEnabled()
})

