// import './index.css'

// const MoneyDetails = props => {
//   const {balance, income, expenses} = props

//   return (
//     <div className="scc-containers">
//       <div className="sc-container balance">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
//           alt="balance"
//           className="images"
//         />
//         <div className="scc-elements">
//           <p className="sc-paragraph">Your Balance</p>
//           <h1 className="sc-heading">Rs.{balance}</h1>
//         </div>
//       </div>
//       <div className="sc-container income">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
//           alt="income"
//           className="images"
//         />
//         <div className="scc-elements">
//           <p className="sc-paragraph">Your Income</p>
//           <h1 className="sc-heading">Rs.{income}</h1>
//         </div>
//       </div>
//       <div className="sc-container expenses">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
//           alt="expenses"
//           className="images"
//         />
//         <div className="scc-elements">
//           <p className="sc-paragraph">Your Expenses</p>
//           <h1 className="sc-heading">Rs.{expenses}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MoneyDetails

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
