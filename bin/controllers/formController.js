const errorLog = require('gh-logger');
const Users = require('../db/schemas/userSchema');

module.exports = {
    async post(req, res){
        const { name, email, phone } = req.body;
        if(!name || !email || !phone) return res.status(401).json({ msg: "Bad request" });

        /**
         * CHECK USE EXIST
         * */
        const user = await Users.findOne({email});
        if(user) return res.status(401).json({ msg: "USER IS EXIST" });

        /**
         * USER CREATION AND ADD LOG INFORMATION
         * */
        try {
            await Users.create({ name, email, phone });
            return res.status(200).send({ msg: "INFORMATION SAVED" });
        } catch (err) {
            errorLog.addLog(err);
            return res.status(400).send(err);
        }
    }
}