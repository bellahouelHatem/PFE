import react,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import './loginpage.css';
import {userLogin} from '../../Services/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';

const LoginPage=({loading,error,...props})=>{



    const [values, setValues] = useState({
        // userName: '',
        // password: ''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log("test4");
        props.authenticate();
        console.log(values)

        userLogin(values).then((response)=>{

            console.log(response.data);
            if(response.status===200){
                props.setUser(response.data);
                props.history.push('/Page');
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{
console.log(err)
            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log(err.response.data);
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            } 
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
        //console.log("Loading again",loading);

        
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
                                    <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                     </div>
                                </div>
                                <div>
                                    <a href="registration" className="float-right">
                                        Sign in
                                    </a>
                                </div>
                                

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Login
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

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);