import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
import Styles from "./index.module.scss";

const ShareBtn = ({ url, imageUrl, title, description }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  const handleFacebookClick = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    const text = `${title}\n\n${description}\n\n${url}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={Styles.buttonArea}>
      {!showShareOptions && (
        <button onClick={handleShareClick}>
          <i className="fa-solid fa-share-from-square"></i>
        </button>
      )}
      {showShareOptions && (
        <div className={Styles.buttonArea__siteModal}>
          <div>
            <input type="text" value={url} readOnly />
            <button onClick={handleCopyClick}>Copy</button>
          </div>
          <span>
            <FacebookShareButton url={url} quote={description} hashtag={title} onClick={handleFacebookClick}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </span>
          <span>
            <WhatsappShareButton url={url} title={title} separator=" - " onClick={handleWhatsAppClick}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </span>
        </div>
      )}
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>
    </div>
  );
};

export default ShareBtn;
