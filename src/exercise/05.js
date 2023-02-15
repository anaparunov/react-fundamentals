// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


function Box({ size, className = '', style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : ''
  return <div
    id='main-box'
    className={`box ${className} ${sizeClassName}`}
    style={{ fontStyle: 'italic', ...style }}
    {...otherProps}
  />
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>large box component</Box>
      <Box size="medium" style={{ backgroundColor: 'lightgreen' }}>large box component</Box>
      <Box size="large" className='box--large' style={{ backgroundColor: 'lightpink' }}>large box component</Box>

    </div>
  )
}

export default App
