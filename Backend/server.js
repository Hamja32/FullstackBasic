import express from 'express';
const app = express();


// app.get('/',(req,res)=>{
//     res.send("Server is ready....");
// });


//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A first Joke',
            content:'This is a first joke'
        },
        {
            id:2,
            title:'A second Joke',
            content:'This is a second joke'
        },
        {
            id:3,
            title:'A third Joke',
            content:'This is a third joke'
        },
        {
            id:4,
            title:'A forth Joke',
            content:'This is a forth joke'
        },
        {
            id:5,
            title:'A fifth Joke',
            content:'This is a fifth joke'
        },
        {
            id:6,
            title:'A sixth Joke',
            content:'This is a sixth joke'
        },
        {
            id:7,
            title:'A seventh Joke',
            content:'This is a seventh joke'
        }
    ];

    res.send(jokes);
});


const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}`);
});