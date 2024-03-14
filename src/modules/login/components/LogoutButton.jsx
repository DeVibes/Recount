import { useMyAuth } from "../../auth"

export const LogoutButton = () => {
  const { handleLogOut } = useMyAuth()
  return (
    <button
      className="flex justify-between items-center rounded-md bg-black"
      onClick={handleLogOut}
    >
      <span className="text-lg text-white px-3 py-1">Logout</span>
    </button>
  )
}