import React from "react";
import LazyLoad from "react-lazyload";
import "./CurationListItem.css";

export default ({ info }) => {
  const { groupId, mainImage, title } = info;

  return (
    <li className="curation-list-item">
      <a
        className="curation-list-item-link"
        href={"https://event.ddocdoc.com/curation/" + groupId._id}
      >
        <LazyLoad height={300} throttle={200}>
          <img className="fade show" src={mainImage.url} alt={title} />
        </LazyLoad>

        <div className="curation-list-item-figcaption">
          <h5 className="curation-list-item-heading">{title}</h5>
          <p className="curation-list-item-description">
            <strong className="curation-list-item-premark">기획전</strong>
            <b> | </b>
            {groupId.description}
          </p>
        </div>
      </a>
    </li>
  );
};
