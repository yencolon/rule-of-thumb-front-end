
import { render } from '../../tests/testUtils'
import Nav from './index'

test('nav should render',() => {
    const { baseElement } = render(<Nav />)
    expect(baseElement).toBeTruthy()
})