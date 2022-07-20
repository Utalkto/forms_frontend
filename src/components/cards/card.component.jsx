import { Component } from "react";


class Card extends Component {

    state = {

    }

    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        <h4 className="card-title" style={{fontWeight: "700"}}>{this.props.name}</h4>
                        <p className="card-text">
                            {this.props.description}
                        </p>

                        <div>
                            <p><strong>Number Of Views</strong> {this.props.numberOfViews} </p>
                            <p><strong>Link</strong> {this.props.link} </p>
                            <p><strong>Date Created</strong> {this.props.dateCreated} </p>
                        </div>
                    </div>
                   
                </div>
                <div className="card-footer d-flex justify-content-end" >
                    <button className="btn btn-primary block">View More</button>
                </div>
            </div>
        );
    }
}


export default Card;