import React, { useContext, useEffect, useState } from 'react'
import { APIaddItem, APIgetShoppingList } from '../apis/items'
import ShoppingList from './ShoppingList'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../actions/index'

function ShoppingForm() {
  const [item, setItem] = useState('')
  // const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(item)
    dispatch(addNewItem(item))
    APIaddItem(item)
    e.target.reset()
  }

  function handleChange(e) {
    console.log(e.target.value)
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* <Card> */}
      <form onSubmit={handleSubmit}>
        <h2>Add items to your list here...</h2>

        <div className="input-group">
          <input
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Add item"
            // value={item}
          />
          <input
            name="price"
            onChange={handleChange}
            type="integer"
            placeholder="Price"
            // value={item}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* // </Card> */}
    </>
  )
}

export default ShoppingForm
