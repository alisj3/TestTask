import { Home } from "./pages/Home"
import './styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes} from "react-router-dom"
import { ProfilePage } from "./pages/ProfilePage";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </>
  )
}

export default App
