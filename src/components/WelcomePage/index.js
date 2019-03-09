
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import styled from 'styled-components'
import { push } from 'hooks/useSimpleRouter'

import InfoPage from 'components/InfoPage'


const Li = styled.li`
  margin-bottom: 0.5em;
`
const A = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  color: inherit;
`
const Button = styled.button`
  background: #37A51C;
  border-radius: 0;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 0.75em 2em;
  text-transform: uppercase;
`
const Signature = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  margin-bottom: 2em;
`


function WelcomePage({
  ...otherProps
}) {
  return (
    <InfoPage
      {...otherProps}
    >
      <h3>Business Model Canvas</h3>
      <h1>Welcome!</h1>
      <p>On the next page you will have the possibility to fill out a canvas. Nothing of your data will be stored at or even sent to a server. This is great as nobody can misuse your data, but you have to take care on your own to store and reload it.</p>
      <ul>
        <Li>
          Your input is stored in the browsers <strong>local storage</strong>. This means it will persist if you reload the page or even close the browser and open it again. But it will not be available in another browser or another computer.
        </Li>
        <Li>
          You have the possibility to <strong>download your work as a simple, human readable text file</strong> (extended <A href="https://de.wikipedia.org/wiki/Markdown">markdown</A> syntax). Watch out for the &#34;Save to file&#34; button top right.
        </Li>
        <Li>
          Your can edit the text file locally (if you want to) and <strong>load it again</strong>. Watch out for the &#34;Import from file&#34; button top right.
        </Li>
        <Li>
          This page is <strong>offline enabled</strong>. This means if you loaded the page once it will persist if you loose yor internet connection. You can even navigate to the url again and it will load without connection.
        </Li>
      </ul>
      <p>I hope this canvas is useful for you &amp; I would appreciate your feedback via <A href="https://twitter.com/tobzuc">twitter</A> or <A href="https://www.linkedin.com/in/tobias-zucali-3555b388/">linkedin</A>!</p>
      <Signature>Tobias</Signature>
      <Button onClick={() => push('/canvas')}>{(localStorage.getItem('isInited')) ? 'Load canvas' : 'Create new canvas'}</Button>
    </InfoPage>
  )
}


export default WelcomePage
