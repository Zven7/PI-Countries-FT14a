import { Link } from 'react-router-dom';
import './CreateAct.css';


export default function CreateAct() {
    return (
        <Link id='actButtonFF' to='/activity'>
            <button id='actButton' type='button'>
                Create Activity
            </button>
        </Link>
    )
}

