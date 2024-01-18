import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){

    const isLoggedIn = useSelector((state => state.authUser.isLoggedIn))
    const navigate = useNavigate()

    useEffect((
        navigate('/login', {replace: true})
    ), [isLoggedIn])
    
    return(
        <>
            <div>Dashboard</div>
        </>
    )
}