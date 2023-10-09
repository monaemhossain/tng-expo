import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'

import { RouterProvider } from 'react-router-dom'
import Routes from './Router/Routes'
import './index.css'
import AuthProvider from './Context/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <AuthProvider>
          <RouterProvider router={Routes} />
        </AuthProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)