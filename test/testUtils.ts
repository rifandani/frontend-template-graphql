import { render } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"

const Providers = ({ children }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //       {children}
  //   </ThemeProvider>
  // )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
