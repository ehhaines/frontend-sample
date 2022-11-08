import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const AddComponent = () => {
  return(
    <div className="eh-list-component">
      <div className="eh-border-bottom-2 pb-4">
        <div className="fs-3 w-100 text-end">
          <button className="text-primary border-0 bg-transparent"><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <h2 className="text-dark m-0">Add a team member</h2>
        <div className="text-secondary fs-5">Set email, location and role.</div>
      </div>
      <div className="mt-3">
        <div className="fs-4 fw-semibold mb-1">Info</div>
        <div className="my-3 input-group input-group-lg"><input className="form-control w-100" placeholder="First Name"/></div>
        <div className="my-3 input-group input-group-lg"><input className="form-control w-100" placeholder="Last Name"/></div>
        <div className="my-3 input-group input-group-lg"><input className="form-control w-100" placeholder="Phone Number"/></div>
        <div className="my-3 input-group input-group-lg"><input className="form-control w-100" placeholder="Email"/></div>
      </div>
      <div className="mb-2">
        <div className="fs-4 fw-semibold">Role</div>
        <div className="eh-border-bottom-2">
          <input className="form-check-input float-end my-3" type="radio" name="radioRole" id="radioRegular" value="" aria-label="..." defaultChecked/>
          <label className="form-check-label fw-semibold py-3 eh-radio-option" for="radioRegular">Regular - can't delete members</label>
        </div>
        <div className="eh-border-bottom-2">
          <input className="form-check-input float-end my-3" type="radio" name="radioRole" id="radioAdmin" value="" aria-label="..."/>
          <label className="form-check-label fw-semibold py-3 eh-radio-option" for="radioAdmin">Admin - can delete members</label>
        </div>
      </div>
      <div>
        <button className="btn btn-primary my-4 eh-button float-end">Save</button>
      </div>
    </div>
  );
}

export default AddComponent;