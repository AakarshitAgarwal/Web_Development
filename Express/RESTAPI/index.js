const express =require('express');
const members =require('./Members');
const app=express();


app.use(express.json())   //use method use all the CRUD request


app.get('/api/members',(req,res)=>{
    res.json(members)
})
app.get('/api/members/:id',(req,res)=>{
  //  console.log(req.params.id);   //params-->parameter
  //const found =members.some(member=>member.id===parseInt(req.params.id));  -->we can try this by making funtion
  //res.json(found);---->give true or false
  function check(user){
    if(user.id===parseInt(req.params.id))    //user memeber function ka ek object h!
    return true;
  }
  const found =members.some(check);
  if(found){
  res.json(members.filter(member=>member.id===parseInt(req.params.id)));  //filter is used to give the selected values
  }
  else{
    res.status(400).json("Member not found");
  }
})
app.post('/api/members',(req,res)=>{
  //res.json(req.body);--->we can take it by ourself from postman body which we try in frontend
  const newMember={
    id:5,
    name:req.body.name,
    email:req.body.email,
    status:"inactive"

  }
  members.push(newMember);
  res.json(members);
})

//Update Member
app.put('/api/members/:id',(req,res)=>{
  const found =members.some(member=>member.id===parseInt(req.params.id));
  if(found){
    //res.jason(members.filter(member=>member.id===parseInt(req.params.id)));
    members.forEach(member=>{
      if(member.id===parseInt(req.params.id)){
        member.name=req.body.name,
        member.email=req.body.email
        res.json({msg:'Member updated',member:member});
      }
    })
  }
  else{
    res.status(400).json({msg:`No member with the id of ${req.params.id}`});
  }
  
})

const PORT=3000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});
