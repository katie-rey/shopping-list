import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { dailyListRequested, deleteDailyItem } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight } from 'react-icons/fa'

// import Spinner from './Spinner'

function DailyShoppingList() {
  const [isLoading, setIsLoading] = useState(true)
  const dailyListArray = useSelector((state) => state.list)
  const dispatch = useDispatch()

  console.log(dailyListArray)

  useEffect(() => {
    dispatch(dailyListRequested())
  }, [])

  function handleDelete(event, item) {
    event.preventDefault()
    dispatch(deleteDailyItem(item))
    dispatch(dailyListRequested())
  }

  return (
    <>
      <h2>Today's shopping list</h2>

      <div className="list-container">
        {dailyListArray?.map((item) => {
          return (
            <>
              <div class="card">
                <header class="card-header">
                  {' '}
                  <p class="card-header-title">{item.name}</p>
                  {/* <div class="list-item" key={item}>
                {item.name}
                {item.price}
              </div> */}
                  <button
                    class="button is-dark"
                    onClick={(e) => handleDelete(e, item)}
                    className="close"
                  >
                    <FaTimes color="black" />
                  </button>
                </header>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default DailyShoppingList

// isLoading ? (
//   // <Spinner />
//   <p>is loading</p>
// ) :
