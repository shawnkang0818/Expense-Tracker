import { Expense } from "../models/expense.js";

function index(req, res) {
  Expense.find({})
  .then(expenses => {
    res.render('expenses/index', {
      expenses,
      title: 'Expense'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}