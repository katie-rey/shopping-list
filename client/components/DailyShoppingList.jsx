import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { dailyListRequested, deleteDailyItem } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight, FaCheck } from 'react-icons/fa'

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
    <div className="column is-justify-content-space-between has-background-white is-one-quarter">
      <h3 className="list-header mgb-medium has-text-dark">
        Todays Shopping List
      </h3>

      {/* {console.log(list)} */}
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
    </div>
  )
}

export default DailyShoppingList

// isLoading ? (
//   // <Spinner />
//   <p>is loading</p>
// ) :

// <>
//   <h2>Today's shopping list</h2>

//   {dailyListArray?.map((item) => {
//     ;<div className="list-container">
//       <div class="list-item" key={item}>
//         {item.name}
//         {item.price}
//       </div>
//       <button
//         class="button is-dark"
//         onClick={(e) => handleDelete(e, item)}
//         className="close"
//       >
//         <FaTimes color="black" />
//       </button>
//     </div>
//   })}
// </>
