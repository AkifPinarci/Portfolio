import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import Resume from "../../MehmetAkifPinarci.pdf";
export default function Test() {
  document.title = "MAP Resume";
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="resume-wrapper">
      <iframe
        className="webviewer"
        title=" Mehmet Akif Pinarci"
        src={Resume}
        type="application/pdf"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
}
