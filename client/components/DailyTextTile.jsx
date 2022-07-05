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
      {dailyListArray?.map((item) => {
        return (
          <>
            {' '}
            {/* <div class="card">
                {' '}
                <header class="card-header">
                   <p class="card-header-title">{item.name}</p> */}
            <div
              className="list-wrapper is-flex is-flex-direction-row 
              is-justify-content-space-between is-align-content-space-between"
            >
              {/* <button
                  onClick={(e) => handleDelete(e, item)}
                  className="close"
                >
                  <FaTimes color="black" />
                </button>
                <button onClick={(e) => handleAdd(e, item)} className="close">
                  <FaArrowRight color="black" />
                </button> */}
              {/* //{' '}
                </header>
                //{' '}
              </div> */}
              <div className="column border is-flex is-justify-content-space-between">
                <div className="col has-text-dark">
                  <span key={item.id}>{item.name}</span>
                </div>
                <div className="col has-text-dark">
                  <span key={item.id}>${item.price}</span>
                </div>
                {/* <span></span> */}
              </div>
              <div className="column border is-flex is-justify-content-space-around">
                <span></span>
                <button
                  class="button is-dark"
                  onClick={(e) => handleDelete(e, item)}
                  className="close"
                >
                  <FaTimes color="black" />
                </button>

                {''}
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default DailyShoppingList