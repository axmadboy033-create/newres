import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Main from './Components/Main/Main'
import Main1 from './Components/Main1/Main1'
import Main2 from './Components/Main2/Main2'
import Main3 from './Components/Main3/Main3'
import Main4 from './Components/Main4/Main4'
import Main5 from './Components/Main5/Main5'
import Card from './Components/Card/Card'

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <Main />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Card />
    </div>
  )
}

export default App