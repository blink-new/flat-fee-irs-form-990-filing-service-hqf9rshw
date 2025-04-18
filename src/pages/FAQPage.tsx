
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

const FAQPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
            <p className="mt-6 text-xl text-gray-600">
              Find answers to common questions about our IRS Form 990 filing service
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Filing Requirements</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Who needs to file Form 990-N?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Most small tax-exempt organizations with gross receipts normally $50,000 or less must file Form 990-N (e-Postcard). 
                    This includes organizations that are recognized as tax-exempt under 501(c)(3) as well as most other types of 501(c) organizations.
                  </p>
                  <p className="mt-2">
                    Exceptions include churches, their integrated auxiliaries, and conventions or associations of churches, 
                    as well as organizations that are included in a group return filed by a parent organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Who needs to file Form 990-EZ?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Tax-exempt organizations with gross receipts less than $200,000 and total assets less than $500,000 at the end of the tax year 
                    can file Form 990-EZ instead of the more complex Form 990.
                  </p>
                  <p className="mt-2">
                    Organizations that fall below the $50,000 gross receipts threshold have the option to file either the 990-N or the 990-EZ, 
                    though most choose the simpler 990-N.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What are the filing deadlines?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Form 990-N and Form 990-EZ must be filed by the 15th day of the 5th month after the end of your organization's accounting period.
                  </p>
                  <p className="mt-2">
                    For example, if your fiscal year ends on December 31, the filing deadline is May 15 of the following year.
                    If your fiscal year ends on June 30, the filing deadline is November 15.
                  </p>
                  <p className="mt-2">
                    Organizations can request an automatic 6-month extension by filing Form 8868 before the due date.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What happens if I miss the filing deadline?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    The consequences of failing to file depend on how many consecutive years you miss:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>First year: The IRS will send a reminder notice.</li>
                    <li>Second year: Another reminder notice will be sent.</li>
                    <li>Third year: The IRS will send a notice that your tax-exempt status will be automatically revoked if you don't file.</li>
                    <li>After three consecutive years of non-filing: Your organization's tax-exempt status will be automatically revoked.</li>
                  </ul>
                  <p className="mt-2">
                    If your status is revoked, you'll need to reapply for tax-exempt status and pay the appropriate user fee.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">Our Service</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="service-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How does your service work?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Our service follows a simple 4-step process:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>You complete our online questionnaire with your organization's information.</li>
                    <li>Our experts review your information for accuracy and completeness.</li>
                    <li>We prepare your 990-N or 990-EZ form using professional tax software.</li>
                    <li>We electronically file with the IRS and provide you with confirmation.</li>
                  </ol>
                  <p className="mt-2">
                    The entire process typically takes 7-10 business days from start to finish.
                  </p>
                  <p className="mt-2">
                    <Link to="/how-it-works" className="text-primary-600 hover:text-primary-700">
                      Learn more about our process
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="service-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What information do I need to provide?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    For Form 990-N (e-Postcard), you'll need to provide:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Organization's legal name and any DBA (doing business as) names</li>
                    <li>EIN (Employer Identification Number)</li>
                    <li>Organization's mailing address</li>
                    <li>Name and address of a principal officer</li>
                    <li>Website address (if applicable)</li>
                    <li>Confirmation that gross receipts are normally $50,000 or less</li>
                    <li>Confirmation that the organization is still operating</li>
                  </ul>
                  
                  <p className="mt-4">
                    For Form 990-EZ, you'll need more detailed financial information, including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>All of the above information</li>
                    <li>Revenue details (contributions, program service revenue, etc.)</li>
                    <li>Expense details (program services, management, fundraising)</li>
                    <li>Balance sheet information (assets and liabilities)</li>
                    <li>Information about your organization's activities and programs</li>
                    <li>Details about officers, directors, and key employees</li>
                  </ul>
                  
                  <p className="mt-2">
                    Our questionnaire will guide you through exactly what information is needed.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="service-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Is my information secure?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Yes, we take data security very seriously. We use industry-standard encryption for all data transmission and storage. 
                    Our systems comply with IRS security requirements for authorized e-file providers.
                  </p>
                  <p className="mt-2">
                    We only collect the information necessary to complete your filing, and we have strict data retention policies in place.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="service-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How long does the process take?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    The typical timeline from start to finish is:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Questionnaire completion: Day 1 (depends on how quickly you provide information)</li>
                    <li>Expert review: 1-2 business days</li>
                    <li>Form preparation: 2-3 business days (may be longer for complex 990-EZ filings)</li>
                    <li>E-filing and confirmation: 1-2 business days</li>
                  </ul>
                  <p className="mt-2">
                    In total, most filings are completed within 7-10 business days from the time you submit your questionnaire.
                  </p>
                  <p className="mt-2">
                    If you're approaching a filing deadline, please let us know, and we'll do our best to expedite the process.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">Technical Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="tech-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What if I qualified for the 990-EZ but filed the 990-N last year?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    If your organization's gross receipts or assets have increased beyond the 990-N thresholds, you should transition to filing Form 990-EZ.
                  </p>
                  <p className="mt-2">
                    There's no penalty for switching from 990-N to 990-EZ as your organization grows. In fact, it's required once you exceed the thresholds.
                  </p>
                  <p className="mt-2">
                    Our service can help with this transition, ensuring you provide all the additional information required for the more detailed 990-EZ form.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tech-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What happens after filing?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    After we submit your filing to the IRS:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>The IRS typically processes e-filed returns within 24-48 hours</li>
                    <li>We'll notify you by email when your filing has been accepted</li>
                    <li>For 990-EZ filings, we'll provide a PDF copy of your filed form for your records</li>
                    <li>Your filing becomes part of the public record (as required by law for all 990 forms)</li>
                  </ul>
                  <p className="mt-2">
                    Once your filing is accepted, your organization has met its annual IRS filing requirement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tech-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Do you handle state filings as well?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Our service focuses specifically on federal IRS Form 990-N and 990-EZ filings. 
                  </p>
                  <p className="mt-2">
                    Many states have their own annual filing requirements for non-profits, which are separate from the federal requirements. 
                    While we don't directly handle these state filings, we can provide general guidance on state requirements and refer you to resources for your specific state.
                  </p>
                  <p className="mt-2">
                    If you need assistance with state filings, please <Link to="/contact" className="text-primary-600 hover:text-primary-700">contact us</Link> for recommendations.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tech-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What if the IRS rejects our filing?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Rejections are rare when working with our service, as we review your information carefully before submission. 
                    However, if a rejection does occur:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>We'll notify you immediately and explain the reason for rejection</li>
                    <li>We'll work with you to correct any issues or discrepancies</li>
                    <li>We'll resubmit the filing at no additional cost</li>
                    <li>If necessary, we'll help you request an extension to ensure you meet the filing deadline</li>
                  </ul>
                  <p className="mt-2">
                    Our goal is to ensure your filing is accepted, and we'll work with you until that happens.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">Pricing and Payment</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pricing-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What does your service cost?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    We offer simple, transparent flat-fee pricing:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Form 990-N (e-Postcard):</strong> $99 flat fee</li>
                    <li><strong>Form 990-EZ:</strong> $249 flat fee</li>
                  </ul>
                  <p className="mt-2">
                    These fees include everything needed for a complete filing: questionnaire, expert review, 
                    professional preparation, electronic filing, and confirmation.
                  </p>
                  <p className="mt-2">
                    <Link to="/pricing" className="text-primary-600 hover:text-primary-700">
                      View our complete pricing details
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pricing-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  When is payment due?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Payment is due at the time you submit your completed questionnaire. 
                    We'll begin processing your filing once payment is received.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pricing-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers.
                  </p>
                  <p className="mt-2">
                    All payments are processed securely through our payment processor, which uses industry-standard encryption.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pricing-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  <p>
                    Our refund policy is as follows:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>If we determine that your organization is not eligible to file Form 990-N or 990-EZ, we'll provide a full refund.</li>
                    <li>If we're unable to complete your filing for any reason within our control, we'll provide a full refund.</li>
                    <li>Once we've submitted your filing to the IRS, we cannot offer refunds as the service has been fully rendered.</li>
                  </ul>
                  <p className="mt-2">
                    If you have any questions about refunds, please <Link to="/contact" className="text-primary-600 hover:text-primary-700">contact us</Link>.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Still Have Questions?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're here to help! Contact us for personalized assistance with your non-profit filing needs.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage