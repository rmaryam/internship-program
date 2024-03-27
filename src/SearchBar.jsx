const SearchBar = (props) => {

    return(
        <>
        <form onSubmit={props.onClick}>
            <input name="searchtext"/>
            <input type="submit" value="Search"/>
        </form>
        </>
    )

}

export default SearchBar;