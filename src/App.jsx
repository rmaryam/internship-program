import { useEffect, useState} from "react"
import UserTable from "./UserTable"
import Form from "./Form";
import SearchBar from "./SearchBar";


function App() {

const [users,setUsers] = useState([]);
const [searchValue, setSearchValue]=useState('');
const [filteredUsers, setFilteredUsers] = useState([]);


const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newUser = {
    firstName: formData.get('firstname'),
    lastName: formData.get('lastname'),
    email: formData.get('email'),
    address: formData.get('address')
  }
  setUsers([...users,newUser]);
  event.target.reset();
}

const handleDeletion = (index) =>{
  /*when the data is filtered the index returns the value of filtered data
  so we will first obtain the original index and then will remove the 
  entry from filtered as well as original user array*/
  const originalIndex = users.findIndex(user => 
    user.firstName === filteredUsers[index].firstName && user.lastName === filteredUsers[index].lastName);
  const updatedUsers=[...filteredUsers];
  updatedUsers.splice(index,1);
  setFilteredUsers(updatedUsers);
  const originalUsers = [...users];
  originalUsers.splice(originalIndex,1);
  setUsers(originalUsers);
}

const handleSearch = (e) => {
  e.preventDefault();
  const searchFormData = new FormData(e.target);
  const searchText = searchFormData.get('searchtext');
  setSearchValue(searchText);
  
}

useEffect(()=>{
  const tempFilteredUsers = users.filter((user) => {

    return (
      user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  setFilteredUsers(tempFilteredUsers);
},[searchValue,users])

  return (
    <>

     <Form onClick={handleSubmit}/>
     <SearchBar onClick={handleSearch}/>      
     <UserTable users={filteredUsers} onDelete={handleDeletion}/>
      
    </>
  )
}

export default App

