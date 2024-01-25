import { Budget } from "../models/budgets.js"

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

function index(req, res){

}

export {
  create,
  index,
}