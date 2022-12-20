import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import SideBar from './components/SideBar';
import BarSecond from './components/BarSecond';
import SecondView from './pages/SecondView'
import MainView from './pages/MainView'


function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <BarSecond />
      <Routes>
        <Route exact path="/MainView" element={<MainView />} />
        <Route exact path="/SecondView" element={<SecondView />} />
      </Routes>
    </BrowserRouter>


  );
}
export default App;
