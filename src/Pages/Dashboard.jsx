import { userLogout } from '../store/slice/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  function logout() {
    dispatch(userLogout())
    navigate('/login')
  }
  const dispatch = useDispatch()
  const userName = useSelector(state => state.User.name)
  return (
    <section className="bg-gray-900 text-white">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Hello,{userName}
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard