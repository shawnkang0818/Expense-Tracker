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

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.reasonable = !!req.body.reasonable
  Expense.create(req.body)
  .then(expense => {
    res.redirect('/expenses')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/expenses")
  })
}

function show(req, res) {
  console.log('hello')
}

export {
  index,
  create,
  show
}