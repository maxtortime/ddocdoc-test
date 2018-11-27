import React from "react";

export default props => {
  return (
    <li className="curation-list-item">
      <a
        className="curation-list-item-link"
        href={"https://event.ddocdoc.com/curation/" + props.info.groupId._id}
      >
        <img className="fade show" src={props.info.mainImage.url} alt="Main" />
        <div className="curation-list-item-figcaption">
          <h5 className="curation-list-item-heading">{props.info.title}</h5>
          <p className="curation-list-item-description">
            <strong className="curation-list-item-premark">기획전</strong>
            <b> | </b>
            {props.info.groupId.description}
          </p>
        </div>
      </a>
    </li>
  );
};
