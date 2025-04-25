import styled from 'styled-components'

export function App() {

  const Div = styled.div`
color: blue;
`

  return (
    <>
      <div>Hello</div>
      <Div>Hello</Div>
      <i className="fa fa-address-book" aria-hidden="true" />
      <i className="fa fa-free-code-camp" aria-hidden="true" style={{ fontSize: '48px', color: 'orangered' }} />

    </>
  )
}


