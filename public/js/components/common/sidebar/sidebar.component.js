import React, { Component } from 'react';

class Sidebar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
            <section className="sidebar">
              <div className="user-panel">
                <div className="pull-left image">
                  <img src="js/theme/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                  <p>Alexander Pierce</p>
                  <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
              </div>
              <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                  <input type="text" name="q" className="form-control" placeholder="Search..."/>
                      <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                      </span>
                </div>
              </form>
              <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>
                <li className="active">
                  <a href="/#/dashboard">
                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/#/products">
                    <i className="fa fa-dashboard"></i> <span>Product</span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-files-o"></i>
                    <span>Layout Options</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">4</span>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Boxed</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Fixed</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i> <span>Widgets</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-green">new</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-pie-chart"></i>
                    <span>Charts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Morris</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Flot</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-laptop"></i>
                    <span>UI Elements</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> General</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Icons</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Buttons</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Sliders</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Timeline</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Modals</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-edit"></i> <span>Forms</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> General Elements</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Editors</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-table"></i> <span>Tables</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Data tables</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-calendar"></i> <span>Calendar</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-red">3</small>
                      <small className="label pull-right bg-blue">17</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-yellow">12</small>
                      <small className="label pull-right bg-green">16</small>
                      <small className="label pull-right bg-red">5</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-folder"></i> <span>Examples</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Invoice</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Profile</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Login</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Register</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-share"></i> <span>Multilevel</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                    <li>
                      <a href="#"><i className="fa fa-circle-o"></i> Level One
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                        <li>
                          <a href="#"><i className="fa fa-circle-o"></i> Level Two
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                  </ul>
                </li>
                <li className="header">LABELS</li>
                <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
              </ul>
            </section>
          </aside>
        );
    }
}

export default Sidebar