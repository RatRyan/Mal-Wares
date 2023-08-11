import bcrypt from 'bcryptjs';

const createAccount = (req, res) =>{
    let salt = bcrypt.genSaltSync(10);
    let data ={
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt)
    }
    res.sendStatus(200);
};

const login = (req, res) =>{
    let salt = bcrypt.genSaltSync(10);
    let userPassword = bcrypt.hashSync("password", salt); //replace with user password
    //find user from database by username = req.body.username

    if(bcrypt.compareSync(req.body.password, userPassword)){
        req.session.user = {
            isAuthenticated: true,
            //use user info for below
            username: "user",
            id: 1
        }
    }
    res.redirect('/');
};

export {
    createAccount,
    login
}