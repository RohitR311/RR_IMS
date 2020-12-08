import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/LeaderPage.css";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";

const LeaderPage = () => {
  const history = useHistory();
  const { team } = useParams();
  const [teamImage, setTeamImage] = useState("");

  const openSideBar = () => {
    document.querySelector(".leader").classList.add("active");
  };

  const closeSideBar = () => {
    document.querySelector(".leader").classList.remove("active");
  };

  const directToHome = () => {
    history.push("/");
  };

  const fetchTeam = async () => {
    const response = await axios.get(
      `http://localhost/IMS/API/TeamName_fetch.php?Team_name=${team}`
    );

    setTeamImage(response.data[0].Team_image);
  };

  console.log(teamImage);

  useEffect(() => {
    fetchTeam();
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="leader"
      style={{
        marginTop: 0,
        paddingTop: "55px",
        backgroundImage: `url(${teamImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sidebar">
        <div className="bg_shadow"></div>
        <div className="sidebar__inner">
          <div className="close">
            <i
              className="fas fa-times"
              style={{ color: "white" }}
              onClick={closeSideBar}
            ></i>
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
        align="right"
        data-aos="fade-down-right"
        data-aos-duration="800"
        onClick={openSideBar}
      >
        <i class="fas fa-user-edit" style={{ color: "white" }}></i>
      </button>
      <h2
        style={{ color: "#fff", borderBottom: "2px solid blueviolet" }}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Team {team} (Admin)
      </h2>
      <p data-aos="fade-up" data-aos-duration="800">
        Team {team} panel!
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

      <div className="leader-img">
        <div
          className="leader-imgs"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <Link to={`/admin/${team}/projectAssigned`} className="hover">
            <img src="/images/A_Project.svg" alt="" className="leaders" />
          </Link>
          <p className="des">Project Assigned</p>
        </div>

        <div
          className="leader-imgs"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Link to={`/admin/${team}/projectReport`} className="hover">
            <img src="/images/P_Report.svg" alt="" className="leaders" />
          </Link>
          <p className="des">Project Report</p>
        </div>

        <div
          className="leader-imgs"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Link to={`/admin/${team}/teamMembers`} className="hover">
            <img src="/images/T_Members.svg" alt="" className="leaders" />
          </Link>
          <p className="des">Team Members</p>
        </div>

        <div
          className="leader-imgs"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link to={`/admin/${team}/viewReport`} className="hover">
            <img src="/images/V_Report.svg" alt="" className="leaders" />
          </Link>
          <p className="des">View Report</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderPage;
