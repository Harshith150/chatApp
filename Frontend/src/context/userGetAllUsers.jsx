import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function userGetAllUsers() {
    const [allUsers,setAllUsers] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const getUser = async  ()=>{
            setLoading(true)
            try {
                const token = Cookies.get('token')
                const response = await axios.get('/api/user/getUserProfile',{withCredentials:true,headers:{Authorization:`Bearer ${token}`}})
                setAllUsers(response.data.users)
                setLoading(false)
            } catch (error) {
                console.log("error in userGetAllUsers" + error)
            }
        }
        getUser()
    },[])

  return [allUsers,loading]
}

export default userGetAllUsers
