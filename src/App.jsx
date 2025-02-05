import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/layout/Header.jsx'
import Form from '../src/components/ui/Form.jsx'
import DisplayQrCode from './components/qrCode/QrCodeDisplay.jsx'
import QRCode from "react-qr-code"

import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <DisplayQrCode />
    </>
  );
}