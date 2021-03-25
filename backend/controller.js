import {FamilyMember} from './model'

export const addNewFamily = (req,res) => {
    let newMember = new FamilyMember(req.body)
    newMember.save((err, member)=>{
        if(err){
            res.send(err)
        }
        res.json(member)
    })
}

export const getMember = (req, res) => {
    FamilyMember.find({}, (err, member)=>{
        if(err){
            res.send(err)
        }
        res.json(member)
    })
}

export const getMemberById = (req, res) => {
    FamilyMember.findById(req.params.id, (err, member)=>{
        if(err){
            res.send(err)
        }
        res.json(member)
    })
}

export const updateMember = (req, res) => {
    FamilyTree.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify:false}, (err, member)=>{
        if(err){
            res.send(err)
        }
        res.json(member)
    })
}
export const deleteMember = (req, res) => {
    FamilyTree.remove({_id: req.params.id}, (err, member)=>{
        if(err){
            res.send(err)
        }
        res.json({message: "successfully deleted member"})
    })
}