
const Filter = ({ inputChange, filter }) => {
    return (<label>Find contacts by name
        <input
            value={filter}
            onChange={inputChange}
            type="text"
            name="filter"
        />
    </label>)
}

export default Filter