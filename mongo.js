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



db.employee.find(
    {
       department:{
        $not{$eq:"HR"}
    }//lessthan equal
    }
   
)



db.employee.find(
    {
       email:{$exists:true}
    }
   
)
//$exists
//eq means equal
//$in and $nin