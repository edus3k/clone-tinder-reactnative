import React, { useState, useEffect} from "react";

import StacksUsers from '@routes/StacksUsers';
import StacksAuth from '@routes/StacksAuth';

const StacksApp = ()=>{
 
  const [loading, setLoading] = useState(false);
  const { user } = useAuthentication();

  if(!user){
    console.log('users == false');
    return loading == true ? <Loading state={loading}/> : <StacksAuth/> 
  }else{
    console.log('users == true');
    return loading == true ? <Loading state={loading}/> : <StacksUsers/>
  }
}

export default StacksApp;