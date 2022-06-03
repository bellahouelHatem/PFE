import react,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import './loginpage.css';
import {userLogin} from '../../Services/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import jwtDecode from 'jwt-decode';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

const LoginPage=({loading,error,...props})=>{
    const languages = [
        {
          code: 'fr',
          name: 'Français',
          country_code: 'fr',
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'gb',
        },
        { 
          code: 'ger',
          name: 'deutsch',
          country_code: 'de',
        },
      ]
      
    const GlobeIcon = ({ width = 24, height = 24 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className="bi bi-globe"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
      </svg>
    )
    const currentLanguageCode = cookies.get('i18next') || 'en'
      const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
      const { t } = useTranslation()



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
                const { token } = response.data;
                console.log(token)
                localStorage.setItem('token', token,15000);
                const Token = jwt_decode(token);
                console.log(Token["iss"])
                props.setUser(response.data);
                if (Token["iss"]=== "Administrator"){
                    props.history.push('/Home');
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
    useEffect(()=>{
        const token = localStorage.getItem("token");
        
          if(token== null){
            props.history.push('/'); 
          }else{
            const Dtoken =jwtDecode(token);
            console.log(Dtoken)
            if (Dtoken["iss"]=== "Administrator"){
                props.history.push('/PageAdmin');
            }else if(Dtoken["iss"]=== "Inspector"){
                props.history.push('/PageInspector');
            }else if(Dtoken["iss"]=== "ServiceProvider"){
                props.history.push('/PageServiceProvider');
            }}
      },[])

    return (
        <div className="login-page">
            
                                            
        <section className="h-100">
        <div className="container h-100">
       
            <div className="row justify-content-md-center h-100">
            <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                 <button
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
                <div className="card-wrapper">
                    

                    <div className="card fat">
                        <div className="card-body">

                            <h4 className="card-title">Login</h4>
                            
                            
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="email">{t("Email")}</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                    
                                        <div className="invalid-feedback">
                                            UserId is invalid
                                        </div>
                                </div>

                                <div className="form-group">
                                    <label>{t("PAss")}
                                    </label>
                                    <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>
                                <div>
                                    <a href="registration" className="float-right">
                                        Sign in
                                    </a>
                                    
                                </div>
                                <div><a href="ForgotePwd" className="float-right">
                                            Forgot Password?
                                        </a></div>
                                

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