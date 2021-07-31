
const CardBox = (props) => {

    return(
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.data.director}</h6>
                <p className="card-text text-wrap">{props.data.opening_crawl}</p>
                <p>Producer : {props.data.producer}</p>
                <span>Release : {props.data.release_date}</span>
                
            </div>
        </div>
    )
}

export default CardBox;