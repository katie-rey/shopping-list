import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'
import DailyShoppingList from './DailyShoppingList'

// import { fetchFruits } from '../actions'

function App() {
  //   const fruits = useSelector((state) => state.fruits)
  //   const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(fetchFruits())
  //   }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <ShoppingForm />
              <ShoppingList />
              {/* <DailyShoppingList /> */}
            </>
          }
        />
        <Route exact path="/list" element={<DailyShoppingList />} />
        {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/post:id/:name" element={<Post />} /> */}
      </Routes>
    </>
  )
}

export default App

// <div className="app">
// <h1>Fullstack Boilerplate - with Fruits!</h1>

// </div>
