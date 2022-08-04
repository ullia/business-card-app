import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/imageFileInput/ImageFileInput";

const authService = new AuthService();
const imageUploader = new ImageUploader(
  process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
);
const FileInput = props => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} FileInput={FileInput} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
