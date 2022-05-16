
import { screen } from "@testing-library/react"
import { render } from "../../tests/testUtils"
import VotingCardContent from './'
import userEvent from "@testing-library/user-event"

test('renders celebrity content', () => {
    render(<VotingCardContent />)

    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'List' })) 
    expect(screen.getByLabelText('list-container')).toBeTruthy()
    expect(screen.queryByLabelText('grid-container')).toBeNull()
    
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Grid' })) 
    expect(screen.getByLabelText('grid-container')).toBeTruthy()
    expect(screen.queryByLabelText('list-container')).toBeNull()

})