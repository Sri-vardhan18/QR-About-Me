import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';
import QRCode from "react-qr-code";
import "./App.css"

const QRCodeScanner = ({ websiteUrl }) => {
  const [scannedUrl, setScannedUrl] = useState(null);
  const [showQRReader, setShowQRReader] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setScannedUrl(data);
      setShowQRReader(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div class = "container">
        <div class = "card">
            
        {showQRReader ? (
        <QRCode value={websiteUrl} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
        // {Please scan the QR Code to View my portfilio}

      )
       : (
        <div>
          <p>Scanned URL: {scannedUrl}</p>
          <button onClick={() => setShowQRReader(true)}>Scan Again</button>
        </div>
      )}
        </div>
        <div class= "texts">
        Scan the QR code to learn more about Srivardhan.
        </div>
      
    </div>
  );
};

export default QRCodeScanner;





