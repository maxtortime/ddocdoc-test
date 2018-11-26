import React from 'react';

export default (props) => {
    return (
      <li>
        <img src={props.info.mainImage.url} alt="Main" />
      </li>
    )
}