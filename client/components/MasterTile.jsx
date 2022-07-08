import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'
import ListContext from '../context/ListContext'
import { listRequested, deleteItem, addToList } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight, FaPlus } from 'react-icons/fa'
import DailyShoppingList from './DailyShoppingList'
import DailyTextTile from './DailyTextTile'

function MasterTile() {
  // const { list } = useContext(ListContext)
  const [list, setList] = useState({})
  // console.log(list)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const listArray = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(listRequested())
    // APIgetShoppingList()
    // .then(() => {
    //     console.log('Form' + list)
    //     setList(list)
    setIsLoading(false)
    //  })
    //   .catch((err) => {
    //     console.log(err)
    // })
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
    <div class="tile is-ancestor">
      <div class="tile is-parent"></div>
      <div class="tile is-parent is-4">
        <article class="tile is-child notification is-primary">
          <p class="title">My Master List</p>
          {listArray?.map((item) => {
            return (
              <>
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
                      <FaPlus color="black" />
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
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child notification is-primary">
          <div class="content">
            <p class="title">Today's Shop</p>

            <DailyTextTile />
          </div>
        </article>
      </div>
      <div class="tile is-parent"></div>
    </div>
  )
}

export default MasterTile
