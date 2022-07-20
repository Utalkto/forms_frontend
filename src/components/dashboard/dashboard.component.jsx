import { Component } from "react";

import HeadCards from "../cards/HeaderCards.component";

class Dashboard extends Component {

    state = {
        totalForms : 0,
        activeForms : 0,
        visitFromForms : 0,
        dataFromForms : 0,
    }


    componentDidMount() {

    }


    render() {
        return (
            <div id="app">
                <div id="main">

                    <div className="page-heading">
                        <h3>Form Dashboard</h3>
                    </div>
                    <div className="page-content">
                        <section className="row">
                            <div className="col-12 col-lg-9">

                                <HeadCards 
                                card1Value={this.state.totalForms}
                                card1Name={"Total Forms"}
                                
                                card2Value={this.state.activeForms}
                                card2Name={"Active Forms"}

                                card3Value={this.state.visitFromForms}
                                card3Name={"Forms Visits"}

                                card4Value={this.state.dataFromForms}
                                card4Name={"Data From Forms"}

                                />
                                
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Profile Visit</h4>
                                            </div>
                                            <div className="card-body">
                                                <div id="chart-profile-visit"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-xl-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Profile Visit</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="bi text-primary" width="32" height="32" fill="blue"
                                                                style={{width:"10px"}}>
                                                                {/* <use
                                                                    xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                                                            </svg>
                                                            <h5 className="mb-0 ms-3">Europe</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">862</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <div id="chart-europe"></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="bi text-success" width="32" height="32" fill="blue"
                                                                style={{width:"10px"}}>
                                                                {/* <use
                                                                    xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                                                            </svg>
                                                            <h5 className="mb-0 ms-3">America</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">375</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <div id="chart-america"></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="bi text-danger" width="32" height="32" fill="blue"
                                                                style={{width:"10px"}}>
                                                                {/* <use
                                                                    xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                                                            </svg>
                                                            <h5 className="mb-0 ms-3">Indonesia</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">1025</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <div id="chart-indonesia"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-8">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Latest Comments</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-lg">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Comment</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="col-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar avatar-md">
                                                                            <img src="assets/images/faces/5.jpg" />
                                                                        </div>
                                                                        <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                                    </div>
                                                                </td>
                                                                <td className="col-auto">
                                                                    <p className=" mb-0">Congratulations on your graduation!</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar avatar-md">
                                                                            <img src="assets/images/faces/2.jpg" />
                                                                        </div>
                                                                        <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                                    </div>
                                                                </td>
                                                                <td className="col-auto">
                                                                    <p className=" mb-0">Wow amazing design! Can you make another
                                                                        tutorial for
                                                                        this design?</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <div className="card">
                                    <div className="card-body py-4 px-5">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-xl">
                                                <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                            </div>
                                            <div className="ms-3 name">
                                                <h5 className="font-bold">John Duck</h5>
                                                <h6 className="text-muted mb-0">@johnducky</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Recent Messages</h4>
                                    </div>
                                    <div className="card-content pb-4">
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="assets/images/faces/4.jpg" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">Hank Schrader</h5>
                                                <h6 className="text-muted mb-0">@johnducky</h6>
                                            </div>
                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="assets/images/faces/5.jpg" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">Dean Winchester</h5>
                                                <h6 className="text-muted mb-0">@imdean</h6>
                                            </div>
                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="assets/images/faces/1.jpg" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">John Dodol</h5>
                                                <h6 className="text-muted mb-0">@dodoljohn</h6>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <button className='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Start
                                                Conversation</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Visitors Profile</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="chart-visitors-profile"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer>
                        <div className="footer clearfix mb-0 text-muted">
                            <div className="float-start">
                                <p>2021 &copy; Mazer</p>
                            </div>
                            <div className="float-end">
                                <p>Crafted with <span className="text-danger"><i className="bi bi-heart"></i></span> by <a
                                        href="http://ahmadsaugi.com">A. Saugi</a></p>
                            </div>
                        </div>
                    </footer>   
                
                </div>
            </div>
        );
    }
}


export default Dashboard;