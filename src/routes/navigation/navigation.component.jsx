import { Fragment,useContext } from 'react';
import { Outlet, Link ,useNavigate} from 'react-router-dom';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import {ReactComponent as CrwnLogo} from '../../assets/CrwnLogo.svg'
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import SwipeableTemporaryDrawer from '../../component/drawer/drawer'


import './navigation.styles.scss'

const Navigation = () => {
  const Navigate =  useNavigate()


  const {currentUser}=useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  const logOut = ()=>{
    signOutUser()
    localStorage.removeItem("username");
    Navigate('/')

  }
  // console.log("in nav ",currentUser)
  // console.log("This is the current user in navbar", currentUser)

  // const signOutHandler = async()=>{
  //   const res = signOutUser()
  //   setCurrentUser(null)
  // console.log("you are signout ", currentUser)

  // }


  return (
    <Fragment>
      <div className='navigation border border-yellow-400 bg-slate-50'  >
        <Link className='logo-container' to='/home'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          {/* <SwipeableTemporaryDrawer/> */}
        <Link className=' text-gray-600 font-semibold hover:text-blue-400 mr-3' to='/home'>
        HOME
          </Link>
          <Link className=' text-gray-600 font-semibold hover:text-blue-400' to='/shop'>
            SHOP
          </Link>
            {
              currentUser ? (<span className='text-gray-600 font-semibold nav-link hover:text-blue-400' onClick={logOut}>SIGN OUT</span>):null
          // <Link className='nav-link' to='/signup'>
          //   SIGN IN
          // </Link>
            }

            <CartIcon />

        </div>
      {isCartOpen &&  <CartDropdown/>}


      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;