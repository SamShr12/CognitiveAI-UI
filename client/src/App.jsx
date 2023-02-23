import { Routes, Route } from "react-router-dom"
import { Home } from "./components"

function App() {

  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App
