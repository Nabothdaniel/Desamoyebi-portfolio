import { Link } from "react-router-dom"


const Button = ({ children, to }) => {
    
  return (
    <Link to={to}  className="relative rounded-[25px]  font-bold font-poppins bg-border btn shadow-lg px-7 py-4">
        {children}
    </Link>
  ) 
}

export default Button