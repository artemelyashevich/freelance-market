import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILogin, IRegister } from '../../interfaces/authInterface'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { loginUser, registerUser } from '../../redux/slice/authSlice'
import { getUser } from '../../redux/slice/userSlice'
import { getCookie } from '../../utils/getToken'

interface IProps {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  status: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

const Modal: React.FC<IProps> = (props) => {

  const dispatch = useAppDispatch()

  const closeModal = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      props.setModal(false)
    } else {
      props.setModal(true)
    }
  }

  const { register, handleSubmit, reset, formState: {
    errors
  } } = useForm<IRegister | ILogin>()

  const [btn, setBtn] = React.useState<string>('Freelancer')

  const { error } = useAppSelector(store => store.auth)

  const submitForm: SubmitHandler<IRegister | ILogin> = (data) => {
    if (props.status === 'Sign Up') {
      dispatch(registerUser({ ...data, status: btn }))
      let cookie = getCookie()
      dispatch(getUser(cookie.auth))
    }
    if (props.status === 'Sign In') {
      dispatch(loginUser({ ...data }))
      let cookie = getCookie()
      dispatch(getUser(cookie.auth))
    }
    if (!error) {
      props.setModal(false)
    }
    reset()
  }

  return (
    <div className='modal'>
      <div onClick={(e: any) => closeModal(e)} className={`overlay ${props.modal && 'overlay_active'}`}>
        <form onSubmit={handleSubmit(submitForm)} noValidate className='modal__form' action="">
          <div className="modal__form__title">
            <h2>
              {
                props.status === 'Sign In' ? 'Sign In' : 'Sign Up'
              }
            </h2>
          </div>
          {
            props.status === 'Sign Up' &&
            <div>
              <input {...register('name', {
                required: {
                  message: "Name cannot be empty!",
                  value: true,
                },
                minLength: {
                  message: "The minimum name length is 2!",
                  value: 2,
                }
              })} className='modal__form__input' type="text" placeholder='Name' />
              {
                errors.name && <p style={{ marginBottom: '10px', color: 'red', fontSize: '15px', textDecoration: 'none', marginTop: '-10px' }} className='error'>{errors.name.message}</p>
              }
            </div>
          }
          <input {...register('email', {
            required: {
              message: "Mail cannot be empty!",
              value: true,
            },
            minLength: {
              message: "The minimum mail length is 10!",
              value: 10,
            },
            pattern: {
              message: "Check email!",
              value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
            }
          })} className='modal__form__input' type="text" placeholder='Email' />
          {
            errors.email && <p style={{ marginBottom: '10px', color: 'red', fontSize: '15px', textDecoration: 'none', marginTop: '-10px' }} className='error'>{errors.email.message}</p>
          }
          <input {...register('password', {
            required: {
              message: "Password cannot be empty!",
              value: true,
            },
            minLength: {
              message: "The minimum mail length is 5!",
              value: 5,
            }
          })} className='modal__form__input' type="password" placeholder='Password' />
          {
            errors.password && <p style={{ marginBottom: '10px', color: 'red', fontSize: '15px', textDecoration: 'none', marginTop: '-10px' }} className='error'>{errors.password.message}</p>
          }
          {
            props.status === 'Sign Up' &&
            <div className="modal__form__select">
              <button type='button' onClick={() => setBtn('Freelancer')} className={`${btn === 'Freelancer' ? 'modal__form__select_active' : ''}`}>I'm Freelancer</button>
              <button type='button' onClick={() => setBtn('Buyer')} className={`${btn === 'Buyer' ? 'modal__form__select_active' : ''}`}>I'm Buyer</button>
            </div>
          }
          {
            error && <p style={{ marginBottom: '10px', color: 'red', fontSize: '15px', textDecoration: 'none', marginTop: '-10px' }} className='error'>{error}</p>
          }
          <button type="submit">
            {
              props.status === 'Sign In' ? 'Sign In' : 'Sign Up'
            }
          </button>
          <p onClick={() => props.setStatus(`${props.status === 'Sign In' ? 'Sign Up' : 'Sign In'}`)}>
            {
              props.status === 'Sign In' ? 'Sign Up now' : 'Sign In now'
            }
          </p>
        </form>
      </div>
    </div>
  )
}

export default Modal