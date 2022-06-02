import axios from "axios";
import { Alert } from "bootstrap";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { userLogin } from "../../Services/authenticationService";

const ForgotePwd=({loading,error,...props})=>{



    const [values, setValues] = useState({
        userName: ''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();

        axios.post("http://localhost:8081/api/v1/ForgotPassword/"+values.userName).then((response)=>{
            

            console.log(response.data);
            if(response.status===200){
                const { token } = response.data;
                console.log(token)
                localStorage.setItem('token', token,15000);
                const Token = jwtDecode(token);
                console.log(Token["iss"])
                props.setUser(response.data);
                if (Token["iss"]=== "Administrator"){
                    props.history.push('/PageAdmin');
                }else if(Token["iss"]=== "Inspector"){
                    props.history.push('/PageInspector');
                }else if(Token["iss"]=== "ServiceProvider"){
                    props.history.push('/PageServiceProvider');
                }
                
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{
console.log(err)
             });      
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ",loading);
    

    return (
        <div className="login-page">
            
                                            
        <section className="h-100">
        <div className="container h-100">
       
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">

                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="email">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                    
                                        <div className="invalid-feedback">
                                            UserId is invalid
                                        </div>
                                    
                                    
                                    
                                </div>

                                <div className="form-group">
                                    <label>Password
                                        <a href="forgot.html" className="float-right">
                                            Forgot Password?
                                        </a>
                                    </label>
                                </div>
                                <div>
                                    <a href="registration" className="float-right">
                                        Sign in
                                    </a>
                                </div>
                                

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Send Mail
                                        {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                                    </button>
                                </div>
                            </form>
                            { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )


    
}


export default ForgotePwd;