const db = require('mongoose');
const errorLog = require('gh-logger');

const {userSchema} = require('../db/schemas/userSchema');
const Users = db.model("Users", userSchema);

module.exports = {
    async post(req, res){
        let code, data;

        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;

        if(name && email && phone) {
            let cbData;
            await Users.findOne({email}, (err, mongoData) => {cbData = mongoData});
            if(!cbData){
                try {
                    Users.create({
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone
                    })
                    code = 200;
                    data = "Success";
                } catch (err) {
                    code = 500;
                    data = err;
                    errorLog.addLog(err);
                }
            } else code = 400, data = "Name is already taken";
        } else code = 400, data = "Bad request";

        res.status(code).send(data);
    }
}