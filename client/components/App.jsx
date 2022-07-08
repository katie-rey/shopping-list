import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'
import DailyShoppingList from './DailyShoppingList'
import Footer from './Footer'
import MasterTile from './MasterTile'

function App() {
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

              <MasterTile />
            </>
          }
        />

        <Route exact path="/list" element={<MasterTile />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
