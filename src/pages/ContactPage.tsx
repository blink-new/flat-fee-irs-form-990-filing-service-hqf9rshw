
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Mail, Phone, MapPin } from 'lucide-react'
import { toast } from 'sonner'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 1500)
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-600">
              Have questions about our service? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.org"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name</Label>
                  <Input 
                    id="organization" 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange} 
                    placeholder="Your Non-Profit Name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                    <SelectTrigger id="inquiryType">
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="990n">Form 990-N Filing</SelectItem>
                      <SelectItem value="990ez">Form 990-EZ Filing</SelectItem>
                      <SelectItem value="pricing">Pricing Question</SelectItem>
                      <SelectItem value="process">Process Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="mt-2 text-gray-600">
                Reach out to us directly using the information below.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@990fileeasy.com" className="text-primary-600 hover:text-primary-700">
                        info@990fileeasy.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      We typically respond within 1 business day
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+18005551234" className="text-primary-600 hover:text-primary-700">
                        (800) 555-1234
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Monday-Friday, 9am-5pm Eastern Time
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">
                      123 Non-Profit Way<br />
                      Suite 456<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900">Approaching a Filing Deadline?</h3>
                <p className="mt-2 text-gray-600">
                  If you're close to your filing deadline, please call us directly for expedited service options. 
                  We understand the importance of meeting IRS deadlines and can help ensure your filing is submitted on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How quickly will you respond to my inquiry?</h3>
                <p className="mt-2 text-gray-600">
                  We strive to respond to all inquiries within 1 business day. For urgent matters, please call us directly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Can I schedule a consultation before deciding to use your service?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! We offer free 15-minute consultations to discuss your organization's specific needs and answer any questions you may have. 
                  You can schedule a consultation by phone or email.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you work with organizations outside the United States?</h3>
                <p className="mt-2 text-gray-600">
                  Our service is specifically designed for U.S.-based non-profit organizations filing IRS Forms 990-N and 990-EZ. 
                  We currently do not provide services for international organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage