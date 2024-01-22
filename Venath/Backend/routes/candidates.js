const express = require("express");
const router = require("express").Router();
let Candidate = require("../models/candidates");

// router.route("/add").post((req,res)=>{
//     const name=req.body.name;
//     const age=Number(req.body.age);
//     const gender=req.body.gender;

//     const newStudent = new Student({
//         name,
//         age,
//         gender
//     })

//     newStudent.save()
//     .then(()=>{
//         res.json("student added")
//     })
//     .catch((err)=>{
//        console.log(err);
//     })
// })

 

router.post('/candidates/save', (req, res)=>{
    let newPost = new Candidate(req.body);
    newPost.save()
    .then(() => {
        return res.status(200).json({
            success: "Posts saved successfully",
            // data: {
            //     _id: createdUser._id,
            // }
        });
    })
    .catch((err) => {
        return res.status(400).json({
            error: err
        });
    });

        });



//read get students

router.get('/candidates', (req, res) => {
    Candidate.find().exec()
        .then(Candidate => {
            return res.status(200).json({
                success: true,
                existingCandidates: Candidate
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
});



// router.route("/").get((req,res)=>{
//     const name=req.body.name;
//     const age=Number(req.body.age);
//     const gender=req.body.gender;

//     Student.find()
//     .then((students)=>{
//         res.json(students)
//     })
//     .catch((err)=>{
//        console.log(err);
//     })

// })


//update students

router.put('/candidate/update/:id', (req, res) => {
    Candidate.findByIdAndUpdate(req.params.id,{
         $set:req.body
    },
    ).exec()
        .then(Candidate => {
            return res.status(200).json({
                success: 'updated',
               
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
});


// router.route("/update/:id").post(async (req,res)=>{
//     let userId = req.params.id;

// const{name,age,gender}=req.body; //dstrutcure
//     // const name=req.body.name;
//     // const age=Number(req.body.age);
//     // const gender=req.body.gender;

//     const updateStudent = {
//         name,
//         age,
//         gender
//     }
//     const update = await Student.findByIdAndUpdate(userId,updateStudent)
//     //res.status(200).send({status: "User updated", user:update})
    

//     .then(()=>{
//         res.status(200).send({status: "User updated", user:update})
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.status(500).send({status: "Error",err})
//     })


// })



//delete students
router.delete('/candidate/delete/:id', (req, res) => {
    console.log('Deleting student with ID:', req.params.id);

    Candidate.findByIdAndDelete(req.params.id)
        .then(deletedCandidate => {
            console.log('Deleted candidate:', deletedCandidate);
            return res.status(200).json({
                success: 'deleted',
                deletedCandidate
            });
        })
        .catch(err => {
            console.error('Delete error:', err);
            return res.status(400).json({
                error: err
            });
        });
});



// router.route("/delete/:id").delete(async (req,res)=>{
//     let userId = req.params.id;


//  await Student.findByIdAndDelete(userId)
//     //res.status(200).send({status: "User updated", user:update})
    

//     .then(()=>{
//         res.status(200).send({status: "User Deleted", user:update})
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.status(500).send({status: "Error delete",err})
//     })


// })

// //get only one person
// router.route("/get/:id").get(async (req,res)=>{
//     let userId = req.params.id;
//   const user=  await Student.findById(userId)
//     .then(()=>{
//         res.status(200).send({status: "User fetched", user:user})
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.status(500).send({status: "Error delete",err})
//     })
// })



//get a specific student

// router.get("/student/:id",(req,res)=>{
//     let studentId= req.params.id;

//     Student.findById(studentId,(err,student)=>{
//         if(err){
//             return res.status(400).json({success:false, err})
//         }

//         return res.status(200).json({
//             success:true,
//             student
//         });
//     });
// })

router.get("/candidate/:id",(req,res) => {
    let candidateId= req.params.id;

    Candidate.findById(req.params.id)
        .then(Candidate => {
           
            return res.status(200).json({
                success:true,
                Candidate
            });
        })
        .catch(err => {
            
            return res.status(400).json({success:false, err
            });
        });
});


// Your route for fetching candidates by username
router.get("/candidate/username/:username", (req, res) => {
    let username = req.params.username;

    Candidate.findOne({ un: username })
        .then(candidate => {
            if (!candidate) {
                return res.status(404).json({
                    success: false,
                    message: 'Candidate not found'
                });
            }

            return res.status(200).json({
                success: true,
                candidate
            });
        })
        .catch(err => {
            return res.status(400).json({
                success: false,
                error: err
            });
        });
});


// Your other routes go here...



router.get('/user/find/:username', async (req, res) => {
    try {
      const username = req.params.username;
  
      // Find the user by username
      const user = await User.findOne({ un: username });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      // Assuming your User model has an '_id' property for the user ID
      const userId = user._id;
  
      return res.status(200).json({
        success: true,
        user,
        userId,
      });
    } catch (error) {
      console.error('Error finding user:', error);
      return res.status(500).json({
        success: false,
        error,
      });
    }
  });


router.get('/candidates/:event', (req, res) => {
    const event = req.params.event;
  
    Candidate.find({ event })
      .exec()
      .then((candidates) => {
        return res.status(200).json({
          success: true,
          existingCandidates: candidates,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
        });
      });
  });



module.exports = router;