import { createContext, useState, useEffect } from 'react'
import { APIaddItem, APIgetShoppingList } from '../apis/items'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [list, setList] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getList()
  }, [])

  // get list
  const getList = () => {
    APIgetShoppingList()
      .then((list) => {
        console.log('Form' + list)
        setList(list)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // add list

  return (
    <FeedbackContext.Provider
      value={{
        list,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
