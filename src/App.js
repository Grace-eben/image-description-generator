import "./App.css"
import Landing from "./pages/Landing";
import {Routes,Route} from "react-router-dom"
import UploadImage from "./pages/UploadImage";

function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Landing/>}  exact />
      <Route path="/uploadimage" element={<UploadImage/>}  />
      </Routes>
    
    </div>
  );
}

export default App;
