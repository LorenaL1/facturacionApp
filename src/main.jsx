import React from 'react';
import ReactDOM  from 'react-dom/client';
import './style.css';
import { InvoiceApp } from './components/invoiceApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <InvoiceApp />
    </React.StrictMode>
)