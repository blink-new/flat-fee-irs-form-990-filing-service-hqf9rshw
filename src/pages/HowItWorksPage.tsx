
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle2, FileText, Clock, Shield, ArrowRight } from 'lucide-react'

const HowItWorksPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">How Our Filing Service Works</h1>
            <p className="mt-6 text-xl text-gray-600">
              A simple, streamlined process designed to make your IRS Form 990 filing quick and stress-free
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center h-full">
                  <div className="h-full w-0.5 bg-primary-100"></div>
                </div>
                <div className="relative flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">Complete Our Simple Questionnaire</h3>
                    <div className="mt-4 prose prose-blue text-gray-600">
                      <p>
                        Start by filling out our streamlined online questionnaire that gathers all the necessary information for your 990-N or 990-EZ filing.
                      </p>
                      <h4 className="text-lg font-semibold mt-4">What you'll need to provide:</h4>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Basic organization information (EIN, name, address)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Principal officer information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Confirmation of gross receipts (under $50,000 for 990-N or under $200,000 for 990-EZ)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>For 990-EZ: Financial information about revenue, expenses, assets, and liabilities</span>
                        </li>
                      </ul>
                      <p className="mt-4">
                        The questionnaire is designed to be straightforward and only asks for information that's required for your filing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center h-full">
                  <div className="h-full w-0.5 bg-primary-100"></div>
                </div>
                <div className="relative flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">Expert Review of Your Information</h3>
                    <div className="mt-4 prose prose-blue text-gray-600">
                      <p>
                        Once you submit your questionnaire, our non-profit tax specialists will carefully review your information for:
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Completeness and accuracy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Potential issues or red flags</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Verification that you're filing the correct form (990-N vs 990-EZ)</span>
                        </li>
                      </ul>
                      <p className="mt-4">
                        If we have any questions or need additional information, we'll reach out promptly via email.
                        This review process typically takes 1-2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center h-full">
                  <div className="h-full w-0.5 bg-primary-100"></div>
                </div>
                <div className="relative flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">Professional Form Preparation</h3>
                    <div className="mt-4 prose prose-blue text-gray-600">
                      <p>
                        After confirming your information is complete and accurate, we'll prepare your form:
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>We use professional tax software to prepare your 990-N or 990-EZ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>For 990-EZ filings, we ensure all required schedules are properly completed</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>We perform a final quality check to ensure everything is in order</span>
                        </li>
                      </ul>
                      <p className="mt-4">
                        This preparation process typically takes 2-3 business days, depending on the complexity of your filing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="relative flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">E-Filing and Confirmation</h3>
                    <div className="mt-4 prose prose-blue text-gray-600">
                      <p>
                        The final step is submitting your form to the IRS:
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>We electronically file your form with the IRS</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>You receive an email confirmation once the filing is accepted</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>For 990-EZ filings, we provide a PDF copy of your filed form for your records</span>
                        </li>
                      </ul>
                      <p className="mt-4">
                        The IRS typically processes e-filed returns within 24-48 hours. Once accepted, your filing obligation for the year is complete!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Your Information is Secure</h2>
            <div className="mt-6 prose prose-blue text-gray-600 mx-auto">
              <p>
                We take the security of your organization's information seriously. Our service uses:
              </p>
              <ul className="space-y-2 mt-4 text-left">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Encrypted data transmission and storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>IRS-authorized e-filing system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Strict data retention policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Expected Timeline</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From start to finish, here's what to expect
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Day 1</h3>
                    <p className="text-gray-600">Complete and submit the questionnaire</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Day 2-3</h3>
                    <p className="text-gray-600">Expert review of your information</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Day 4-6</h3>
                    <p className="text-gray-600">Form preparation (timing depends on form complexity)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Day 7</h3>
                    <p className="text-gray-600">E-filing with the IRS</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Day 8-9</h3>
                    <p className="text-gray-600">Receive confirmation of accepted filing</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-gray-600 italic">
                  <strong>Note:</strong> This timeline is approximate and may vary based on the complexity of your filing and IRS processing times. 
                  For urgent filings approaching the deadline, please contact us for expedited service options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Our simple process makes IRS compliance easy so you can focus on your mission
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              <Link to="/get-started">Start Your Filing</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage