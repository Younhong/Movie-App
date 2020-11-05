import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state) {
            const {
                location: {
                    state: {
                        title, year, summary, genres, poster
                    }
                }
            } = this.props;
            return (
                <div className="detail">
                    <img src={poster} 
                        alt={title} 
                        title={title} />
                    <div className="detail_data">
                        <h3 className="detail_title">{title}</h3>
                        <h5 className="detail_year">{year}</h5>
                        <ul className="detail_genres">
                            {genres.map((genre, index) => 
                                <li key={index} className="genres_genre">
                                    {genre}
                                </li>)}
                        </ul>
                        <p className="detail_summary">{summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;