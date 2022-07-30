
import './Card1.css';

const Card1=( props )=> {
    return (
        <>

            <img src={process.env.PUBLIC_URL + `${props.source}`} className="mt-4 mb-5 r-test1" />
                <h3 className="col-7 mx-5 border mb-3 fts2 fw1 fs4 mx-auto">{props.name}</h3>
                <p className="px-4 mb-4 pb-1 fts2 fw3 fs5 mx-auto">Our developers have experience building websites for almost every industry and virtually every platform, including WordPress, Drupal.</p>

        </>
    );
}

export default Card1;
