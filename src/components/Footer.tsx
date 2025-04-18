
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-primary-600 font-bold text-xl">990FileEasy</Link>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Simple, affordable IRS Form 990-N & 990-EZ filing for small non-profits. 
              Focus on your mission, let us handle the compliance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-primary-600">
                  Form 990-N Filing
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-primary-600">
                  Form 990-EZ Filing
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-primary-600">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} 990FileEasy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-primary-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer