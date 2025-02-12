import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import Home from './app/page'
import { LicenseInfo } from "@mui/x-license";

import App from "./App";

LicenseInfo.setLicenseKey(
    "7328d63def5e9d3883bb210af4fe3010Tz0xMDY5MjEsRT0xNzY5ODE3NTk5MDAwLFM9cHJvLExNPXN1YnNjcmlwdGlvbixQVj1RMy0yMDI0LEtWPTI=",
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
