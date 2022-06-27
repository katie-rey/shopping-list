import React, { useState, useEffect } from 'react'
// import Spinner from './Spinner'
import { APIgetShoppingList } from '../apis/items'

function ShoppingList() {
  const [list, setList] = useState({})
  console.log(list)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    APIgetShoppingList()
      .then((list) => {
        console.log('Form' + list)
        setList(list)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return isLoading ? (
    // <Spinner />
    <p>is loading</p>
  ) : (
    <>
      <h3>My Items</h3>
      <div className="list-container">
        {console.log(list)}
        {list?.map((item) => {
          console.log(item.name)
       
            {' '}
            <p>{item.name}</p>
            <p>{item.price}</p>

        })}
      </div>
    </>
  )
}

export default ShoppingList
