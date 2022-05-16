import { screen } from '@testing-library/react'
import { render } from "../../tests/testUtils"
import VotingCardContentHeading from "."
import userEvent from '@testing-library/user-event';

test('renders two options', () => {
    render(<VotingCardContentHeading />)
    expect(screen.getAllByRole('option').length).toBe(2)
})

test('options Grid and List expected in select', () => {
    render(<VotingCardContentHeading />)
    expect(screen.getByRole('option', { name: 'Grid' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'List' })).toBeInTheDocument()

})
