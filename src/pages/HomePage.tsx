
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle2, FileText, Clock, DollarSign, ShieldCheck } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simple, Affordable IRS 990-N & 990-EZ Filing for Small Non-profits
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Meet your mandatory IRS filing requirement stress-free with our flat-fee service
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
                <Link to="/get-started">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Who is this for?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our service is designed specifically for small, volunteer-run non-profits with limited resources
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-900">Form 990-N (e-Postcard)</h3>
              <p className="mt-2 text-gray-600">
                For organizations with gross receipts normally ≤ $50,000
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Small non-profits with minimal financial activity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Volunteer-run organizations with limited administrative capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Organizations seeking a simple, streamlined filing process</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-gray-900">Form 990-EZ</h3>
              <p className="mt-2 text-gray-600">
                For organizations with gross receipts &lt; $200,000 and total assets &lt; $500,000
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Growing non-profits with moderate financial activity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Organizations that need more detailed financial reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Non-profits seeking professional assistance with more complex filings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Service?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We take the stress out of IRS compliance so you can focus on your mission
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-slide-up">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Affordable Flat Fee</h3>
              <p className="mt-2 text-gray-600">
                Transparent pricing with no hidden costs. Pay one simple fee for complete filing service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expert Preparation</h3>
              <p className="mt-2 text-gray-600">
                Your filing is handled by professionals who specialize in non-profit tax compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Simple Process</h3>
              <p className="mt-2 text-gray-600">
                Easy questionnaire, quick review, and timely filing. We handle the complexity for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes filing your 990 form quick and hassle-free
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Complete Questionnaire</h3>
              <p className="mt-2 text-gray-600">
                Fill out our simple online form with your organization's information
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Expert Review</h3>
              <p className="mt-2 text-gray-600">
                We review your information for accuracy and completeness
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Form Preparation</h3>
              <p className="mt-2 text-gray-600">
                We prepare your 990-N or 990-EZ form using professional tax software
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">E-Filing & Confirmation</h3>
              <p className="mt-2 text-gray-600">
                We electronically file with the IRS and provide you with confirmation
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-sm text-gray-500">Treasurer, Community Garden Alliance</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a volunteer treasurer with no accounting background, I was dreading our 990-N filing. 
                This service made it incredibly easy and gave me peace of mind knowing it was done correctly."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Smith</h4>
                  <p className="text-sm text-gray-500">Director, Neighborhood Arts Collective</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The flat fee pricing was refreshing - no surprises or hidden costs. 
                The process was smooth, and we received our confirmation quickly. Highly recommend!"
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold">LJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lisa Johnson</h4>
                  <p className="text-sm text-gray-500">President, Youth Mentoring Foundation</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We switched to the 990-EZ this year as our organization grew, and I was worried about the more complex form. 
                The expert guidance made the transition painless. Worth every penny!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to simplify your IRS filing?</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Focus on your mission, let us handle the compliance
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              <Link to="/get-started">File Your 990 Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage