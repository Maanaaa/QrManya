import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/layout/Header.jsx'
import Form from '../src/components/ui/Form.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Form />

    </>
  );
}