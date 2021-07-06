import './ButtonFO.css';

export default function ButtonFO(props) {
    return (
        <div id="filterBy">
            <select name="filterBy" >
                <option value="FilterDefault" selected>Filter By:</option>
                <option value="continent">Continent</option>
                <option value="activity">Activity</option>
            </select>
        </div>
    )
}