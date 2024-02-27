import { FcGoogle } from 'react-icons/fc'
import { IconButton, GlassContainer } from '../../../shared/'

export const LoginSection = ({ handleLogin }) => {
  const centerElementStyle =
    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  return (
    <GlassContainer classes={`${centerElementStyle} w-2/3 lg:w-1/3 h-1/2`}>
      <section className="h-full p-3 flex flex-col justify-between">
        <span className="text-4xl lg:text-6xl text-center align-middle text-white">
          Welcome
        </span>
        <span className="text-white text-center text-2xl">
          Take control of your finances.
        </span>
        <p className="text-white text-center">
          Welcome to your one-stop shop for budgeting, tracking, and managing
          your money.
        </p>
        <IconButton text="Login with Google" icon={<LoginIcon />} handleClick={handleLogin} />
      </section>
    </GlassContainer>
  )
}

const LoginIcon = () => <FcGoogle size={20} />
