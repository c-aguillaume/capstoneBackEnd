const express = require('express')
const router = express.Router();
const memberController = require('./../controllers/memberController')




router
.route('/')
.get(memberController.getAllMembers)
.post(memberController.createMember)

router
.route('/:id')
.get(memberController.getMember)
.patch(memberController.updateMember)
.delete(memberController.deleteMember)

module.exports = router;




// OLD WAY OF DEFINING ROUTES\
// app.route('/api/v1/users')
// .get(getallUsers)
// .post(createUser)

// app.route('/api/v1/users/:id')
// .get(getUser)
// .patch(updateUser)
// .delete(deleteUser)
