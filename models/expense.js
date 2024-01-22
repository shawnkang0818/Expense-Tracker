import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  amount: Number,
  date: Date,
  // category: [categorySchema],
  description: String,
  reasonable: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Expense = mongoose.model('Expense', expenseSchema)

export {
  Expense
}