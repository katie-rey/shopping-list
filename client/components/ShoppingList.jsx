import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'
import ListContext from '../context/ListContext'
import { listRequested, deleteItem, addToList } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight } from 'react-icons/fa'
import DailyShoppingList from './DailyShoppingList'

function ShoppingList() {
  // const { list } = useContext(ListContext)
  const [list, setList] = useState({})
  // console.log(list)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const listArray = useSelector((state) => state.items)
  console.log(listArray)

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
    <>
      <section class="section">
        <h3>My Items</h3>
        <div className="columns">
          <div className="column">
            {/* {console.log(list)} */}
            {listArray?.map((item) => {
              return (
                <>
                  <div class="card">
                    <header class="card-header">
                      <p class="card-header-title">{item.name}</p>
                      <button
                        onClick={(e) => handleDelete(e, item)}
                        className="close"
                      >
                        <FaTimes color="black" />
                      </button>
                      <button
                        onClick={(e) => handleAdd(e, item)}
                        className="close"
                      >
                        <FaArrowRight color="black" />
                      </button>
                    </header>
                  </div>

                  {/* <ul>
                    <li key={item}>
                      {item.name} {item.price}
                    </li>
                  </ul>
                  <button
                    onClick={(e) => handleDelete(e, item)}
                    className="close"
                  >
                    <FaTimes color="black" />
                  </button>
                  <button onClick={(e) => handleAdd(e, item)} className="close">
                    <FaArrowRight color="black" />
                  </button> */}
                </>
              )
            })}
          </div>
          <div class="column">
            <DailyShoppingList />
          </div>
        </div>
      </section>
    </>
  )
}

export default ShoppingList
