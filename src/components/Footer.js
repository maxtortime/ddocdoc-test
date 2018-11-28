import React from "react";

export default props => {
  return (
    <footer className="footer">
      <h5 className="footer-bi-link">
        <a href="https://www.ddocdoc.com">
          <i className="icon icon-ddocdoc-bi-gray" />
          <span className="sr-only">똑닥</span>
        </a>
      </h5>
      <ul className="footer-link-list">
        <li>
          <a href="https://www.ddocdoc.com/termsofservice" target="terms1">
            이용약관
          </a>
        </li>
        <li>
          <a href="https://www.ddocdoc.com/privacypolicy" target="terms2">
            개인정보취급방침
          </a>
        </li>
        <li>
          <a href="https://www.ddocdoc.com/contact?from=ddocdoc">제휴문의</a>
        </li>
      </ul>
      <small className="footer-copyright">
        Copyright © B-bros Corp. All rights reserved.
      </small>
    </footer>
  );
};
