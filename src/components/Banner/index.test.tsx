
import { render } from '../../tests/testUtils'
import Banner from './index'

test('banner should render',() => {
    const { baseElement } = render(<Banner />)
    expect(baseElement).toBeTruthy()
})