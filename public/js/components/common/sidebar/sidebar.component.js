import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

// Import custom components
import UserPanel from './user-panel.component';
import Search from './search.component';

class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">

                    <UserPanel/>

                    <Search/>

                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <IndexLink to={'/dashboard'} activeClassName="active"><i
                                className="fa fa-dashboard"></i><span>Dashboard</span>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={'/products'} activeClassName="active"><i
                                className="fa fa-cart-plus"></i><span>Product</span>
                            </IndexLink>
                        </li>
                        <li className="treeview">
                            <IndexLink to={'#'} activeClassName="active"><i
                                className="fa fa-gear"></i><span>Setting</span>
                                <span className="pull-right-container">
                                   <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </IndexLink>

                            <ul className="treeview-menu">
                                <li><Link to={'#'} activeClassName="active"><i className="fa fa-circle-o"></i>Notification</Link></li>
                                <li><Link to={'#'} activeClassName="active"><i className="fa fa-circle-o"></i>Discount</Link></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar