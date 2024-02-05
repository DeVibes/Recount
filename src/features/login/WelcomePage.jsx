import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/wbg.png'
// import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
    const { loginWithPopup, loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const onLoginClick = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/private"
            }
        });
    }
    return (
        <main className="h-full flex">
            <div className="basis-2/3 self-center">
                <img src={logo} alt='logo'/>
            </div>
            <div className="basis-1/3 self-center ">
                <h1>Auth? {isAuthenticated ? "Yes" : "No"}</h1>
                <LoginSection handleLogin={onLoginClick}/>
                <LogOutButton/>
            </div>
        </main>
    )
}

const LoginSection = ({ handleLogin }) => {
    return (
        <section className=''>
            <h1 className='text-5xl text-center'>Welcome</h1>
            <LoginButton handleLogin={handleLogin}/>
        </section>
    )
}

const LoginButton = ({ handleLogin }) => (
    <button 
        className='flex justify-between items-center rounded-md bg-black'
        onClick={handleLogin}
    >
        <div className="p-4">
            <FcGoogle size={20}/>
        </div>
        <span className="text-xl pr-4">Login with Google</span>
    </button>
)

const LogOutButton = () => {
    const { logout } = useAuth0();
    const handle = async () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        })
    }
    return (
        <button 
            className='flex justify-between items-center rounded-md bg-black'
            onClick={handle}
        >
            <span className="text-xl pr-4">Logout</span>
        </button>
    )
}