import React from 'react'

const AllExpenses = ({ expenses }) => {
    return (
        <>
            <div className='bg-gray-500 text-white flex justify-between py-3 px-16 max-w-7xl rounded-md mt-10 mx-auto '>

                <div>DATE</div>
                <div>EXPENSES</div>
                <div>AMOUNT</div>

            </div>
            <div className='max-w-7xl mx-auto flex items-center justify-center mt-5 flex-col'>

                <div className=" w-full space-y-5">
                    {expenses.length === 0 ? (
                        <h1 className="text-black">No expenses added yet.</h1>
                    ) : (
                        // map function return a new array
                        expenses.map((newExpense, index) => (
                            <div key={index} className='border-2 border-gray-600 py-4 px-8 rounded-md justify-between flex ' >

                                <div>{newExpense.newDate} </div>
                                <div>{newExpense.newExpense}</div>
                                <div>${newExpense.newAmout}</div>

                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default AllExpenses
