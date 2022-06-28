import React, { useContext, useEffect, useState } from 'react'
import { APIaddItem, APIgetShoppingList } from '../apis/items'
import ShoppingList from './ShoppingList'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../actions/index'

function ShoppingForm() {
  const [item, setItem] = useState('')
  // const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    console.log(e.target.value)
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(item)
    dispatch(addNewItem(item))
    // APIaddItem(item)
    e.target.reset()
  }

  return (
    <>
      <section class="hero is-small is-primary">
        <form onSubmit={handleSubmit}>
          <h2>Add items to your list here...</h2>

          <div className="container is-flex-direction-row">
            <input
              class="input is-normal"
              name="name"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Add item"
              // value={item}
            />
            <input
              class="input"
              name="price"
              onChange={handleChange}
              type="integer"
              placeholder="Price"
              // value={item}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ShoppingForm
