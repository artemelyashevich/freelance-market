import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { findAllCategories } from '../../redux/slice/categorySlice'
import { Link } from 'react-router-dom'
import { LuAlarmClock, LuUser, LuUsers } from 'react-icons/lu'


const Home: React.FC = () => {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(findAllCategories())
  }, [])

  const { categories } = useAppSelector(store => store.category)

  return (
    <div className='home'>
      <div className="home__cats">
        {
          categories.map(el => {
            return (
              <div key={el._id}>
                <Link className='home__cats__link' to={`/category/${el.title.toLocaleLowerCase()}`}>
                  <p>{el.title}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className="home__intro">
        <div className="home__intro-left">
          <div className="home__intro-title">
            <h1>Find the Best Freelancer</h1>
          </div>
          <div className="home__intro-description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
          </div>
          <div className="home__intro-search">
            <input type="text" className='home__intro-input' placeholder='Type in the course you want to learn' />
          </div>
          <div className="home__intro-info"></div>
          <div className="home__intro-notes">
            <div className='home__intro-notes-note'>
              <LuAlarmClock />
              <p>Life Time Access</p>
            </div>
            <div className='home__intro-notes-note'>
              <LuUser />
              <p>Expert Freelancer</p>
            </div>
            <div className='home__intro-notes-note'>
              <LuUsers />
              <p>100K+ Freelancers</p>
            </div>
          </div>
        </div>
        <div className="home__intro-right">
          <img src="https://static.vecteezy.com/system/resources/previews/010/945/804/original/copywriting-icons-set-copywriting-pack-symbol-elements-for-infographic-web-vector.jpg" alt="" />
        </div>
      </div>
      <div className="home__categories">
        <div className='home__categories-title'>
          <h1>Categories</h1>
        </div>
        <div className='home__categories_items'>
          {
            categories.map(el => {
              return (
                <div className='home__categories_category' key={el._id}>
                  <div className="home__categories_category-img">
                    <Link to={`/category/${el.title.toLowerCase()}`}>
                      <img src={`${el.image}`} alt={`${el.title}`} />
                    </Link>
                  </div>
                  <div className="home__categories_category-title">
                    <p>
                      {el.title}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home