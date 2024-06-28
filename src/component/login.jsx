import {  useState } from 'react';
import axios from 'axios';

function Logi(){
                const[result,setResult]=useState(0);
                const[username,setUsername]=useState('');
                const[password,setPassword]=useState('');
                const[repassword,setRepassword]=useState('');
                const [error, setError] = useState(false);

                function handleUsername(e){
                    setUsername(e.target.value)
                }
                function handlePassword(e){
                    setPassword(e.target.value)
                }
                function handleRepassword(e){
                    setRepassword(e.target.value)
                }
               async function handleSubmit(e){
                    
                        if(password==repassword)
                            {
                                setResult({username,password,repassword})
                                setError(false)
                                const response = await axios.post('http://localhost:3001/login',
                              {
                                username,
                                password
                            }
                        )

                            console.log(response)
                        }
                            else
                            {
                                setError(true)
                            }

                    
                };

    return(
      
        <div class="login" style={{display:'flex',flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',marginTop:'50px'}}>
    
        
        <div class="box" style={{ border: '1px solid',
            borderRadius: '10px solid black',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '5px',backgroundColor:'grey',borderWidth:'5px',borderRadius:'15px'}}>
            <h1>LOGIN</h1>

        <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
            <label for="">user name</label>
        <input type="text"  placeholder="enter your name" onChange={handleUsername}/>
       

        
        </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">password</label>
    <input type="password"placeholder="enter your password" onChange={handlePassword}/>
    
    </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">re-password</label>

    <input type="password"placeholder="enter your re-password" onChange={handleRepassword}/>
    </div>
    
    <button style={{backgroundColor:'white',color:'darkgrey',width:'55px' ,alignContent:'center'}} onClick={handleSubmit}>LOGIN</button>
    
    </div>
     USERNAME = {result.username}<br/>
     PASSWORD={result.password}<br/>
     REPASSWORD={result.repassword}<br/>
     {error== true?<h1>invalid</h1>:''}
</div>


     
    )
}
export default Logi;