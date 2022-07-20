import { Component } from "react";

class HeadCards extends Component {

    state = {

    }


    render () {

        return(

            <div className="row">
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon purple">
                                        <i className="iconly-boldShow"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="text-muted font-semibold">{this.props.card1Name}</h5>
                                    <h4 className="font-extrabold mb-0">{this.props.card1Value}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon blue">
                                        <i className="iconly-boldProfile"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="text-muted font-semibold">{this.props.card2Name}</h5>
                                    <h4 className="font-extrabold mb-0">{this.props.card2Value}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon green">
                                        <i className="iconly-boldAdd-User"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="text-muted font-semibold">{this.props.card3Name}</h5>
                                    <h4 className="font-extrabold mb-0">{this.props.card3Value}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon red">
                                        <i className="iconly-boldBookmark"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="text-muted font-semibold">{this.props.card4Name}</h5>
                                    <h4 className="font-extrabold mb-0">{this.props.card4Value}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HeadCards;