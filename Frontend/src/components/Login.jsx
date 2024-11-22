import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";


function Login() {
  const {setAuthtUser} = useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) =>{

    axios.post('/api/user/login',data, { withCredentials: true })
    .then((res)=>{
      if(res.data)
      {
        console.log(res.data)
        localStorage.setItem("messenger",JSON.stringify(res.data))
        setAuthtUser(res.data)

      }
    })
    .catch((err)=>{
      if(err.response)
      {
        alert('Error: ' + err.response.data.error)
      }
    })
  }
  return (
    <>

      <div className="flex w-screen h-screen items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}   className="w-[40%] border-[3px] bg-gray-700 rounded-lg border-black px-6 py-20">
          <h1 className="text-3xl pb-6 px-4">Login with your Account </h1>

          <div className="p-2 flex flex-col gap-3">

          <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
              </label>
                {errors.email && <span className="text-red-600 text-sm px-3 font-semibold">This field is required</span>}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type="password" className="grow" placeholder="password" {...register("password", { required: true })} />
            </label>
              {errors.password && <span className="text-red-600 text-sm px-3 font-semibold">This field is required</span>}

            {/* text & button */}
            <div className="flex flex-col pt-5">
            <input className="btn btn-neutral hover:bg-gray-950 hover:text-white" type="submit" value="login" />
            <p className="p-2">Don't have any Account?<Link to={'/signup'} className=" text-slate-50" href="">Signup</Link></p>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Login
