import { Form } from "components/Form";
import { useSelector } from "react-redux";
import { UserMenu } from "components/WelcomeComponent";

export const LoginPage = () => {
    const isLoggedIn = useSelector(state=>state.authUser.isLoggedIn)

    return (
        <>
        {isLoggedIn ? (<UserMenu/>) : (<Form/>)}
        </>
        ) 
}