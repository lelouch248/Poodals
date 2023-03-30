import React ,{ useState }from "react";
import "../styles/sign.css";
import "../styles/signup.css";
function Signup({ user }) {

    const [values , setvalues] = useState({
        username:"",
        password:"",
    });
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(values);

        await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        setvalues({
            username:"",
            password:"",
        });
    };

    const onChange = (e) => {
        setvalues({...values, [e.target.name]: e.target.value});
    };

  return (

    <div className="signup-container col card">
      <div className="card-body">
        {/* <!-- Makes POST request to /login route --> */}
        <form action="/signup" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="username" onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-dark">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}


export default Signup;