import React, { useEffect } from "react";
import "../styles/AdminPage.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";

function AdminPage() {

  const openSideBar = () => {
    document.querySelector(".admin").classList.add("active");
  };

  const closeSideBar = () => {
    document.querySelector(".admin").classList.remove("active");
  };

  const history = useHistory();

  const directToHome = () => {
    history.push("/");
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="admin" style={{ marginTop: "55px" }}>
      <div className="sidebar">
        <div className="bg_shadow"></div>
        <div className="sidebar__inner">
          <div className="close">
            <i className="fas fa-times" style={{color: "white"}} onClick={closeSideBar}></i>
          </div>
          <div className="profile_info">
            <div className="profile_img">
              <img src="https://i.imgur.com/A1Fjq0d.png" alt="profile_img" />
            </div>
            <div className="profile_data">
              <p className="name">Alex John</p>
              <p className="role">UI Developer</p>
              <button
                className="submit profile"
                type="submit"
                align="center"
                data-aos="fade-right"
                data-aos-duration="800"
                // onClick={directToHome}
              >
                Update Profile
              </button>
            </div>
          </div>
          {/* <ul class="siderbar_menu">
            <li>
              <a href="#">
                <div class="icon">
                  <i class="fas fa-laptop"></i>
                </div>
                <div class="title">Dashboard</div>
              </a>
            </li>
            <li>
              <a href="#" class="active">
                <div class="icon">
                  <i class="fas fa-newspaper"></i>
                </div>
                <div class="title">Jobs</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="fas fa-file-alt"></i>
                </div>
                <div class="title">Documents</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="fas fa-cog"></i>
                </div>
                <div class="title">Settings</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="title">Help</div>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <button
        className="submit user"
        type="submit"
        // align="right"
        data-aos="fade-down-right"
        data-aos-duration="800"
        onClick={openSideBar}
      >
        <i className="fas fa-user-edit" style={{ color: "white" }}></i>
      </button>
      <h2
        style={{ borderBottom: "2px solid blueviolet",textAlign: "center" }}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Super-Admin Panel
      </h2>
      <p data-aos="fade-up" data-aos-duration="800">
        Welcome to super-admin panel!
      </p>
      <button
        className="submit logout"
        type="submit"
        align="right"
        data-aos="fade-down-left"
        data-aos-duration="800"
        onClick={directToHome}
      >
        Log out
      </button>

      <div className="admin-img">
        <div className="admin-imgs" data-aos="zoom-in" data-aos-duration="200">
          <Link to="/superadmin/addEmployee" className="hover">
            <img src="/images/Employee.svg" alt="" className="admins" />
          </Link>
          <p className="des">Add Employee</p>
        </div>

        <div className="admin-imgs" data-aos="zoom-in" data-aos-duration="600">
          <Link to="/superadmin/addTeam" className="hover">
            <img src="/images/Team.svg" alt="" className="admins" />
          </Link>
          <p className="des">Add Team</p>
        </div>

        <div className="admin-imgs" data-aos="zoom-in" data-aos-duration="1000">
          <Link to="/superadmin/addMember" className="hover">
            <img src="/images/Member.svg" alt="" className="admins" />
          </Link>
          <p className="des">Add Member</p>
        </div>

        <div className="admin-imgs" data-aos="zoom-in" data-aos-duration="1400">
          <Link to="/superadmin/assignProject" className="hover">
            <img src="/images/Project.svg" alt="" className="admins" />
          </Link>
          <p className="des">Assign Project</p>
        </div>

        <div className="admin-imgs" data-aos="zoom-in" data-aos-duration="1800">
          <Link to="/superadmin/progressReport" className="hover">
            <img src="/images/Report.svg" alt="" className="admins" />
          </Link>
          <p className="des">View Progress Report</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
