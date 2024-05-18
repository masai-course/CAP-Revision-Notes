import React, { useState } from "react";

export const ImageResizer = () => {
   const [link, setLink] = useState("");
   const [url, setUrl] = useState("");
   const [width, setWidth] = useState("400px");

   const handleSubmit = () => {
      setUrl(link);
   };

   const handleDecrease = () => {
      let pixel = +width.split("px")[0];
      pixel = pixel - 5;
      setWidth(pixel + "px");
   };

   const handleIncrease = () => {
      let pixel = +width.split("px")[0];
      pixel = pixel + 5;
      setWidth(pixel + "px");
   };

   return (
      <div>
         <div>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
         </div>
         <div>
            <input
               onChange={(e) => setLink(e.target.value)}
               value={link}
               type="text"
               placeholder="Enter image source link"
            />
            <button onClick={handleSubmit}>Submit</button>
         </div>
         <div>
            {url !== "" ? (
               <img width={width} src={url} alt="broken_url_added" />
            ) : null}
         </div>
      </div>
   );
};
