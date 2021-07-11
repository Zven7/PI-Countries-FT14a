import './CreateAct.css'
import { Link } from 'react-router-dom'

export default function CreateAct() {
    return (
        <Link id='actButtonFF' to='/activity'>
            <button id='actButton' type='button'>
                Create Activity
            </button>
        </Link>
    )
}

