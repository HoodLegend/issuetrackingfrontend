import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "remixicon/fonts/remixicon.css";
import "simple-datatables/src/css/style.css";
import "quill/dist/quill.js";
import "tinymce/tinymce.js";
import { useEffect } from "react";
import { Main } from "../assets/js/main.js";
import profile from "../assets/images/user-avatar.png";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  

  useEffect(() => {
    // Initialize the sidebar toggle when the component mounts
    Main();

    // return () => {
    //   // This is an empty function since we have no specific cleanup tasks
    // };
  });

  return (
    <div>
      {/* ======= Header ======= */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Dashboard</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* End Logo */}
    <Outlet />

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* End Search Bar */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="/">
                <i className="bi bi-search"></i>
              </a>
            </li>
            {/* End Search Icon */}

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="/"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
              {/* End Notification Icon */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="/">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="/"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </a>
              {/* End Messages Icon */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="/">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="/">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="/">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <a href="/">Show all messages</a>
                </li>
              </ul>
              {/* End Messages Dropdown Items */}
            </li>
            {/* End Messages Nav */}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="/"
                data-bs-toggle="dropdown"
              >
                <img src={profile} alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  john doe
                </span>
              </a>
              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span >Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
      </header>
      {/* End Header */}

      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* End Dashboard Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i>
                  <span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i>
                  <span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i>
                  <span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i>
                  <span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i>
                  <span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i>
                  <span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i>
                  <span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i>
                  <span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i>
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i>
                  <span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i>
                  <span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i>
                  <span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Components Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-journal-text"></i>
              <span>Forms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Forms Nav */}

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
          {/* End Profile Page Nav */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
          {/* End Contact Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar */}

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section dashboard">
          <div className="row">
            {/* 
      Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* Customers Card */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Customers <span>| This Year</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Customers Card */}

                {/* Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Recent Sales <span>| Today</span>
                      </h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="/">#2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="/" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="/" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="#" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="#" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Recent Sales */}
              </div>
            </div>
            {/* End Left side columns */}

            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum{" "}
                        <a href="#" className="fw-bold text-dark">
                          explicabo officiis
                        </a>{" "}
                        beatae
                      </div>
                    </div>
                    {/* End activity item  */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    {/* End activity item */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    {/* End activity item  */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe{" "}
                        <a href="#" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>{" "}
                        tempore
                      </div>
                    </div>
                    {/* End activity item  */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    {/* End activity item */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                    {/* End activity item */}
                  </div>
                </div>
              </div>
              {/* End Recent Activity */}
            </div>
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      {/* End #main */}

      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Turing Foods Ltd</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>

      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Dashboard;
