
import './Card3.css';
import '../index.css';


const Card3 =( props )=> {
    return (
        <>

            <img src={process.env.PUBLIC_URL + `${props.source}`} className="r-test1 my-4" />
                <h3 className="idp fts2 fw2 fs5  border-dark py-2 col-10 mb-3 mx-auto">{props.name}</h3>
        </>
    );
}

export default Card3;
