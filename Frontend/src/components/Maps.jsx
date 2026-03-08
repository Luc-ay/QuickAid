import React, { useEffect, useState, useRef, forwardRef } from 'react';

const MyMap = forwardRef(({ mapUrl, title = "LASUTH Location" }, ref) => {
  const [retryCount, setRetryCount] = useState(0);
  const [iframeSrc, setIframeSrc] = useState(mapUrl);
  const errorTimeout = useRef(null);

  // Reset on mapUrl change
  useEffect(() => {
    setIframeSrc(mapUrl);
    setRetryCount(0);
  }, [mapUrl]);

  const handleIframeError = () => {
    if (retryCount < 5) {
      errorTimeout.current = setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIframeSrc(`${mapUrl}&reload=${Date.now()}`); // add cache buster
      }, 2000); // retry after 2s
    }
  };

  // Clean up timeout when component unmounts
  useEffect(() => {
    return () => {
      if (errorTimeout.current) {
        clearTimeout(errorTimeout.current);
      }
    };
  }, []);

  return (
    <iframe
      ref={ref}
      title={title}
      src={iframeSrc}
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      className="rounded-md shadow"
      referrerPolicy="no-referrer-when-downgrade"
      onError={handleIframeError}
    />
  );
});

export default MyMap;
