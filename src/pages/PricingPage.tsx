
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle2, X } from 'lucide-react'

const PricingPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
            <p className="mt-6 text-xl text-gray-600">
              Affordable flat-fee pricing with no hidden costs or surprises
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 990-N Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">Form 990-N (e-Postcard)</h2>
                <p className="mt-2 text-gray-600">
                  For organizations with gross receipts ≤ $50,000
                </p>
                <div className="mt-6">
                  <p className="inline-flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">$99</span>
                    <span className="text-gray-600 ml-1">flat fee</span>
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Simple online questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Expert review of your information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Professional preparation of your 990-N</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Electronic filing with the IRS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Filing confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                    <Link to="/get-started?form=990n">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Perfect for small non-profits with minimal financial activity and simple reporting needs.
                </p>
              </div>
            </div>

            {/* 990-EZ Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">Form 990-EZ</h2>
                <p className="mt-2 text-gray-600">
                  For organizations with gross receipts &lt; $200,000 and assets &lt; $500,000
                </p>
                <div className="mt-6">
                  <p className="inline-flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">$249</span>
                    <span className="text-gray-600 ml-1">flat fee</span>
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive online questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Expert review of your information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Professional preparation of your 990-EZ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Required schedules included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Electronic filing with the IRS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>PDF copy of filed form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Priority email support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                    <Link to="/get-started?form=990ez">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Ideal for growing non-profits with more complex financial reporting requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our flat-fee service includes everything you need for a complete and accurate filing
            </p>
          </div>
          
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Service Feature</th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Form 990-N</th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Form 990-EZ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Online Questionnaire</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Expert Review</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Professional Form Preparation</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Required Schedules</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <span className="text-gray-400">N/A</span>
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Electronic Filing</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Filing Confirmation</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">PDF Copy of Filed Form</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">Email Support</td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mx-auto" />
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-500">
                      <span className="text-sm font-medium text-primary-600">Priority</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Pricing FAQ</h2>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Are there any hidden fees?</h3>
                <p className="mt-2 text-gray-600">
                  No. Our pricing is completely transparent. The flat fee covers everything needed for your filing, 
                  including preparation, review, and electronic submission to the IRS.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What if I need to file additional schedules with my 990-EZ?</h3>
                <p className="mt-2 text-gray-600">
                  Our 990-EZ flat fee includes all commonly required schedules (such as Schedule A, B, G, and O). 
                  If your organization requires additional specialized schedules, we'll discuss any potential additional fees before proceeding.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you offer refunds?</h3>
                <p className="mt-2 text-gray-600">
                  If we're unable to complete your filing for any reason, we'll provide a full refund. However, once we've submitted your filing to the IRS, 
                  we cannot offer refunds as the service has been fully rendered.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-2 text-gray-600">
                  We accept all major credit cards and ACH bank transfers. Payment is required at the time of service.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you offer discounts for multiple years or multiple organizations?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! If you need to file for multiple years or have multiple related organizations, please contact us for special pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What's Not Included</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              For transparency, here are services that are not part of our flat-fee offering
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Full Form 990 preparation (for larger organizations)</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">State-specific filings (though we can advise on requirements)</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Bookkeeping or accounting services</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Tax planning or strategic advisory services</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Representation in case of IRS audit (though we can refer you to qualified professionals)</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600">
                <strong>Need additional services?</strong> While we specialize in Form 990-N and 990-EZ filings, 
                we have a network of non-profit accounting professionals who can assist with more complex needs. 
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 ml-1">
                  Contact us
                </Link> for referrals or to discuss your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to file your 990?</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Simple, affordable, and stress-free IRS compliance
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              <Link to="/get-started">Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              <Link to="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage