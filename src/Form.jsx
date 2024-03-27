const Form = (props) => {
    return(
        <>
        <form onSubmit={props.onClick}>
            <table>
            <tbody>
                <tr>
                <td><label>First Name</label></td>
                <td><input type="text" name="firstname" required/></td>
                </tr>
                <tr>
                <td><label>Last Name</label></td>
                <td><input type="text" name="lastname" required/></td>
                </tr>
                <tr>
                <td><label>Email</label></td>
                <td><input type="email" name="email" required/></td>
                </tr>
                <tr>
                <td><label>Address</label></td>
                <td><input type="text" name="address" required/></td>
                </tr>
                <tr>
                <td><input type="submit"/></td>
                </tr>
            </tbody>
            </table>
        </form>
        </>
        
    )
}

export default Form;