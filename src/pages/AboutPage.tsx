
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { FileText, Users, Heart, CheckCircle2 } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">About 990FileEasy</h1>
            <p className="mt-6 text-xl text-gray-600">
              We help small non-profits meet their IRS filing requirements with ease
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-6 prose prose-blue text-gray-600">
              <p>
                990FileEasy was founded by Sarah Johnson, a CPA with over 15 years of experience working with non-profit organizations. 
                Throughout her career, Sarah noticed a recurring problem: small, volunteer-run non-profits struggling with their annual IRS filing requirements.
              </p>
              <p>
                Many of these organizations were spending valuable time and resources figuring out how to file their 990-N or 990-EZ forms, 
                often paying high fees to accounting firms for what should be a relatively simple process. Others were risking their tax-exempt status 
                by missing filing deadlines due to confusion or lack of resources.
              </p>
              <p>
                Sarah realized there was a need for a specialized service that could bridge this gap – providing professional, 
                affordable filing assistance specifically designed for micro non-profits with straightforward needs.
              </p>
              <p>
                In 2018, she launched 990FileEasy with a simple mission: to help small non-profits meet their IRS filing requirements 
                with minimal stress and expense, allowing them to focus their limited resources on their important missions.
              </p>
              <p>
                Since then, we've helped hundreds of small non-profits across the country maintain their tax-exempt status through timely, 
                accurate filings – all at a transparent, affordable flat fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="mt-6 prose prose-blue text-gray-600 mx-auto">
              <p>
                Our mission is to empower small non-profit organizations to maintain their tax-exempt status with confidence and ease, 
                allowing them to focus on the important work they do in their communities.
              </p>
              <p>
                We believe that IRS compliance shouldn't be a burden or a source of stress for small non-profits. 
                By providing expert, affordable filing services, we help these organizations protect their tax-exempt status 
                so they can continue making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Simplicity</h3>
              <p className="mt-2 text-gray-600">
                We believe in making the complex simple. Our streamlined process removes the confusion and stress from IRS filings.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
              <p className="mt-2 text-gray-600">
                We combine deep knowledge of non-profit tax requirements with a commitment to staying current with IRS regulations.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accessibility</h3>
              <p className="mt-2 text-gray-600">
                We believe professional tax services should be accessible to organizations of all sizes, including small volunteer-run non-profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The experts behind our specialized non-profit filing service
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sarah Johnson" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-primary-600">Founder & CEO</p>
                <p className="mt-2 text-gray-600">
                  CPA with 15+ years of experience in non-profit accounting. Sarah founded 990FileEasy to make IRS compliance accessible to small organizations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Michael Rodriguez" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Michael Rodriguez</h3>
                <p className="text-primary-600">Tax Specialist</p>
                <p className="mt-2 text-gray-600">
                  Former IRS employee with deep knowledge of exempt organization requirements. Michael ensures all filings meet current IRS standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Jennifer Lee" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Jennifer Lee</h3>
                <p className="text-primary-600">Client Success Manager</p>
                <p className="mt-2 text-gray-600">
                  Non-profit management background with a passion for helping organizations thrive. Jennifer ensures a smooth experience for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our Expertise</h2>
            <div className="mt-6 prose prose-blue text-gray-600">
              <p>
                At 990FileEasy, we specialize exclusively in IRS Form 990-N and 990-EZ filings for small non-profit organizations. 
                This focused approach allows us to provide expert service in this specific area of non-profit compliance.
              </p>
              <p>
                Our team includes:
              </p>
              <ul>
                <li>Certified Public Accountants (CPAs) with non-profit specialization</li>
                <li>Former IRS employees familiar with exempt organization requirements</li>
                <li>Non-profit management professionals who understand the unique challenges of small organizations</li>
              </ul>
              <p>
                We stay current with all IRS regulations affecting small non-profits, ensuring that your filing meets the latest requirements. 
                Our specialized knowledge allows us to efficiently prepare and file your forms while identifying potential issues before they become problems.
              </p>
              <p>
                While we focus specifically on 990-N and 990-EZ filings, we maintain a network of trusted professionals who can assist with other non-profit needs, 
                including full Form 990 preparation, state filings, and broader accounting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold">RB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Brown</h4>
                  <p className="text-sm text-gray-500">Board President, Neighborhood Arts Council</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a small arts organization run entirely by volunteers, we were struggling with our annual 990-N filing. 
                990FileEasy made the process incredibly simple and gave us peace of mind knowing it was done correctly. 
                Their service is worth every penny for the time and stress it saved us."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold">AW</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amanda Wilson</h4>
                  <p className="text-sm text-gray-500">Treasurer, Community Food Pantry</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "When our organization grew and needed to switch from 990-N to 990-EZ, I was worried about the more complex form. 
                The team at 990FileEasy guided me through the process, explained exactly what information was needed, and handled everything professionally. 
                I highly recommend their service to any small non-profit."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to simplify your IRS filing?</h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Let us handle your 990-N or 990-EZ filing so you can focus on your mission
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              <Link to="/get-started">Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage