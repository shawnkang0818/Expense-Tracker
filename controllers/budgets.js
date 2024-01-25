import { Budget } from "../models/budget.js"

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
  Budget.find({})
    .then(budgets => {
      res.render('budgets/index', {
        budgets,
        title: 'Budget'
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/");
    });
}

function deleteBudget(req, res){
  Budget.findById(req.params.budgetId)
  .then(budget => {
    if(budget.owner.equals(req.user.profile._id)){
      req.body.reasonable = !!req.body.reasonable
      budget.deleteOne()
      .then(() => {
        res.redirect('/budgets')
      })
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/budgets')
  })
}

export {
  create,
  index,
  deleteBudget as delete
}