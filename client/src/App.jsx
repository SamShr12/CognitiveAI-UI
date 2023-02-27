import { Routes, Route } from "react-router-dom"
import { Default, Home } from "./components"

function App() {

  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main" element={<Default />} />
        </Routes>
    </div>
  )
}

export default App
