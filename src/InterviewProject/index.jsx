import React from "react";
import Styles from "./index.module.scss";
import ShareBtn from "./ShareBtn";
import img from "../Assets/userImg.avif";
const BlogPage = () => {
  const pageUrl = window.location.href;
  const pageImageUrl = img;
  const pageTitle = " * Chris Evans *";
  const pageDescription =
    "Christopher Robert Evans is an American actor. He began his career with roles in television series such as Opposite Sex in 2000.";

  return (
    <div className={Styles.main}>
      <div className={Styles.main__containt}>
        <div className={Styles.main__containt__image}>
          <img src={pageImageUrl} alt="error" />
        </div>
        <div className={Styles.main__containt__tittle}>
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>

        {/* Share button */}
        <ShareBtn url={pageUrl} imageUrl={pageImageUrl} title={pageTitle} description={pageDescription} />
      </div>
    </div>
  );
};
export default BlogPage;
