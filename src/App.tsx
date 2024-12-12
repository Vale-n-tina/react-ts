import "./App.css";
import MyDetails from "./components/MyDetails";
import MyMain from "./components/MyMain";


import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <MyNavbar />
     <Routes>
       <Route path="/"
       element={<MyMain/>}/>
       <Route path="/details/:articleid"
       element={<MyDetails/>}/>

     </Routes>
    </BrowserRouter>
 
)
}

export default App;
