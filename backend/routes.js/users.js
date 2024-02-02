import { Router } from 'express'

const router = new Router();

//Post SignIn
router.post('/signin', async (req, res) => {
    //check if user exist
    //check if password matches
    //send the db user
    const user ={_id: '1', email:'alex@gmail.com', userName:'alex123'};
    res.json(user);

});

//Post SignUp
router.post('/signup', async (req, res) => {
    // check if email is not db
    // create a new user in db using userModel
    //send the new user
    const user ={_id: '1', email:'alex@gmail.com', userName:'alex123'};
    res.json(user);
});

export default router;