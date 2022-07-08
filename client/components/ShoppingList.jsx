import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'
import ListContext from '../context/ListContext'
import { listRequested, deleteItem, addToList } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight, FaPlus } from 'react-icons/fa'
import DailyShoppingList from './DailyShoppingList'

function ShoppingList() {

  const [list, setList] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const listArray = useSelector((state) => state.items)
  console.log(listArray)

  useEffect(() => {
    dispatch(listRequested())
 
    setIsLoading(false)

  }, list)

  function handleDelete(event, item) {
    event.preventDefault()
    dispatch(deleteItem(item))
    dispatch(listRequested())
  }

  function handleAdd(e, item) {
    e.preventDefault
    dispatch(addToList(item))
  }

  return isLoading ? (
    // <Spinner />
    <p>is loading</p>
  ) : (
    <section class="section">
      <div className="columns list">
        <div className="column is-flex is-justify-content-space-between "></div>
        <div className="column is-justify-content-space-between has-background-white is-one-quarter">
          <h3 className="list-header has-text-dark">My Master List</h3>
          {/* {console.log(list)} */}
          {listArray?.map((item) => {
            return (
              <>
                {' '}
             
                <div
                  className="list-wrapper is-flex is-flex-direction-row 
                is-justify-content-space-between is-align-content-space-between mgt-medium"
                >
     
                  <div className="column border is-flex is-justify-content-space-between">
                    <div className="col has-text-dark">
                      <span key={item.id}>{item.name}</span>
                    </div>
                    <div className="col has-text-dark">
                      <span key={item.id}>${item.price}</span>
                    </div>
                
                  </div>
                  <div className="column border is-flex is-justify-content-space-around">
                    <span></span>
                    <button
                      onClick={(e) => handleAdd(e, item)}
                      className="close"
                    >
                      Add
                      <FaArrowRight color="black" />
                    </button>
                    <button
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

        <div class="column middle"></div>

        <DailyShoppingList />

        <div className="column"></div>
      </div>
      <div className="column"></div>
    </section>
  )
}

export default ShoppingList
