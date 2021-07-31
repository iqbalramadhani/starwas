import { Component } from "react";
import CardBox from "../../components/cardbox/cardbox";
import SeachBoxComp from "../../components/searchbox/searchbox";
import API from '../../service';
import { filems } from "../../service/Config";
import axios from 'axios';


class Home extends Component {

    state = {
        movie: [],
        actors: [],
        filter: {
            type: 'characters',
            search: ''
        }
    }

    getPostAPI = () => {
        API.getMovie("").then(result => {
            this.setState({
                movie: result.results
            })
            console.log(this.state.movie)
        })

        // API.getActors().then(result => {
        //     this.setState({
        //         comments: result
        //     })
        // })
    }

    componentDidMount() {
        this.getPostAPI();
    }

    eventCreate = (data) => {
        this.setState({
            filter: data
        })
        if (data.type == 'characters') {
            API.getActors(data.search).then(result => {
                this.getMovie(result);
            })
        }
        // console.log(this.state.filter);
    }

    getMovie = (data) => {
        console.log(data)
        let movies = [];
        data.results[0].films.map((ress,idx) => {
            // console.log(ress);
            axios.get(ress).then((response) => {
                // movies[idx] = response.data
                movies.concat(response.data)
                // this.setState({
                //   post: ress.data
                // })

            })
            // API.getData(ress).then(reponse => {
            //     console.log(reponse);
            // })
        });
        // this.setState({
        //     movie: movies
        // });
        console.log(movies);
        // this.state.movie.map(ress => {
        //     console.log(ress);
        // })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5 mb-3">Starwars Web Application</h3>
                <SeachBoxComp createData={this.eventCreate} />
                <div class="row justify-content-center mt-5">
                    {
                        this.state.movie.map(ress => {
                            return <div class="col-md-3"><CardBox data={ress} /></div>
                        })
                        
                    }
                </div>
            </div>


        )
    }
}

export default Home;