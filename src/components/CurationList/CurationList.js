import React from "react";
import CurationListItem from "./CurationListItem/CurationListItem";

const CurationList = ({ curations }) => {
  return (
    <div className="content">
      <ul>
        {curations.map(item => (
          <CurationListItem key={item.groupId._id} info={item} />
        ))}
      </ul>
    </div>
  );
};

export default CurationList;
