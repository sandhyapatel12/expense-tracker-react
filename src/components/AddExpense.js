import React, { useState } from 'react'


const AddExpense = ({ addNewExpense }) => {

  //usestate for store expenses default value and update value
  const [newExpense, setnewExpense] = useState('')
  const [newDate, setnewDate] = useState('')
  const [newAmout, setnewAmount] = useState('')
   
  const handleExpense = (e) => {
    e.preventDefault();     //page cant't reload
    addNewExpense({ newExpense, newDate, newAmout })  //add new data

    //when click on add expenses button previous data is blank
    setnewExpense('')
    setnewDate('')
    setnewAmount('')


  }

  return (
    <>
      <div className='max-w-5xl  px-5 py-2 mx-auto flex items-center mt-10 justify-center'>

        <div className='max-w-3xl flex flex-col mx-auto items-center px-3 py-2  '>

          <h1 className='font-bold text-3xl text-center text-gray-700'>Add New Expense</h1>

          <form onSubmit={handleExpense}  >

            <div className='space-y-3 mt-10'>
              <label htmlFor='ExpenseName' className='font-semibold text-lg'>Expense Name :</label>
              <input type='text' className='w-full border-2 border-black rounded-md px-3 py-2' required
                onChange={(e) => setnewExpense(e.target.value)}   //onchange takes update state 
                value={newExpense} />
            </div>

            <div className='space-y-3 mt-5'>
              <label htmlFor='date' className='font-semibold text-lg'>Date</label>
              <input type='date' className='w-full  border-2 border-black rounded-md px-3 py-2' required
                onChange={(e) => setnewDate(e.target.value)}
                value={newDate} />
            </div>

            <div className='space-y-3 mt-5'>
              <label htmlFor='amount' className='font-semibold text-lg'>Amount</label>
              <input type='number' className='w-full  border-2 border-black rounded-md px-3 py-2' required
                onChange={(e) => setnewAmount(e.target.value)}
                value={newAmout} />
            </div>

            <div className='flex items-center justify-center mx-auto'>
              <button  type='submit' className='bg-blue-800 text-white font-semibold px-5 py-2 mt-10 rounded-lg'>Add Expense</button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default AddExpense
