import './UserTable.css'

const UserTable = ({users}) => {
    return(
        <>
          <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                        
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        
        </>
    )

}

export default UserTable;