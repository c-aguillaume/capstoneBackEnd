const fs = require("fs");

const members = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/members-simple.json`, 'utf-8'))  ///Hard coded data

const Member = require('../models/member.js')



// 2) ROUTE HANDLERS


// exports.checkID = async(req, res, next, val) => {    //Using request params middelware to check if id number is valid
//         console.log(`Member id is: ${val}`);
//     if(req.params.id * 1 > Member.length){
//             return res.status(404).json({
//                 status: "fail",
//                 message: "Invalid ID"
//     });
// }
// next();
// }


exports.checkID = async (req, res, next, val) => {
  console.log(`Member customId is: ${val}`);

  try {
    const member = await Member.findOne({ customId: val });
    if (!member) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID Homie"
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Server error while checking ID"
    });
  }
};

exports.seed = async(req, res) => {
    try {
        await Member.deleteMany({})
        await Member.create(
            {
        "customId": 0,
        "demographics": {
            "name": "Isaiah Jones",
            "email": "isaiah@gmail.com",
            "phoneNumber": "(212) 000-0000"
        },
        "fratDemographics": {
            "controlNumber": "0012300",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Chapter Reporter",
            "photo": "null"
        }
    },
    {
        "customId": 1,
        "demographics": {
            "name": "Jean-Hus Theodore",
            "email": "jean@gmail.com",
            "phoneNumber": "(212) 000-0001"
        },
        "fratDemographics": {
            "controlNumber": "0012301",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 2,
        "demographics": {
            "name": "Levi Bazemore",
            "email": "levi@gmail.com",
            "phoneNumber": "(212) 000-0002"
        },
        "fratDemographics": {
            "controlNumber": "0012302",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 3,
        "demographics": {
            "name": "Doug Moore",
            "email": "doug@gmail.com",
            "phoneNumber": "(212) 000-0003"
        },
        "fratDemographics": {
            "controlNumber": "0012303",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 4,
        "demographics": {
            "name": "Kayron Davis",
            "email": "kayron@gmail.com",
            "phoneNumber": "(212) 000-0004"
        },
        "fratDemographics": {
            "controlNumber": "0012304",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/14/2018"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Parlimentarian",
            "photo": "null"
        }
    },
    {
        "customId": 5,
        "demographics": {
            "name": "Patrick Edmonds",
            "email": "patrick@gmail.com",
            "phoneNumber": "(212) 000-0005"
        },
        "fratDemographics": {
            "controlNumber": "0012305",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/14/2018"
        },
        "eboard": {
            "currentEboard": true,
            "position": "PrescustomIdent",
            "photo": "null"
        }
    },
    {
        "customId": 6,
        "demographics": {
            "name": "Ermic Pierre-Louis",
            "email": "ermic@gmail.com",
            "phoneNumber": "(212) 000-0006"
        },
        "fratDemographics": {
            "controlNumber": "0012306",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/14/2018"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 7,
        "demographics": {
            "name": "Stephen Bowen",
            "email": "stephen@gmail.com",
            "phoneNumber": "(212) 000-0007"
        },
        "fratDemographics": {
            "controlNumber": "0012307",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/14/2018"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 8,
        "demographics": {
            "name": "Donte McCarthy",
            "email": "donte@gmail.com",
            "phoneNumber": "(212) 000-0008"
        },
        "fratDemographics": {
            "controlNumber": "0012308",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Vice PrescustomIdent",
            "photo": "null"
        }
    },
    {
        "customId": 9,
        "demographics": {
            "name": "Chris Guillaume",
            "email": "chris@gmail.com",
            "phoneNumber": "(212) 000-0009"
        },
        "fratDemographics": {
            "controlNumber": "0012309",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Secretary",
            "photo": "null"
        }
    },
    {
        "customId": 10,
        "demographics": {
            "name": "Justin Ishmail",
            "email": "justin@gmail.com",
            "phoneNumber": "(212) 000-0010"
        },
        "fratDemographics": {
            "controlNumber": "0012310",
            "chapterInitiated": "Epsilon",
            "crossingDate": "11/05/2023"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Treasurer",
            "photo": "null"
        }
    },
    {
        "customId": 11,
        "demographics": {
            "name": "Monty Jean-Jacques",
            "email": "monty@gmail.com",
            "phoneNumber": "(212) 000-0011"
        },
        "fratDemographics": {
            "controlNumber": "0012311",
            "chapterInitiated": "Epsilon",
            "crossingDate": "11/05/2023"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Chaplain",
            "photo": "null"
        }
    },
    {
        "customId": 12,
        "demographics": {
            "name": "Nathaniel Fetus",
            "email": "nate@gmail.com",
            "phoneNumber": "(212) 000-0012"
        },
        "fratDemographics": {
            "controlNumber": "0012312",
            "chapterInitiated": "Epsilon",
            "crossingDate": "11/05/2023"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Assistant Chapter Reporter",
            "photo": "null"
        }
    },
    {
        "customId": 13,
        "demographics": {
            "name": "Javan Robinson",
            "email": "javan@gmail.com",
            "phoneNumber": "(212) 000-0013"
        },
        "fratDemographics": {
            "controlNumber": "0012313",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/04/2020"
        },
        "eboard": {
            "currentEboard": true,
            "position": "Immediate Past PrescustomIdent",
            "photo": "null"
        }
    },
    {
        "customId": 14,
        "demographics": {
            "name": "Clyde Cole",
            "email": "clyde@gmail.com",
            "phoneNumber": "(212) 000-0014"
        },
        "fratDemographics": {
            "controlNumber": "0012314",
            "chapterInitiated": "Epsilon",
            "crossingDate": "04/15/1989"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 15,
        "demographics": {
            "name": "Darren Fails",
            "email": "darren@gmail.com",
            "phoneNumber": "(212) 000-0015"
        },
        "fratDemographics": {
            "controlNumber": "0012315",
            "chapterInitiated": "Epsilon",
            "crossingDate": "03/28/1986"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    },
    {
        "customId": 16,
        "demographics": {
            "name": "Richard Pierre",
            "email": "rich@gmail.com",
            "phoneNumber": "(212) 000-0016"
        },
        "fratDemographics": {
            "controlNumber": "0012316",
            "chapterInitiated": "Epsilon",
            "crossingDate": "09/07/1991"
        },
        "eboard": {
            "currentEboard": false,
            "position": "null",
            "photo": "null"
        }
    }
        )
        res.status(201).json({success: 'Database Seeded'})
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}




exports.getAllMembers = async(req, res) => {
    try {
        const members = await Member.find({})
    res.status(200).json(members)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


/////////
///Get All members routes using Hard coded data.

// exports.getAllMembers = (req, res) =>{
// console.log(req.requestTime);
//     res.status(200).json({
//     status: "success",
//     requestedAt: req.requestedTime,
//     results: members.length,
//     data:{
//         members: members
//     }
// })
// }


// exports.getMember = async(req, res) => {
//     try {
//         const members = await Member.find({})
//     } catch (error) {
//         console.error(error)
//     }
// }



exports.getMember = async (req, res) => {
//   console.log(req.params);

  try {
    const id = req.params.id;
    const member = await Member.findOne({ customId: id });

    if (!member) {
      return res.status(404).json({
        status: "fail",
        message: "Member not found"
      });
    }

    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server error while fetching member"
    });
  }
};







//////////////////
/////Get Member route using hard coded Data
// exports.getMember = (req, res) =>{
//     console.log(req.params)
//     const id = req.params.id * 1;
//     const member = members.find(el => el.id === id)


    ///////////
    //// OLD WAY OF CHECKING IF TOUR NUMBER IS VALID WITHOUT USING REQUEST PARAMS MIDDLEWARE

    // if(!tour){
    // // if(id > tours.length){
    //     return res.status(404).json({
    //         status: "fail",
    //         message: "Invalid ID"
    //     })
    // }


    // res.status(200).json({
    //     status: "success",
    //     data:{
    //         member: member
    //     }
    // })
    // }


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

exports.deleteMember = async(req, res) => {
    try {
        const id = req.params.id;
        const deletedMember = await Member.findOneAndDelete({ customId: id });
        res.status(204).json(deletedMember)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




////////////
///Old way to Delete memeberr using Hard coded Data

// exports.deleteMember = (req, res) => {
//    res.status(204).json({
//     status: "success",
//     data: null,
// });
// };



