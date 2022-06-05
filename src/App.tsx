import {
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./app.css";
import Header from "./components/Header/Header";
import Search from "./features/Search/Search";
import ShowDetails from "./features/Shows/ShowDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="shows/:id" element={<ShowDetails />} />
        <Route path="*" element={<Search />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
