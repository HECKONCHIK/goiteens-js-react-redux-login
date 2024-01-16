import { Outlet, NavLink } from "react-router-dom";


export const App = () => {
  return (
  <>
  <NavLink to='/login'>Log In</NavLink>
  <Outlet></Outlet>
  </>
  )
};
