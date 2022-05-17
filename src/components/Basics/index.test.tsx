import { render } from "../../tests/testUtils"
import BeCountedAlert from "./BeCountedAlert"
import Footer from "./Footer"
import SubmitName from "./SubmitName"

test('footer component should render',() => {
    const { baseElement } = render(<Footer />)
    expect(baseElement).toBeTruthy()
})

test('beCountedAlert component should render',() => {
    const { baseElement } = render(<BeCountedAlert />)
    expect(baseElement).toBeTruthy()
})


test('submitName component should render',() => {
    const { baseElement } = render(<SubmitName />)
    expect(baseElement).toBeTruthy()
})
