import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './layout/layout.tsx'
import Home from './pages/mainPage/HomePage.tsx'
import MyFly from './pages/flyPage/MyFly.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myfly" element={<MyFly />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
)
