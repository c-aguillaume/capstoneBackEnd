const fs = require("fs");

const members = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/members-simple.json`, 'utf-8'))



// 2) ROUTE HANDLERS


exports.checkID = (req, res, next, val) => {    //Using request params middelware to check if id number is valid
        console.log(`Member id is: ${val}`);
    if(req.params.id * 1 > members.length){
            return res.status(404).json({
                status: "fail",
                message: "Invalid ID"
    });
}
next();
}

exports.getAllMembers = (req, res) =>{
console.log(req.requestTime);
    res.status(200).json({
    status: "success",
    requestedAt: req.requestedTime,
    results: members.length,
    data:{
        members: members
    }
})
}

exports.getMember = (req, res) =>{
    console.log(req.params)
    const id = req.params.id * 1;
    const member = members.find(el => el.id === id)


    ///////////
    //// OLD WAY OF CHECKING IF TOUR NUMBER IS VALID WITHOUT USING REQUEST PARAMS MIDDLEWARE

    // if(!tour){
    // // if(id > tours.length){
    //     return res.status(404).json({
    //         status: "fail",
    //         message: "Invalid ID"
    //     })
    // }


    res.status(200).json({
        status: "success",
        results: members.length,
        data:{
            member: member
        }
    })
    }


exports.createMember = (req, res) => {
// console.log(req.body);

const newId = members[members.length - 1].id + 1;
const newMember = Object.assign({id: newId }, req.body)

members.push(newMember);
fs.writeFile(`${__dirname}/dev-data/data/members-simple.json`, JSON.stringify(members), err => {
res.status(201).json({
    status: "success",
    data: {
        member: newMember
    }

})
})
}

exports.updateMember = (req, res) => {
// console.log(req.body);

res.status(200).json({
    status: 'success',
    data: {
        member: '<Updated member here...>'
    }
});
};

exports.deleteMember = (req, res) => {
   res.status(204).json({
    status: "success",
    data: null,
});
};




