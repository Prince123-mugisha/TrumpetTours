import { useState } from "react"
import { CheckCircle2, Plane, Sparkles, X } from "lucide-react"

interface TripPlannerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TripPlannerDialog = ({ open, onOpenChange }: TripPlannerDialogProps) => {
  const [arrivalDate, setArrivalDate] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showRwandaOtherInput, setShowRwandaOtherInput] = useState(false)
  const [showUgandaOtherInput, setShowUgandaOtherInput] = useState(false)
  const [otherRwandaDestination, setOtherRwandaDestination] = useState("")
  const [otherUgandaDestination, setOtherUgandaDestination] = useState("")

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsSubmitted(false)
      setError(null)
      setArrivalDate("")
      setDepartureDate("")
      setShowRwandaOtherInput(false)
      setShowUgandaOtherInput(false)
      setOtherRwandaDestination("")
      setOtherUgandaDestination("")
    }
    onOpenChange(open)
  }

  const attractions = [
    // Rwanda Attractions
    { id: "akagera", label: "Akagera National Park, Rwanda (wildlife safaris & more)" },
    { id: "kigali", label: "Kigali City Tour (Genocide Memorial & more)" },
    { id: "volcanoes", label: "Volcanoes National Park (Gorilla Trekking & more)" },
    { id: "kivu", label: "Lake Kivu (Relaxation & more)" },
    { id: "nyungwe", label: "Nyungwe National Park (Primate Treks, Waterfalls & more)" },
    { id: "all-rwanda", label: "All Touristic Attractions in Rwanda" },
    
    // Uganda Attractions
    { id: "bwindi", label: "Bwindi Impenetrable Forest (Gorilla Trekking & nature walks)" },
    { id: "queen-elizabeth", label: "Queen Elizabeth National Park (Tree-climbing lions & game drives)" },
    { id: "kibale", label: "Kibale National Park (Chimpanzee tracking & forest walks)" },
    { id: "kidepo", label: "Kidepo Valley National Park (Remote wilderness & game drives)" },
    { id: "mgahinga", label: "Mgahinga Gorilla National Park (Gorillas & golden monkeys)" },
    { id: "murchison", label: "Murchison Falls National Park (Wildlife & Nile cruises)" },
    { id: "mburo", label: "Lake Mburo National Park (Zebras & horseback safaris)" },
    { id: "elgon", label: "Mount Elgon National Park (Hiking & cave exploration)" },
    { id: "semuliki", label: "Semuliki National Park (Hot springs & rainforest)" },
    { id: "all-uganda", label: "All Touristic Attractions in Uganda" }
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (arrivalDate && departureDate && new Date(departureDate) < new Date(arrivalDate)) {
      setError("Departure date cannot be earlier than arrival date.")
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      setIsSubmitting(true)
      const response = await fetch("https://formspree.io/f/xovkboov", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setArrivalDate("")
        setDepartureDate("")
      } else {
        setError("❌ Something went wrong while sending your request. Please try again.")
      }
    } catch {
      setError("❌ Network error. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={() => handleOpenChange(false)}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-safari-gold/10 to-white px-4 sm:px-8 pt-8 sm:pt-10 pb-4 sm:pb-6 border-b">
          <h2 className="text-2xl sm:text-3xl font-bold text-safari-gold">
            Plan Your Dream Safari Adventure
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">
            Let us create your perfect Rwandan experience — from gorilla trekking to Lake Kivu sunsets.
          </p>
        </div>

        {!isSubmitted ? (
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <form onSubmit={handleFormSubmit} className="p-4 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <section className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name *</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="name" required placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address *</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="email" type="email" required placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number *</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="phone" type="tel" required placeholder="+250 XXX XXX XXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Country of Residence</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="country" placeholder="Enter your country" />
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Stay Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Duration of Stay (nights)</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="duration" type="number" min="1" placeholder="Number of nights" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Group Size</label>
                        <input className="w-full px-3 py-2 border rounded-lg" name="groupSize" type="number" min="1" placeholder="Number of travelers" />
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <section className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Travel Schedule</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Arrival Date *</label>
                        <input
                          className="w-full px-3 py-2 border rounded-lg"
                          name="arrivalDate"
                          type="date"
                          value={arrivalDate}
                          onChange={(e) => setArrivalDate(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Departure Date *</label>
                        <input
                          className="w-full px-3 py-2 border rounded-lg"
                          name="departureDate"
                          type="date"
                          value={departureDate}
                          onChange={(e) => setDepartureDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                      Destinations & Preferences
                    </h3>
                    <div className="space-y-6">
                      {/* Rwanda Destinations */}
                      <div>
                        <h4 className="text-safari-gold font-semibold mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-safari-gold"/>
                          Rwanda Destinations
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {attractions
                            .filter(a => a.id.includes('akagera') || a.id.includes('kigali') || 
                                       a.id.includes('volcanoes') || a.id.includes('kivu') || 
                                       a.id.includes('nyungwe') || a.id === 'all-rwanda')
                            .map((a) => (
                              <div key={a.id} className="flex items-center space-x-2">
                                <input type="checkbox" id={a.id} name={`attraction-${a.id}`} className="w-4 h-4" />
                                <label htmlFor={a.id} className="text-sm">{a.label}</label>
                              </div>
                            ))}
                        </div>

                        {/* Other Rwanda Destinations Option */}
                        <div className="mt-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="other-rwanda-destination"
                              checked={showRwandaOtherInput}
                              onChange={(e) => {
                                setShowRwandaOtherInput(e.target.checked)
                                if (!e.target.checked) {
                                  setOtherRwandaDestination("")
                                }
                              }}
                              className="w-4 h-4"
                            />
                            <label htmlFor="other-rwanda-destination" className="text-sm">Other Rwanda Destination</label>
                          </div>
                          
                          {showRwandaOtherInput && (
                            <div className="mt-2 ml-6">
                              <input
                                type="text"
                                name="other-rwanda-destination"
                                value={otherRwandaDestination}
                                onChange={(e) => setOtherRwandaDestination(e.target.value)}
                                placeholder="Please specify your desired Rwanda destination"
                                className="w-full px-3 py-2 border rounded-lg text-sm"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Uganda Destinations */}
                      <div>
                        <h4 className="text-safari-gold font-semibold mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-safari-gold"/>
                          Uganda Destinations
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {attractions
                            .filter(a => a.id.includes('bwindi') || a.id.includes('queen') || 
                                       a.id.includes('kibale') || a.id.includes('kidepo') || 
                                       a.id.includes('mgahinga') || a.id.includes('murchison') ||
                                       a.id.includes('mburo') || a.id.includes('elgon') ||
                                       a.id.includes('semuliki') || a.id === 'all-uganda')
                            .map((a) => (
                              <div key={a.id} className="flex items-center space-x-2">
                                <input type="checkbox" id={a.id} name={`attraction-${a.id}`} className="w-4 h-4" />
                                <label htmlFor={a.id} className="text-sm">{a.label}</label>
                              </div>
                            ))}
                        </div>

                        {/* Other Destinations Option */}
                        <div className="mt-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="other-destination"
                              checked={showUgandaOtherInput}
                              onChange={(e) => {
                                setShowUgandaOtherInput(e.target.checked)
                                if (!e.target.checked) {
                                  setOtherUgandaDestination("")
                                }
                              }}
                              className="w-4 h-4"
                            />
                            <label htmlFor="other-destination" className="text-sm">Other Uganda Destination</label>
                          </div>
                          
                          {showUgandaOtherInput && (
                            <div className="mt-2 ml-6">
                              <input
                                type="text"
                                name="other-uganda-destination"
                                value={otherUgandaDestination}
                                onChange={(e) => setOtherUgandaDestination(e.target.value)}
                                placeholder="Please specify your desired destination"
                                className="w-full px-3 py-2 border rounded-lg text-sm"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-50 rounded-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
                    <textarea
                      className="w-full px-3 py-2 border rounded-lg"
                      name="comments"
                      rows={4}
                      placeholder="Do you have any extra comments or special requests?"
                    />
                  </section>
                </div>
              </div>

              {/* Submit Button - Always Visible */}
              <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-safari-gold text-[#1D1F16] hover:bg-safari-gold/90 font-semibold py-3 sm:py-4 rounded-xl shadow-md transition-all text-sm sm:text-base"
                >
                  {isSubmitting ? "Sending..." : "Submit Trip Plan Request"}
                </button>

                {error && (
                  <p className="text-red-600 text-sm mt-3 text-center" role="alert">
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[calc(90vh-120px)] text-center px-4 sm:px-8 py-8">
            <CheckCircle2 className="text-green-500 w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              ✅ Your trip plan has been sent successfully! Our team will contact you within 24 hours to customize your safari adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#D4AF37] text-[#1D1F16] font-semibold px-6 py-3 rounded-xl hover:bg-[#D4AF37]/90 flex items-center justify-center gap-2"
              >
                <Plane className="w-5 h-5" /> Plan Another Trip
              </button>
              <button
                onClick={() => handleOpenChange(false)}
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 font-semibold"
              >
                Close
              </button>
            </div>
            <Sparkles className="text-[#D4AF37] mt-6 sm:mt-10 w-8 h-8 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}

export { TripPlannerDialog }