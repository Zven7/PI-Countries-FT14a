import './ButtonFO.css';

export default function SortAlpha(props) {



    return (
        <div id="SortByAlpha">
            <select name="SortByAlpha" >
                <option value="continent">A to Z</option>
                <option value="activity">Z to A</option>
            </select>
        </div>
    )
}