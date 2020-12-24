import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PasswordUpdate.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function DailyTaskModal(props) {

  return (
    <div className="modal">
      <Modal
        show={props.checkTaskOpen}
        onHide={props.hideTaskModal}
        backdrop="static"
        keyboard={false}
        centered
        className="b_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title"><i class="fas fa-tasks"></i> Task of the Day!</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <div className="daily-task-des" style={{color: "#5e60ce "}}>
              {props.userinfo.dailytask}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit update" onClick={props.hideTaskModal}>Accept</button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DailyTaskModal;
