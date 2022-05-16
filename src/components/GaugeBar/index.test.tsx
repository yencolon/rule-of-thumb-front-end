import { screen } from "@testing-library/react"
import { render } from "../../tests/testUtils"
import GaugeBar from "./index"

test('gauge bar renders percentage according to props', () => {
    render(<GaugeBar positiveVotes={200} negativeVotes={800}/>)

    expect(screen.getByLabelText('positive-votes')).toHaveStyle({ width: '20%'})
    expect(screen.getByLabelText('negative-votes')).toHaveStyle({ width: '80%'})

})