import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices";


export const UserMenu = () => {
    const user = useSelector((state => state.user.isLoggedIn()))
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <>
            <h2>Welcome! {user}</h2>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}