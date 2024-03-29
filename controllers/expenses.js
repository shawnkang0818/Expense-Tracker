import { Expense } from "../models/expense.js"

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
  Expense.findById(req.params.expenseId)
  .populate("owner")
  .then(expense => {
    res.render('expenses/show', {
      expense,
      title: "Curret Expense"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/expenses")
  })
}

function changeReasonable(req, res) {
  Expense.findById(req.params.expenseId)
  .then(expense => {
    expense.reasonable = !expense.reasonable
    expense.save()
    .then(() => {
      res.redirect(`/expenses/${expense._id}`)
    })
  })
}

function edit(req, res){
  Expense.findById(req.params.expenseId)
  .then(expense => {
    res.render('expenses/edit', {
      expense,
      title: 'Edit Expense'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function update(req, res){
  Expense.findById(req.params.expenseId)
  .then(expense => {
    if(expense.owner.equals(req.user.profile._id)){
      req.body.reasonable = !!req.body.reasonable
      expense.updateOne(req.body)
      .then(() => {
        res.redirect(`/expenses/${expense._id}`)
      })
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function deleteExpense(req, res){
  Expense.findById(req.params.expenseId)
  .then(expense => {
    if(expense.owner.equals(req.user.profile._id)){
      req.body.reasonable = !!req.body.reasonable
      expense.deleteOne()
      .then(() => {
        res.redirect('/expenses')
      })
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

export {
  index,
  create,
  show,
  changeReasonable,
  edit,
  update,
  deleteExpense as delete
}