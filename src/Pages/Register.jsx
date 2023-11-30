import { useState } from 'react'
import axiosInstance from '../api/axios'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');
  const regex_password = /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9]){8,16}/

  function onSignup() {
    if (name.trim().length == 0 || email.trim().length == 0 || password.trim().length == 0 || Repassword.trim().length == 0) {
      toast.error('Please Fill all the field')
    } else {
      if (regex_password.test(password) == false) {
        toast.error('Use strong password')
      } else if (password !== Repassword) {
        toast.error("Password doesn't match")
      } else {
        handleSubmit()
      }
    }
  }

  async function handleSubmit() {
    try {
      axiosInstance.post('/register', { name, email, password }).then((res) => {
        console.log(res.data);
        if (res.data.errmsg) {
          toast.error(res.data.errmsg)
        } else {
          toast.success(res.data.message)
          setTimeout(() => {
            navigate('/login')
          }, 3000)
        }
      })
    } catch (error) {
      console.error();
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name" name="name" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setRePassword(e.target.value)}
                  id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button onClick={onSignup} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link onClick={navigate('/login')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login to your Account</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register