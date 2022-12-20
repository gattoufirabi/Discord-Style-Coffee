import './App.css';
import SideBar from './SideBar';
import styled from 'styled-components'
import BarSecond from './BarSecond';
function App() {
  return (
    <Container>
      <SideBar />
      <BarSecond />
    </Container>
  );
}
const Container = styled.div``;
export default App;
