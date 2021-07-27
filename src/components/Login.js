import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"
import { actionTypes } from "../reducer"
import { useStateValue } from "../Statetprovider"
import "./Login.css"

const Login = () => {
    const [{user}, dispatch] = useStateValue()
    const signin = () => {
        auth.signInWithPopup(provider).then(result=>dispatch({
            type: actionTypes.SET__USER,
            user: result.user
        })).catch((err)=> alert(err.message))
    }
    return (
        <div className="login">
            <h1>Welcom to our Blog App!</h1>
            <Button variant="contained" color="primary" onClick={signin}>
                Sign in with Google
            </Button>
        </div>
    )
}

export default Login
