import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/layout/Header.jsx'
import Form from '../src/components/ui/Form.jsx'
import Footer from './components/layout/Footer.jsx'

import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}