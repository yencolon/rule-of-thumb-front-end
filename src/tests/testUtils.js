// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import celebritiesReducer from '../redux/celebritiesSlice'

/**
 *  Boilerplate to test components that use on redux 
 */
function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                celebritiesReducer
            }, preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }