import signupImg from "../assets/Images/signup.webp"
import Template from '../components/core/Auth/Template.jsx'
function Signup() {
  return (
    <Template
      title="Join millions of learners mastering their goals with Study Notes."
      description1="Grow skills that open doors today and shape your tomorrow."
      description2="Invest in learning today to secure your tomorrow."
      image={signupImg}
      formType="signup"
    />
  )
}
export default Signup