import React from 'react'
import { useAppSelector } from '../../redux/hook'
import { Navigate } from 'react-router-dom'


const Profile: React.FC = () => {

    const { user } = useAppSelector(store => store.user)
    const { categories } = useAppSelector(store => store.category)
    let professions: string[] = []

    const setProfessionFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        let buttons = document.querySelectorAll<HTMLInputElement>('#choice_btn')
        let button: any
        buttons.forEach(btn => {
            if (btn.value === e.target.value) {
                button = btn
            }
        })

        if (!professions.some(profession => profession === e.target.value)) {
            button.classList.add('profile__right-profession_active')
            professions.push(e.target.value)
        } else {
            button.classList.remove('profile__right-profession_active')
            professions = professions.filter(profession => {
                return profession != e.target.value
            })
        }
        console.log(professions)
    }

    return (
        <>
            {
                !user.email || !user ? <Navigate to="/" /> : <div className='profile'>
                    <div className="profile__left">
                        <div className="profile__left-img">
                            <img src={user.image} alt={user.name} />
                        </div>
                    </div>
                    <form className="profile__right">
                        <p>Name: </p>
                        <div className="profile__right-name">
                            <h2>{user.name}</h2>
                        </div>
                        <p>Email: </p>
                        <div className="profile__right-email">
                            <h3>{user.email}</h3>
                        </div>
                        <p>Image: </p>
                        <div className="profile__right-image">
                            <input className='profile__right-input' placeholder='Write link to image here...' value={user.image} />
                        </div>
                        <p>Description: </p>
                        <div className="profile__right-description">
                            <textarea className='profile__right-input' placeholder='Write description here...' value={user.description} />
                        </div>
                        <p>Resume: </p>
                        <div className="profile__right-resume">
                            <textarea className='profile__right-input' placeholder='Write resume here...' value={user.resume} />
                        </div>
                        <p>Choose you professions here:</p>
                        <div className="profile__right-profession">
                            {
                                categories.map(el => {
                                    return (
                                        <input onClick={(e: any) => setProfessionFunc(e)} id='choice_btn' value={el.title} type='button' key={el._id} />
                                    )
                                })
                            }
                        </div>
                        <div className="profile__right-password">
                            <input className='profile__right-input' type="password" placeholder='Password' />
                        </div>
                        <button className='profile__right-save'>Save</button>
                    </form>
                </div>
            }
        </>
    )
}

export default Profile