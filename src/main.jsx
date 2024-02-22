import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'
import { ProductProvider } from './hooks/Product'


import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
