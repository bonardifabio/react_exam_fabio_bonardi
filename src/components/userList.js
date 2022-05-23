import { useEffect,useState ,useMemo} from 'react';
import { getUserList } from '../api';
//import { CoinRow } from './coinRow';
export const UserList=({})=> {
    const[users,setUsers]=useState([]);
    //const[search,setSearch]=useState('');
    useEffect(()=>{
      refreshData()
    }, [])
  const refreshData=async()=>{
    const userList=await getUserList()
    console.log(userList);
    setUsers(userList)
  }
  console.log({users});
  return (
        <div className='user-list'>
            <div>
            {users && users.map(user =>
                        <div key={user.id}>
                            <p>nome: {user.name ? user.name : "nome"}</p>
                            <p>cognome: {user.surname ? user.surname : "cognome"}</p>
                            <p>ruolo: {user.role ? user.role : "role"}</p>
                            <hr></hr>
                        </div>
                    )}
            </div>
        </div>
    );
}