import React, { useContext, useEffect, useState } from 'react'
import { APIaddItem, APIgetShoppingList } from '../apis/items'
import ShoppingList from './ShoppingList'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../actions/index'

function ShoppingForm() {
  const [item, setItem] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  // const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    console.log(e.target.value)
    if (item === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (item !== '' && item.length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

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
                className="input is-normal"
                name="name"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Add item"
              ></input>
            </div>
            <div class="control">
              <input
                className="input"
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
              <button
                className="button is-primary"
                type="submit"
                isDisabled={btnDisabled}
              >
                Add
              </button>
              {message && <div className="message">{message}</div>}
            </div>
          </div>
        </form>
        <div className="column"></div>
      </div>
    </>
  )
}

export default ShoppingForm
