import { useEffect,useState ,useMemo} from 'react';
import { getOrderList } from '../api';
//import { CoinRow } from './coinRow';
export const OrderList=({})=> {
    const[orders,setOrders]=useState([]);
    //const[search,setSearch]=useState('');
    useEffect(()=>{
      refreshData()
    }, [])
  const refreshData=async()=>{
    const orderList=await getOrderList()
    console.log(orderList);
    setOrders(orderList)
  }
  console.log({orders});
  return (
        <div className='order-list'>
            <div>
            {orders && orders.map(order =>
                        <div key={order.id}>
                            <p>nome ordine: {order.displayName}</p>
                            <p>id ordine: {order.id}</p>
                            <hr></hr>
                        </div>
                    )}
            </div>
        </div>
    );
}