import React, { useContext, useEffect, useState } from 'react'
import { APIaddItem, APIgetShoppingList } from '../apis/items'
import ShoppingList from './ShoppingList'

function ShoppingForm() {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    APIaddItem(item)
      .then(() => {
        setItem('')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  return (
    <>
      {/* <Card> */}
      <form onSubmit={handleSubmit}>
        <h2>Add items to your list here...</h2>

        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review"
            value={item}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* // </Card> */}
    </>
  )
}

export default ShoppingForm
