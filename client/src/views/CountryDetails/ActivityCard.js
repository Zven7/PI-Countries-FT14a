const ActivityCard = (props) => {

    let difficulty = '';

    switch(props.difficulty){
        case '1':
            difficulty = 'Very Easy';
            break;
        case '2':
            difficulty = 'Easy';
            break;
        case '3':
            difficulty = 'Medium';
            break;
        case '4':
            difficulty = 'Hard';
            break;
        case '5':
            difficulty = 'Very Hard';
            break;
        default:
            difficulty = 'Not Set'
            break;
    }


    return (
        <div className='activityCardWrapper'>
            <div id='actCardTitle'><h1>{props.name}</h1></div>
            <hr id='cardHr' />
            <h3>Duration: {props.duration}hs</h3>
            <h3>Season: {props.season}</h3>
            <h3>Difficulty: {difficulty}</h3>
        </div>
    )
}

export default ActivityCard;