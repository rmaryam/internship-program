import UserTable from "./UserTable"

function App() {

  const users = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        address: "123 Main St, City, Country"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        address: "456 Elm St, Town, Country"
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      address: "123 Main St, City, Country"
  },
  {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      address: "456 Elm St, Town, Country"
  }
];
  

  return (
    <>
     <UserTable users={users}/>
      
    </>
  )
}

export default App
