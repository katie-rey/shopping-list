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
      <h3>My Items</h3>
      <div className="list-container">
        {dailyListArray?.map((item) => {
          return (
            <>
              {' '}
              <p key={item}>
                {' '}
                {item.name} {item.price}
              </p>
              <button onClick={(e) => handleDelete(e, item)} className="close">
                <FaTimes color="black" />
              </button>
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
