const express = require("express")
//using zod !!
const zod = require("zod")
const app = express();

//schema
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;

    //validating zod schema - 
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
});

// global catches

app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3000);