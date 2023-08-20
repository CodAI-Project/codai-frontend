'use client'

import LandPage from "./components/landpage/landpage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <LandPage />
      <ToastContainer/>
    </div>
  )
}
