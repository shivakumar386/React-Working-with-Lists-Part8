// import {Component} from 'react'
// import {v4} from 'uuid'
// import MoneyDetails from '../MoneyDetails/index'
// import TransactionItem from '../TransactionItem/index'
// import './index.css'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

// class MoneyManager extends Component {
//   state = {
//     balance: 0,
//     income: 0,
//     expenses: 0,
//     title: '',
//     amount: 0,
//     incomeType: '',
//     transactionsList: [],
//   }

//   onSubmitForm = event => {
//     event.preventDefault()
//     const {title, amount, incomeType, transactionsList} = this.state
//     const newTransaction = {
//       id: v4(),
//       title,
//       amount,
//       incomeType,
//     }
//     if (incomeType.toLowerCase() === 'income') {
//       this.setState(prevState => ({
//         balance: parseInt(prevState.balance) + parseInt(amount),
//         income: parseInt(prevState.income) + parseInt(amount),
//       }))
//     } else {
//       this.setState(prevState => ({
//         expenses: prevState.expenses + parseInt(amount),
//         balance: prevState.balance - parseInt(amount),
//       }))
//     }
//     this.setState(prevState => ({
//       transactionsList: [...prevState.transactionsList, newTransaction],
//     }))
//   }

//   deleteATransaction = id => {
//     const {transactionsList} = this.state

//     const filteredList = transactionsList.filter(
//       eachTransaction => eachTransaction.id !== id,
//     )
//     this.setState({transactionsList: filteredList})
//   }

//   //   deleteTransactionsAndAmounts = id => {
//   //     const {transactionsList} = this.state
//   //     const transaction = transactionsList.filter(
//   //       eachTransaction => eachTransaction.id === id,
//   //     )
//   //     const {amount, incomeType} = transaction
//   //     console.log(transaction)

//   //     if (incomeType.toLowerCase() === 'expense') {
//   //       this.setState(prevState => ({
//   //         expenses: parseInt(prevState.expenses) - parseInt(amount),
//   //         balance: parseInt(prevState.balance) + parseInt(amount),
//   //       }))
//   //     }
//   //   }

//   onChangeTitle = event => {
//     this.setState({title: event.target.value})
//   }

//   onChangeAmount = event => {
//     this.setState({amount: event.target.value})
//   }

//   onChangeSelection = event => {
//     this.setState({incomeType: event.target.value})
//   }

//   render() {
//     const {balance, income, expenses, title, transactionsList} = this.state

//     return (
//       <div className="bg-container">
//         <div className="top-section">
//           <h1 className="ts-heading">Hi, Richard</h1>
//           <p className="ts-paragraph">
//             Welcome back to your <span className="ts-span">Money Manager</span>
//           </p>
//         </div>
//         <div className="second-section">
//           <MoneyDetails balance={balance} income={income} expenses={expenses} />
//         </div>
//         <div className="third-container">
//           <div className="tc-transaction-section">
//             <h1 className="tc-heading">Add Transaction</h1>
//             <form className="form-elements" onSubmit={this.onSubmitForm}>
//               <label htmlFor="input-label" className="label-elements">
//                 TITLE
//               </label>
//               <input
//                 type="text"
//                 id="input-label"
//                 placeholder="TITLE"
//                 className="input-elements"
//                 value={title}
//                 onChange={this.onChangeTitle}
//               />
//               <label htmlFor="amount-input" className="label-elements">
//                 AMOUNT
//               </label>
//               <input
//                 type="number"
//                 id="amount-input"
//                 placeholder="AMOUNT"
//                 className="input-elements"
//                 onChange={this.onChangeAmount}
//               />
//               <label htmlFor="input-label" className="label-elements">
//                 TYPE
//               </label>
//               <select
//                 className="option-elements"
//                 onChange={this.onChangeSelection}
//               >
//                 <option value="Income">Income</option>
//                 <option value="Expense">Expense</option>
//               </select>
//               <button type="submit" className="button">
//                 Add
//               </button>
//             </form>
//           </div>
//           <div className="tc-second">
//             <h1 className="tc-heading">History</h1>
//             <ul className="or-list">
//               <li className="list-elements">
//                 <p>Title</p>
//                 <p>Amount</p>
//                 <p>Type</p>
//               </li>
//               {transactionsList.map(eachTransaction => (
//                 <TransactionItem
//                   transactionsList={eachTransaction}
//                   deleteATransaction={this.deleteATransaction}
//                   deleteTransactionsAndAmounts={
//                     this.deleteTransactionsAndAmounts
//                   }
//                   key={eachTransaction.id}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default MoneyManager

import {Component} from 'react'
import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="header-content">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transaction-details">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="TITLE"
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                placeholder="AMOUNT"
              />
              <label className="input-label" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
