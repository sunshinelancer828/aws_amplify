import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const PDFViewerComponent = ({documentUrl, baseUrl}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
	  let instance, PSPDFKit;
    (async function() {
      try{
      PSPDFKit = await import("pspdfkit")
      instance = await PSPDFKit.load({
        document: documentUrl,
        container,
        baseUrl: baseUrl,
      })
      toast.success('PDF uploaded succesfully')
      }
      catch(error)
      {
      }
    })()

    return () => PSPDFKit && PSPDFKit.unload(container)
  }, [documentUrl])

    return (
      <div
        ref={containerRef}
        style={{ width: "100%", height: "730px" }}
      />
    );
}
