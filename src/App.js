import React, { useState } from 'react';
import Preloader from './components/PreLoader';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'

const App = () => {
  const [users, setuser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadusers = async () => {

    const res = await fetch("https://reqres.in/api/users?page=1")
    const resjson = await res.json();
    setuser(resjson.data)
    console.log(resjson.data)


  }

  const func = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      loadusers()
    }, 3000)
  }

  if (loading) return (
    <div class="mt-5 text-center">
      <Preloader />
    </div>
  )
  return (

    <>

      <nav className="Header" >
        <ul>
          <li>Users</li>
          <button onClick={func}>GetUsers</button>
        </ul>
      </nav>

      <>
        {users ? users.map(({ id, email, avatar, first_name, last_name }) => (
          <div className="Cards">
            <div className="Carts">
              <img src={avatar} alt={avatar} className="CardAvatar"></img>
              <h1 className="CardName">{first_name + " " + last_name}</h1>
              <p className="CardEmail">{email}</p>
              <p>User_ID: #{id}</p>
            </div>
          </div>
        )
        ):
        <p className="text-light">loading...</p>}
      </>
    </>
      );
}


      export default App;