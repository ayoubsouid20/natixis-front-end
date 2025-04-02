import { Outlet } from 'react-router'
import Button from '../components/buttons/Button'
import { useDispatch } from 'react-redux'
import { clearToken } from '../features/authentication/store/authenticationSlice'

const PrivateDashboard = () => {
  const dispatch = useDispatch()
  return (
   <div>
    <h1 className='welcome-title'>WELCOME TO OUR PRODUCTS</h1>
    <div className="cart-icon">
      <div className="icon">
        <i className="fa fa-shopping-cart"></i> {/* This can be any icon */}
      </div>
        <div className="cart-bubble">{5}</div>
    </div>
    <Button title='Logout' 
    clickHandler={()=> dispatch(clearToken())}
    extraStyle={{
      fontSize:15,
      width:'10%',
      position:'absolute',
      left:10,
      top:50
    }}/>

    <Outlet/>
   </div>
  )
}

export default PrivateDashboard