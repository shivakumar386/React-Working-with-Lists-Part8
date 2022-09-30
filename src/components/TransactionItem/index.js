// const TransactionItem = props => {
//   const {
//     transactionsList,
//     deleteATransaction,
//     deleteTransactionsAndAmounts,
//   } = props
//   const {title, amount, incomeType, id} = transactionsList

//   const deleteTransaction = () => {
//     deleteATransaction(id)
//     // deleteTransactionsAndAmounts(id)
//   }

//   return (
//     <li className="list-elements">
//       <p>{title}</p>
//       <p>{amount}</p>
//       <p>{incomeType}</p>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
//         alt="delete"
//         className="delete-image"
//         onClick={deleteTransaction}
//       />
//     </li>
//   )
// }

// export default TransactionItem

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
