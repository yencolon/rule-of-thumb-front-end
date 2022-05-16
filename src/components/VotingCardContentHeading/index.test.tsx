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


test('select options works', () => {
    render(<VotingCardContentHeading />)
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'List' }))
    expect(screen.getByRole('option', { name: 'List' }).selected).toBe(true)
    expect(screen.getByRole('option', { name: 'Grid' }).selected).toBe(false)
})