import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

import Navagationbar from "./components/navbar";
import Destination from "./components/destination/destination";
import Crew from "./components/crew/crew";

function App() {
  /*   //const [lotfy,setLotfy] = useState([]);
  const [get, setGet] = useState(0);
  const [lotfy, setLotfy] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tasks")
      .then((data) => setLotfy(data.data.tasks));
  }, [get, lotfy]);
  /* useEffect(()=>{
    console.log(lotfy)
  },[lotfy]) */

  return (
    <BrowserRouter>
      <Navagationbar />
      <Routes>
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
