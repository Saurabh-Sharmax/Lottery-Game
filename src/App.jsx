import './App.css';
import Lottery from './Lottery';



function App(){
  let winCondition = (ticket)=>{
    return ticket [0] ===0;
  }
  return (
    <>
<Lottery n={3} winCondition={winCondition}></Lottery>
    </>
  )
}
export default App;
