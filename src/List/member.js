import React from "react";
import "./index.css";

const Member = ({mem}) => {
  return(
    <li className="list-group-item border-top-0 border-start-0 border-end-0 eh-border-bottom">
      <div className="row py-2">
        <img src="/images/profile.png" className="rounded-circle col-3 mt-1 p-0 eh-profile-pic" alt="Not Found"/>
        <div className="col">
          <div>{mem.firstName} {mem.lastName}{mem.isAdmin ? " (admin)" : null}</div>
          <div className="text-muted">{mem.phone}</div>
          <div className="text-muted">{mem.email}</div>
        </div>
      </div>
    </li>
  );
}

export default Member;