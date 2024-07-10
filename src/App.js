import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from './components/AddExpense'
import AllExpenses from './components/AllExpenses';

const App = ({ }) => {

  //usestate for show expenses list in array
  const [expenses, setexpenses] = useState([])

  //display success msg when form submit
  const [popup, setPopup] = useState(false);

  const addNewExpense = (newExpense) => {
    setexpenses([...expenses, newExpense])  //... is a spread operator which return a array in that array store previous data which store into expenses and add newExpense
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);    //after 2 second popup is closed
  }

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<AllExpenses expenses={expenses} />} />
          <Route path='/addexpense' element={<AddExpense addNewExpense={addNewExpense} />} />
        </Routes>

        {/* if popup is true */}
        {popup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
              Expense added successfully.....
            </div>
          </div>
        )}


      </Router>

    </>
  )
}

export default App
