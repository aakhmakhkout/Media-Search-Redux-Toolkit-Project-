import React from 'react'

import Searchbar from './components/searchbar.jsx'
import Tabs from './components/Tabs.jsx'
import Navbar from './components/Navbar.jsx'
import ResultsGrid from './components/ResultsGrid.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
     <Searchbar />
     <Tabs />
     <ResultsGrid />
    </div>
  )
}

export default App