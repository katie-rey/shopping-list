import React, { useState, useEffect, useContext } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'
import ListContext from '../context/ListContext'
import { listRequested } from '../actions/index'

function ShoppingList() {
  // const { list } = useContext(ListContext)
  const [list, setList] = useState({})
  console.log(list)
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
  }, [])

  return isLoading ? (
    // <Spinner />
    <p>is loading</p>
  ) : (
    <>
      <h3>My Items</h3>
      <div className="list-container">
        {console.log(list)}
        {listArray?.map((item) => {
          return (
            <>
              {' '}
              <p>
                {' '}
                {/* key={item} */}
                {item.name} {item.price}
              </p>
            </>
          )
        })}
      </div>
    </>
  )
}

export default ShoppingList
