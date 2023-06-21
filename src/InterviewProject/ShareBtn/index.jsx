//
import React from "react";
import { Helmet } from "react-helmet";
import { ShareButtons, generateShareIcon } from "react-share";

const ShareButton = ({ url, imageUrl, title, description }) => {
  const { FacebookShareButton, WhatsappShareButton, CopyToClipboard } = ShareButtons;
  const FacebookIcon = generateShareIcon("facebook");
  const WhatsappIcon = generateShareIcon("whatsapp");

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
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${description}\n\n${url}`)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleCopyClick}>Copy</button>
      <button onClick={handleFacebookClick}>Facebook</button>
      <button onClick={handleWhatsAppClick}>WhatsApp</button>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
      </Helmet>
    </div>
  );
};

export default ShareButton;
