import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/animation/registerAnimation.json"

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        //error
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-48 h-48">
     <Lottie animationData={registerAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Register;