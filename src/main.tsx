import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Google Analytics injection
const GA_ID = "G-LDN8JQHY8K"; // replace with your real ID

const script1 = document.createElement("script");
script1.async = true;
script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
`;
document.head.appendChild(script2);

// React render
createRoot(document.getElementById("root")!).render(<App />);
