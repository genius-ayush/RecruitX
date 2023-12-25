import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
export default function SignUp(){

    return <div>

        
        <center>
            <div style={{
                marginTop : "150px" , 
                marginBottom : "10px"
            }}>
                Wecome to recruitX. SignUp Below</div>


        </center>


            <center>

        <Card variant="outlined" style={{width : "500px" , padding : '20px'}}>

                {/* <div style={{
                border : "2px Solid Black"  ,
                width : "400px",
                padding : "20px"
                }}> */}

                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type='email'/>
                    <br /><br />
                    <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' />
                    <br /><br />
                    <Button size='larger' variant="contained">Sign Up</Button>
                {/* </div> */}
        </Card >
            </center>




        </div>
}
