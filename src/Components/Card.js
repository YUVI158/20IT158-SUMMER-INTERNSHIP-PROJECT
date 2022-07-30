
import './Card.css';

const Card=( props )=> {
    return (
        <>
            <div className='sect'>
            <div className="card">
                <img src={process.env.PUBLIC_URL + `${props.source}`} className="r-test1" alt='' />
                <h3>{props.name}</h3>
            </div>
            </div>
        </>
    );
}

export default Card;
