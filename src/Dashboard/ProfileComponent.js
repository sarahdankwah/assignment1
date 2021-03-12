function ProfileComponenet (){
    return(
    
               <div>
                   <div>ProfileComponenet</div>
                   <h1>Firstname:{props.firstname}</h1>
                   <h2>{props.lastname} </h2>
                   <h2>Email:{props.email}</h2>
                   <h2>Dateofbirth:{props.dateofbirth}</h2> 
                   <h2>Mobile:{props.mobile}</h2>
               </div>
        
            )
        }
export default ProfileComponenet;