import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input } from "./input"
import { FaCircleCheck } from "react-icons/fa6"
import { ImCross } from "react-icons/im"
import { BsCheckCircleFill } from "react-icons/bs"

interface ItineraryDetails {
  id: string
  image: string
  title: string
  description?: string
  days?: { day: number; activities: string[] }[]
  included?: string[]
  excluded?: string[]
  accommodation?: string[]
}

interface ItineraryDialogProps {
  itinerary: ItineraryDetails | null
  isOpen: boolean
  onClose: () => void
}

export function ItineraryDialog({ itinerary, isOpen, onClose }: ItineraryDialogProps) {
  const [activeTab, setActiveTab] = React.useState<'itinerary' | 'inclusions' | 'exclusions' | 'accommodation'>('itinerary')
  const [showBookingForm, setShowBookingForm] = React.useState(false)
  const [bookingForm, setBookingForm] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    // Prepare itinerary details for email
    const activitiesList = itinerary.days?.map(day => 
      `Day ${day.day}:\n${day.activities.map(activity => `- ${activity}`).join('\n')}`
    ).join('\n\n')

    const includesList = itinerary.included?.map(item => `- ${item}`).join('\n')
    const excludesList = itinerary.excluded?.map(item => `- ${item}`).join('\n')
    const accommodationList = itinerary.accommodation?.map(item => `- ${item}`).join('\n')

    const itineraryDetails = `
Itinerary: ${itinerary.title}
Duration: ${itinerary.days?.length || 0} days

Description:
${itinerary.description}

Daily Activities:
${activitiesList}

Inclusions:
${includesList}

Exclusions:
${excludesList}

Accommodation:
${accommodationList}
`

    const formData = new FormData()
    formData.append('fullName', bookingForm.fullName)
    formData.append('email', bookingForm.email)
    formData.append('phoneNumber', bookingForm.phoneNumber)
    formData.append('customerDetails', `
Customer Information:
Name: ${bookingForm.fullName}
Email: ${bookingForm.email}
Phone: ${bookingForm.phoneNumber}
    `)
    formData.append('itineraryDetails', itineraryDetails)

    try {
      const response = await fetch("https://formspree.io/f/xovkboov", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form data but keep it visible to show success message
        setBookingForm({ fullName: '', email: '', phoneNumber: '' })
      } else {
        setError("❌ Something went wrong while sending your request. Please try again.")
      }
    } catch {
      setError("❌ Network error. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!itinerary) return null

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        {showBookingForm && (
          <DialogPrimitive.Content
            className="fixed left-[50%] top-[50%] z-[51] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <DialogPrimitive.Title className="text-xl font-semibold">
                  {isSubmitted ? "Booking Confirmation" : `Book ${itinerary.title}`}
                </DialogPrimitive.Title>
                <button 
                  onClick={() => {
                    setShowBookingForm(false)
                    setIsSubmitted(false)
                  }} 
                  className="text-gray-400 hover:text-gray-500"
                >
                  <ImCross />
                </button>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="relative">
                    <FaCircleCheck className="text-green-500 w-24 h-24 animate-[ping_1s_ease-in-out]" />
                    <FaCircleCheck className="text-green-500 w-24 h-24 absolute top-0 left-0 animate-[bounce_2s_ease-in-out_infinite]" />
                  </div>
                  <h3 className="text-2xl font-bold text-safari-gold mb-3 animate-[fadeIn_0.5s_ease-in]">
                    Booking Request Sent Successfully!
                  </h3>
                  <div className="space-y-4 max-w-md mx-auto">
                    <p className="text-gray-600 animate-[fadeIn_0.6s_ease-in]">
                      Thank you for choosing to book <span className="font-semibold text-safari-gold">{itinerary.title}</span>!
                    </p>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-left animate-[fadeIn_0.7s_ease-in]">
                      <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li className="flex items-center gap-2 animate-[slideIn_0.5s_ease-in]">
                          <FaCircleCheck className="text-green-500 animate-[spin_1s_ease-in-out]" />
                          A confirmation email has been sent to {bookingForm.email}
                        </li>
                        <li className="flex items-center gap-2 animate-[slideIn_0.6s_ease-in]">
                          <FaCircleCheck className="text-green-500 animate-[spin_1s_ease-in-out]" />
                          Our team will review your booking details
                        </li>
                        <li className="flex items-center gap-2 animate-[slideIn_0.7s_ease-in]">
                          <FaCircleCheck className="text-green-500 animate-[spin_1s_ease-in-out]" />
                          We will contact you within 24 hours to confirm your itinerary
                        </li>
                        <li className="flex items-center gap-2 animate-[slideIn_0.8s_ease-in]">
                          <FaCircleCheck className="text-green-500 animate-[spin_1s_ease-in-out]" />
                          Feel free to reach out if you have any questions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowBookingForm(false)
                        setIsSubmitted(false)
                      }} 
                      className="px-6"
                    >
                      Close
                    </Button>
                    <Button 
                      variant="default"
                      onClick={() => {
                        setIsSubmitted(false)
                        setBookingForm({
                          fullName: '',
                          email: '',
                          phoneNumber: ''
                        })
                        // Just reset the form without closing the booking dialog
                      }}
                      className="px-6"
                    >
                      Book Another Trip
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                    <Input
                      id="fullName"
                      value={bookingForm.fullName}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={bookingForm.phoneNumber}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      required
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm mt-2" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="flex justify-end gap-2 pt-4">
                    <Button 
                      variant="outline" 
                      type="button" 
                      onClick={() => setShowBookingForm(false)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="default" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Booking"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </DialogPrimitive.Content>
        )}
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-6xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[90vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <DialogPrimitive.Title className="text-2xl font-bold">
                {itinerary.title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className="text-gray-400 hover:text-gray-500">
                <ImCross />
              </DialogPrimitive.Close>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left side - Image */}
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right side - Details */}
              <div className="flex flex-col gap-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={activeTab === 'itinerary' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('itinerary')}
                  >
                    Itinerary
                  </Button>
                  <Button
                    variant={activeTab === 'inclusions' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('inclusions')}
                  >
                    Inclusions
                  </Button>
                  <Button
                    variant={activeTab === 'exclusions' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('exclusions')}
                  >
                    Exclusions
                  </Button>
                  <Button
                    variant={activeTab === 'accommodation' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('accommodation')}
                  >
                    Accommodation
                  </Button>
                </div>

                {/* Tab content */}
                <div className="mt-4">
                  {activeTab === 'itinerary' && (
                    <div className="space-y-4">
                      <p className="text-gray-700">{itinerary.description}</p>
                      {itinerary.days?.map((day) => (
                        <div key={day.day} className="space-y-2">
                          <h4 className="font-semibold">Day {day.day}</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="text-gray-600">{activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'inclusions' && (
                    <ul className="space-y-2">
                      {itinerary.included?.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <FaCircleCheck className="text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'exclusions' && (
                    <ul className="space-y-2">
                      {itinerary.excluded?.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <ImCross className="text-red-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'accommodation' && (
                    <ul className="space-y-2">
                      {itinerary.accommodation?.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2">
              <Button variant="default" onClick={() => setShowBookingForm(true)}>Book Now</Button>
              <Button variant="outline" onClick={onClose}>Close</Button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}