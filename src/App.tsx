import { useState } from 'react'
import './App.css'
import SecondFetchExampleAxios from './Components/SecondFetchExampleAxios/SecondFetchExampleAxios'
import ThirdFetchHook from './Components/ThirdFetchHook/ThirdFetchHook'
// import FirstFetchExample from './Components/FirstFetchExample/FirstFetchExample'

function App() {
  const [repositories, setRepositories] = useState([])

  return (
    <>
      <header className="top_bar">       
        API Fetch Trainning
      </header>
      <div className="container">
        {/* <FirstFetchExample/> 
        <SecondFetchExampleAxios/> */}
        <ThirdFetchHook/>
      </div>
    </>
  )
}

export default App
