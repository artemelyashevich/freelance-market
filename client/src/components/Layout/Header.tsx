import React from 'react'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { logOut } from '../../redux/slice/authSlice'


const Header: React.FC = () => {

  const [modal, setModal] = React.useState<boolean>(false)
  const [status, setStatus] = React.useState<string>('')
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(store => store.user)

  return (
    <div className='header'>
      <div className="header__logo">
        <Link to="/">
          <img src="https://pnghq.com/wp-content/uploads/onlyfans-logo-thumbnail-transparent-png-15878-400x286.png" alt="" />
        </Link>
      </div>
      <div className="header__search">
        <input className="header__input" type="text" placeholder='Search' />
      </div>
      <div className="header__user">
        {
          !user.email || !user ? <h3>Become an Freelancer</h3> :
            <Link to="/profile">
              <div className='header__user_info'>
                <img src={user.image} alt="user" />
                <h3 style={{color: 'black'}}>{user.name}</h3>
              </div>
            </Link>
        }
      </div>
      <div className="header__auth">
        {
          !user.email || !user ?
            <div style={{ display: 'flex', columnGap: '10px' }}>
              <button onClick={() => {
                setModal(true)
                setStatus('Sign Up')
              }}>Sign Up</button>
              <button onClick={() => {
                setModal(true)
                setStatus('Sign In')
              }}>Sign In</button>
            </div> :
            <div style={{ display: 'flex', columnGap: '10px' }}>
              <button onClick={() => dispatch(logOut())}>Log Out</button>
            </div>
        }
      </div>
      {
        modal && <Modal modal={modal} status={status} setModal={setModal} setStatus={setStatus} />
      }
    </div>
  )
}
export default Header