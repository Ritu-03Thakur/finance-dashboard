import { Box } from "@mui/material"
import { BrowserRouter  , Routes , Route } from "react-router-dom" ; 
import Navbar from "@/scenes/navbar" ; 
import DashBoard from "@/scenes/dashboard" ; 
import Predictions from "@/scenes/predictions";

function App() {
  return (
    <>

      <div className="app">
      <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element= {<DashBoard />}/>
          <Route path="/predictions" element= {<Predictions />}/>
        </Routes>
      </Box>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
