import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  price: Number,
  date: Date,
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