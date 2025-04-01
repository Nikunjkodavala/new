import React, {  useContext }  from 'react'
import { Userdetails } from '../App'

const ChildC = () => {

  const user = useContext(Userdetails)
  const [loading,setloading] = React.useState(true)
  
  React.useEffect(()=>{
    if(user.length > 0){
      setloading(false)
    }
  },[user])
  
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
       {
        
           user.length > 0 ? 
                   <div key={index} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
                       <h1>{item.analysisUTCTimestamp}</h1>
                   </div>
              : user?.error?.code && <h1>opps! somthing is wrong! </h1>
              
          }
    </div>
  )
}

export default ChildC
