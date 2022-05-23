import './App.css';
import { UserList } from './components/userList';
import { OrderList } from './components/orderList';
import { useState } from 'react';
const App=()=> {
  const[display,setDisplay]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <button className='button' onClick={()=>setDisplay(1)}>Utenti</button>
          <button className='button' onClick={()=>setDisplay(2)}>Commesse</button>
        </div>
        { display==1 && (<UserList/>) }
        { display==2 && (<OrderList/>) }
      </header>
    </div>
  );
}


export default App;

