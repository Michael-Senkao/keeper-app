import React, {createRoot} from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

/*
----------------- TODOS -----------------------
1. ADD 'EDIT' FEATURE
2. FIX ALL BUGS ON THE FRONTEND
3. CREATE DATABASE TO STORE NOTES
4. SETUP BACKEND SERVER TO GET NOTES FROM DATABASE AND SEND TO THE FRONT END
*/