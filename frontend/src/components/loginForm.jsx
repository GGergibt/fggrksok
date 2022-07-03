import React, {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'


const LoginForm = ({addToken}) => {
    const [email, setEmail] = useState('')
    // const [usernameCheck, setUsernameCheck] = useState(false)
    const [password, setPassword] = useState('')
    // const [tokenCookie, setTokenCookie] = useCookies('')
    const someFunc = () => {
	    console.log("info")
    }

    const submitHandler = async (event) => {
	    event.preventDefault()
	    console.log("username")
	    const requestOptions = {
		    method: 'POST',
		    headers: { 'Content-Type': 'application/json' },

		    body: JSON.stringify({
			    email: email,
			    password: password
		    })
	    }
	    const response = await fetch("http://localhost:8000/users/auth", requestOptions).then((response) => response.json())
	    // const expiresDate = Math.abs(new Date(response.expires).getTime() / 1000)
	    // const dateExpires = new Date(response.expires)
	    // setTokenCookie('tokenCookie', response.token, {expires: dateExpires})

	    addToken(response)
    }


 



    return(
	    <>
	      <div className="form">
		  <div className="form-body mb-6 mt-6 ">
		      <div className="username">
			      <label class="form__label block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Email">Email </label>
			      <input onChange={(event) => {setEmail(event.target.value)}} className="form__input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="Email" placeholder="Email"/>
		      </div>
		      <div className="password">
			  <label className="form__label block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password </label>
			  <input onChange={(event) => {setPassword(event.target.value)}} className="form__input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password"  id="password" placeholder="Password"/>
		      </div>
		      </div>
		  </div>
	      <form onSubmit={submitHandler}>
		  <div  className="footer">
			  { password !== '' && email !== ''?<button type="submit" class="btn">Login</button>: <h1> Введите данные для входа</h1>}
			  
          </div>
	</form>
	    </>
    )
}


export default LoginForm