import { useDispatch } from "react-redux";
import { login } from "../redux/slices";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(event.currentTarget.elements.name.value))
        navigate('/dashboard', {replace: true})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name" 
            />
            <button type='submit'>Log In</button>
        </form>
    )
}