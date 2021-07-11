import './ButtonFO.css';

export default function SortPopulation(props) {

    return (
        <div id="SortByPopulation">
            <select name="SortByPopulation" >
                <option value="FilterDefault" selected>Population:</option>
                <option value="continent">Ascending</option>
                <option value="activity">Descending</option>
            </select>
        </div>
    )
}