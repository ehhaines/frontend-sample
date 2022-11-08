import React from "react";
import Member from "./member";
import members from "./members.json";

const ListComponent = () => {
  return(
    <div>
      <div className="text-primary fs-3 w-100 text-end">+</div>
      <h2 className="text-dark m-0">Team members</h2>
      <div className="text-secondary fs-5">You have {members.length} team members.</div>
      <ul>
        {members.map(mem => 
          <Member mem={mem}/>)
        }
      </ul>
    </div>
  );
}

export default ListComponent;