import './UserTable.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTable = (props) => {
    const users = props.users;
    return(
        <>
          <table className='mainTable'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Delete Records</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td><IconButton onClick={()=>props.onDelete(index)}><DeleteIcon/></IconButton></td>
                    </tr>

                ))}
                
            </tbody>
          </table>
        
        </>
    )

}

export default UserTable;