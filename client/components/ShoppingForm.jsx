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
      <div className="colums is-flex is-flex-direction-row mb-6">
        <div className="column"></div>
        <form onSubmit={handleSubmit}>
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-normal"
                name="name"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Add item"
              ></input>
            </div>
            <div class="control">
              <input
                class="input"
                name="price"
                onChange={handleChange}
                type="integer"
                placeholder="Price"
              ></input>
            </div>
            <div class="control">
              {/* <a class="button is-info" type="submit">
                Add
              </a> */}
              <button className="button is-info" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="column"></div>
      </div>
    </>
  )
}

export default ShoppingForm
