import { Routes, Route } from "react-router-dom"
import { CourseDetail, Default, Home, Profile } from "./components"

function App() {

  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main" element={<Default />} />
          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
    </div>
  )
}

export default App
