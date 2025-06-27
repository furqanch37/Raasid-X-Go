// app/layout.jsx or app/RootLayout.jsx
import "./globals.css";
import LayoutContent from "./LayoutContent";
import ReduxProvider from "./ReduxProvider"; // ✅ Use the client wrapper
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Raasid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <LayoutContent>{children}       <ToastContainer
        position="top-center" // ✅ Centered toast
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Or "dark"
      /></LayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}
