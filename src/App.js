// React component testing
// jest-dom library provides utilities for perform react testing
// to install jest
// npm install jest-environment-jsdom --save-dev
// npm install --save-dev @testing-library/jest-dom
// npm install --save-dev @testing-library/react
// command to run test: npm test
// common imports for Jest library
// import {render , screen, fireEvent, render} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

import './App.css'
import Counter from './Counter'

function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <p>learn react</p>
    </div>
  )
}

export default App
