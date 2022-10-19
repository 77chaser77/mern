import logo from './logo.svg';
import './App.css';
import{useState, useEffect} from 'react'
import axios from 'axios'
import User from './components/User';




function App() {

  const [listOfUsers, setlistOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      console.log(response.data)
      setlistOfUsers(response.data)
      console.log(listOfUsers)
    })
  }, [listOfUsers])

  const createUser = () => {
    axios
      .post('http://localhost:3001/createUser', { name, age, username })
      .then((response) => {
        alert('User Created!')
        setlistOfUsers([...listOfUsers, { name, age, username }])
      })
  }
    
  return (
    <div className="App">
      <h1>사용자 리스트</h1>
      <div class="list">
        {listOfUsers.map((user) => {
          return (
            <div className='grid'>
              <div>
                <p>
                  {user.name}
                </p>
              </div>
              <User> user={user} </User>
              <h3>
                Name: {user.name}, Age: {user.age}, Username: {user.username}<br/>
                User_id: {user._id}
              </h3>
            </div>
          )
        })}
      </div>


      <div className='input'>
        <input type="text" placeholder='Name' onChange={(event) => setName(event.target.value)}></input>
        <input type="number" placeholder='Age' onChange={(event) => setAge(event.target.value)}></input>
        <input type="text" placeholder='Username' onChange={(event) => setUsername(event.target.value)}></input>
      </div>
      <div>
        <button onClick={createUser}>사용자 등록하기</button>
      </div>
        
      
    </div>  
  )
}

export default App;
