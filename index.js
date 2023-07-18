const express = require('express')
const app = express()
const port = 3001
app.use(express.json());

const users =[];

const QUESTIONS =[{
    title:"two states",
    description:"Given an arrray,return max",
    testCases:[{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];
const SUBMISSION=[

    // {
    //     userId: "1",
    //     questionId: "1",
    //     code: "function max(arr) { return Math.max (. parr) )",
    //     status: "accepted"
    // },
    // {
    //     userId: "1",
    //     questionId: "1",
    //     code: "function max(arr) { return Math.min(...arr) ]",
    //     status:"rejected"
    // }
];
// Serve the signup.html file
app.get('/', function(req, res) {
    res.sendFile('/Users/anushkrishna/Desktop'+'/signup.html');
});
app.use(express.urlencoded({ extended: true }));

app.post('/signup', function (req, res) {
    //add logic to decode body
    //body should have email and password
    //Store email and password (as is for now) in the USERS array above (only if the user with the given details doesnt exist
    //return back 200 status code to the client



    const {username, password} = req.body;

    // Perform validation on username and password
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (username.length < 4) {
        return res.status(400).json({ message: 'Username must be at least 4 characters long' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Assuming validation is successful, create a new user in the database
    const newUser = {
        username,
        password
    };
    users.push(newUser)



    // Send a response back to the client
    res.status(200).json({message: 'Signup successful'});
});

app.post('/login', function (req, res) {
    //add logic to decode body
    //body should have email and password
    //check if the user with the given data exist in th USERS array
    //also ensure if the password is the same.
    //iff password  same return back 200 status code to the client
    //also send back a token as of now any string
    //if password not same return back 401 to client

    const{username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:'Username and Password Required.'});
    }
    const user=users.find(user =>user.username===username);
    if(!user){
        return res.status(401).json({message:'Invalid Username or Password.'});
    }
    if(user.password===password){
        return res.status(200).json({message:'Login Successful.'});
    }
    else{
        return res.status(401).json({message:'Invalid Username or Password.'})
    }

})
app.get('/questions',function (req,res){
    //returns all the questions in the QUESTION array.
    res.send()
})

app.get("/submissions",function (req, res) {
    //return the user submission for this problem
    
})
app.post("/submissions",function (req, res) {
    //let the user submit a problem,randomly accept or reject the solution
    //store the submission in the SUBMISSION array above.
})


//to start http server
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})
