import { Routes, Route } from "react-router-dom"
import { CourseDetail, Default, Home, Login, Profile, Register, SolveQues } from "./components"

function App() {

  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main" element={<Default />} />
          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/s1" element={<SolveQues />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
