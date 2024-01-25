import { Budget } from "../models/budgets.js"

function newBudget(req, res) {
  Budget.find({}).sort('name')
  .then(budget => {
    res.render('budgets/new', {
      title: 'Add Budget',
      budget,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/budgets")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Budget.create(req.body)
  .then(budget => {
    res.redirect('/budgets')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/budgets")
  })
}

export {
  create,
  newBudget,
}