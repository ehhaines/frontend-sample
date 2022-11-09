import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Member from "./member";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ListComponent = () => {

  const members = useSelector(state => state.member);
  const nav = useNavigate();

  return(
    <div className="eh-list-component">
      <div className="eh-border-bottom-2 pb-4">
        <div className="fs-3 w-100 text-end">
          <button className="text-primary border-0 bg-transparent" title="Add a member" onClick={() => {nav(`/add`)}}>
            <FontAwesomeIcon icon={faPlus}/>
          </button>
        </div>
        <h2 className="text-dark m-0">Team members</h2>
        <div className="text-secondary fs-5">You have {members.length} team members.</div>
      </div>
      <div className="list-group">
        {members.map(mem => 
          <Member key={mem.email} mem={mem} onClick={() => {nav(`/edit`)}}/>)
        }
      </div>
    </div>
  );
}

export default ListComponent;