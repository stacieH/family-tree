import {
    addNewFamily,
    getMember,
    getMemberById,
    deleteMember,
    updateMember
} from './controller'

export const routes = (app) => {
    app.route('/members')
        .get((req, res, next)=>{
            next();
        },getMember)
        // POST endpoint
        .post(addNewFamily)
        
    app.route('/members/:id')
        // get specific contact
        .get(getMemberById)
        // updating specific contact
        .put(updateMember)
        // deleting specific contact
        .delete(deleteMember)
}