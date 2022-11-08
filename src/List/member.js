import React from "react";

const Member = ({mem}) => {
  return(
    <li className="row">
      <img src="/images/profile.png" className="rounded-circle col-2 img-responsive" alt="Not Found"/>
      <div className="col">
        <div>{mem.firstName} {mem.lastName}{mem.isAdmin ? " (admin)" : null}</div>
      </div>
    </li>
  );
}

export default Member;