import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'
import ListContext from '../context/ListContext'
import { listRequested, deleteItem, addToList } from '../actions/index'
import { FaTimes, FaEdit, FaArrowRight } from 'react-icons/fa'

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
      <h3>My Items</h3>
      <div className="list-container">
        {/* {console.log(list)} */}
        {listArray?.map((item) => {
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
              <button onClick={(e) => handleAdd(e, item)} className="close">
                <FaArrowRight color="black" />
              </button>
              {/* <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button> */}
              {/* <button
                className="destroy"
                onClick={(e) => handleDelete(e, item)}
              ></button> */}
            </>
          )
        })}
      </div>
    </>
  )
}

export default ShoppingList
