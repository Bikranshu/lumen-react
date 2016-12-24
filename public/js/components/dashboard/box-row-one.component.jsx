import React, { Component } from 'react';

class BoxRowOne extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">CPU Traffic</span>
                            <span className="info-box-number">90<small>%</small></span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">41,410</span>
                        </div>
                    </div>
                </div>

                <div className="clearfix visible-sm-block"></div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Sales</span>
                            <span className="info-box-number">760</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">New Members</span>
                            <span className="info-box-number">2,000</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxRowOne