
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GetStartedPage from './pages/GetStartedPage'
import Layout from './components/Layout'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="get-started" element={<GetStartedPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App