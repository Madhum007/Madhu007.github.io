db.employee.find(
    {department:{$eq:"IT"}}
)

db.employee.find(
    {
        salary:{$gt:200}//gt means greater than
    }
)

db.employee.find(
    {
        salary:{$gte:200}//graterthan equal
    })

    
db.employee.find(
    {
        salary:{$glt:200}//graterthan equal
    })

        
db.employee.find(
    {
        salary:{$glt:200}//graterthan equal
    }
   
)

      
db.employee.find(
    {
        salary:{$glt:200,$lt:300}//lessthan equal
    }
   
)

    
db.employee.find(
    {
        salary:{$glt:200,$lt:300},department:{$eq:"HR"}//lessthan equal
    }
   
)

  
db.employee.find(
    {
        salary:{$glt:200,$lt:300},department:{$in:["HR","IT"]}//lessthan equal
    }
   
)


db.employee.find(
    {
        salary:{$glt:200,$lt:300},department:{$nin:["HR","IT"]}//lessthan equal
    }
   
)


db.employee.find({$or:[
    {
        salary:{$glt:200,$lt:300}//lessthan equal
    },
    {
       department:{$nin:["HR","IT"]}//lessthan equal
    }
]
}
   
)


db.employee.find({$and:[
    {
        salary:{$glt:200,$lt:300}//lessthan equal
    },
    {
       department:{$nin:["HR","IT"]}//lessthan equal
    }
]
}
   
)


db.employee.find({$nor:[
    {
        salary:{$glt:200,$lt:300}//lessthan equal
    },
    {
       department:{$nin:["HR","IT"]}//lessthan equal
    }
]
}
   
) //neithor or nor



// db.employee.find(
//     {
//        department:{
//         $not{$eq:"HR"}
//     }//lessthan equal
//     }
   
// )



db.employee.find(
    {
       email:{$exists:true}
    }
   
)


//$exists
//eq means equal
//$in and $nin

db.employee.updateMANY({},{ponts:0})

//rename ,increment,unset

db.employee.update()


ecom> db.employee.find({age:{$gte:29}})
[
  {
    _id: ObjectId('6734934cf579879e440d8190'),
    name: 'pranav',
    age: 32,
    city: 'New York'
  },
  {
    _id: ObjectId('67349394f579879e440d8191'),
    name: 'vinay',
    age: 25,
    city: 'New York'
  }
]

db.employee.find({age:{$gt:30}})
[
  {
    _id: ObjectId('67349594f579879e440d8192'),
    name: 'pranav',
    age: 32,
    city: 'New York'
  }
]


//make changes array of an Element
//pop will remove from the array last element
db.employee.updateOne({email:'catch@gmail'},{$pop:{location:1}})

db.employee.updateOne({email:'catch@gmail'},{$push:{location:"FL"}}

)

db.employee.updateOne({email:'catch@gmail'},{$addToSet:{location:"FL"}})
//if element not there that will add otherwise not add push
db.employee.getindexes()
db.employee.dropindexes("indexname")
db.employee.count()
db.employee.count({department:"IT"})
db.employee.distinct("department")


db.employee.aggregate([{$project:{_id:0,name:1,email:1,department:1,salary:1}}])
[
  {
    name: 'John',
    email: 'john@gmail.com',
    department: 'IT',
    salary: 1456
  },
  {
    name: 'vann',
    email: 'vann@gmail.com',
    department: 'IT',
    salary: 1456
  },
  {
    name: 'wion',
    email: 'wiongmail.com',
    department: 'HR',
    salary: 25000
  }
]
//check users
db.getUsers()
//mongosh "mongodb://john:1234@localhost:27017/ecomm"
//john username  1234 password

//create new users
db.createUser({
    ... user:"mike",
    ... pwd:"1234",
    ... roles:[role:"readWrite",db:"ecomm"]
...});

folder Data 
replication 
data1-primary 
data2-secondary
data3-secondary