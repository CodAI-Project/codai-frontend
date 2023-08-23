'use client'
import 'react-toastify/dist/ReactToastify.css';
import LandPage from "./components/landpage/landpage";
import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <div>
      <LandPage />
      <ToastContainer />
    </div>
  );
}
