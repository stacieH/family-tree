import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FamilyMemberSchema = new Schema({
    name:{
        type: String,
        required: 'name is missing'
    },
    nickname:{
        type: String,
        required: 'nickname is missing'
    },
    age: Number,
    relationship: String,
    date_created:{
        type:Date,
        default: Date.now
    }
})

export const FamilyMember = mongoose.model('FamilyMember', FamilyMemberSchema )