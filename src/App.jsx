import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <BrowserRouter>
      <Routes> 
        <Route index element = {<Home></Home>} ></Route>  
        <Route index element = {<NotFound></NotFound>} ></Route>
      </Routes> 
     </BrowserRouter>
    
    </>
  )
}

export default App
