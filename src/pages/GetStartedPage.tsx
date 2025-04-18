
import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

const GetStartedPage = () => {
  const [searchParams] = useSearchParams()
  const initialForm = searchParams.get('form') || '990n'
  const [selectedForm, setSelectedForm] = useState(initialForm)
  
  const handleGetStarted = () => {
    toast.success('Coming soon! Our questionnaire system is currently being developed.')
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">Get Started</h1>
            <p className="mt-6 text-xl text-gray-600">
              Begin your simple, stress-free IRS filing process today
            </p>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Select Your Filing Type</h2>
            <p className="mt-4 text-gray-600 text-center">
              Choose the appropriate form for your organization's size and needs
            </p>
            
            <Tabs defaultValue={selectedForm} className="mt-8" onValueChange={setSelectedForm}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="990n">Form 990-N (e-Postcard)</TabsTrigger>
                <TabsTrigger value="990ez">Form 990-EZ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="990n" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary-600" />
                      Form 990-N (e-Postcard)
                    </CardTitle>
                    <CardDescription>
                      For organizations with gross receipts normally $50,000 or less
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Who should file Form 990-N?</h3>
                        <p className="mt-1 text-gray-600">
                          Small tax-exempt organizations with annual gross receipts normally $50,000 or less.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900">What information is required?</h3>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Organization name, EIN, and address</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Principal officer information</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Website address (if applicable)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Confirmation of gross receipts and operational status</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm">
                          <strong>Price:</strong> $99 flat fee (includes expert review, preparation, and e-filing)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGetStarted}
                      className="w-full bg-primary-600 hover:bg-primary-700"
                    >
                      Start 990-N Filing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="990ez" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary-600" />
                      Form 990-EZ
                    </CardTitle>
                    <CardDescription>
                      For organizations with gross receipts &lt; $200,000 and assets &lt; $500,000
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Who should file Form 990-EZ?</h3>
                        <p className="mt-1 text-gray-600">
                          Tax-exempt organizations with gross receipts less than $200,000 and total assets less than $500,000.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900">What information is required?</h3>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>All information required for 990-N, plus:</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Detailed revenue and expense information</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Balance sheet (assets and liabilities)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Program service accomplishments</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Information about officers, directors, and key employees</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm">
                          <strong>Price:</strong> $249 flat fee (includes expert review, preparation, required schedules, e-filing, and PDF copy)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGetStarted}
                      className="w-full bg-primary-600 hover:bg-primary-700"
                    >
                      Start 990-EZ Filing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900">Not sure which form to file?</h3>
              <p className="mt-2 text-gray-600">
                If your organization's gross receipts are normally $50,000 or less, you can file the simpler Form 990-N. 
                If your receipts are between $50,000 and $200,000 (and assets less than $500,000), you should file Form 990-EZ.
              </p>
              <p className="mt-2 text-gray-600">
                Still not sure? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link> for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What to Expect</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what happens after you begin the filing process
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center h-full">
                <div className="h-full w-0.5 bg-primary-100"></div>
              </div>
              
              <div className="relative space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">Complete the Questionnaire</h3>
                    <p className="mt-1 text-gray-600">
                      Fill out our simple online questionnaire with your organization's information. 
                      The form adapts based on your responses to ensure we gather only the information needed for your specific filing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
                    <p className="mt-1 text-gray-600">
                      After completing the questionnaire, you'll be directed to our secure payment page. 
                      We accept all major credit cards and ACH bank transfers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">Expert Review</h3>
                    <p className="mt-1 text-gray-600">
                      Our team will review your information for completeness and accuracy. 
                      If we have any questions or need additional information, we'll contact you by email.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">Form Preparation and Filing</h3>
                    <p className="mt-1 text-gray-600">
                      We'll prepare your form using professional tax software and electronically file it with the IRS. 
                      You'll receive confirmation once the filing is accepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Have Ready */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center">What to Have Ready</h2>
            <p className="mt-4 text-gray-600 text-center">
              Gather these items before starting the questionnaire to make the process even smoother
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">For Form 990-N (e-Postcard):</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Your organization's EIN (Employer Identification Number)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Legal name and any DBA (doing business as) names</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Mailing address</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Name and address of a principal officer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Website address (if applicable)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">For Form 990-EZ (additional items):</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Financial statements or records showing revenue and expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Balance sheet information (assets and liabilities)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>List of officers, directors, and key employees with compensation information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Description of program service accomplishments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Information about any significant activities during the year</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to begin?</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Start your simple, stress-free filing process today
          </p>
          <div className="mt-10">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="bg-white text-primary-600 hover:bg-primary-50"
            >
              Begin Questionnaire <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-primary-100">
            Have questions first? <Link to="/contact" className="text-white underline hover:no-underline">Contact us</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default GetStartedPage