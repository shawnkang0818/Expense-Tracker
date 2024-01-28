import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
  amount: Number,
  category: String,
  timePeriod: Date,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
},{
  timestamps: true
})

const Budget = mongoose.model('Budget', budgetSchema)

export {
  Budget
}