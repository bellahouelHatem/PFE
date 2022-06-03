import axios from "axios";
import { Alert } from "bootstrap";
import {useState } from "react";
import { Spinner } from "reactstrap";

const PwdEdit=({loading,error,...props})=>{
    



    const [values, setValues] = useState({
        userName: '',
        password:""
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const body ={password:values.password};
        console.log(body)

        axios.put("http://localhost:8081/api/user/"+values.userName,body).then((response)=>{
            props.history.push("/")
            console.log(response.data);
              }).catch((err)=>{
                 console.log(err.message)});      
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
                            
                            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="email">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                    
                                        <div className="invalid-feedback">
                                            UserId is invalid
                                        </div>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                    
                                </div>{values.password&&
                                <div className="form-group">
                                    <label>Confirm password</label>
                                    <input  title="please rechek the paasword" id="cpassword" type="password"  errorMessage="required" className="form-control" minLength={8}  onChange={handleChange} pattern={values.password} name="cpassword" required/>
                                    <span id="err1" class="span">Error: Enter a valid email address</span>               
                                </div>}
                                <div className="form-group m-0">
                                   <button type="submit"  className="btn btn-primary">
                                        update password
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


export default PwdEdit;