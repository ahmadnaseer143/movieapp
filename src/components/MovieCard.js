import React from 'react'
const MovieCard = ({Poster,Title,Year}) => {
    return (
        <div className="col py-4">
            <div className="card imge mx-auto">
                <img src={Poster} alt="Card" className={Title}/>
                <div className="card-body">
                    <span className="card-text px-4">{Title}</span>
                    <span className="card-text">{Year}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
