import { useState } from "react";
import "./App.css";

function App() {
  const [qrText, setQrText] = useState("");
  const [qrImage, setQrImage] = useState("");

  const generateQR = () => {
    if (qrText.trim() !== "") {
      setQrImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
    }
  };

  return (
      <div className="App">
        <div className="container">
          <p>Enter your text or URL</p>
          <input
              type="text"
              placeholder="Enter your text or URL"
              value={qrText}
              onChange={(e) => setQrText(e.target.value)}
          />
          {qrImage && (
              <div id="imgBox">
                <img src={qrImage} alt="QR Code" />
              </div>
          )}
          <button onClick={generateQR}>Submit</button>
        </div>
      </div>
  );
}

export default App;
