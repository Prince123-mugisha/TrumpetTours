import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, Plane, Sparkles } from "lucide-react"

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

  // Reset states when dialog is closed
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset all states when dialog is closed
      setIsSubmitted(false)
      setError(null)
      setArrivalDate("")
      setDepartureDate("")
    }
    onOpenChange(open)
  }

  const attractions = [
    { id: "akagera", label: "Akagera National Park (wildlife safaris & more)" },
    { id: "kigali", label: "Kigali City Tour (Genocide Memorial & more)" },
    { id: "volcanoes", label: "Volcanoes National Park (Gorilla Trekking & more)" },
    { id: "kivu", label: "Lake Kivu (Relaxation & more)" },
    { id: "nyungwe", label: "Nyungwe National Park (Primate Treks, Waterfalls & more)" },
    { id: "all", label: "All Touristic Attractions in Rwanda" },
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

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="fixed top-1/2 left-1/2 w-[95vw] max-w-5xl h-[90vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

        <DialogHeader className="bg-gradient-to-r from-safari-gold/10 to-white px-8 pt-10 pb-6 border-b">
          <DialogTitle className="text-3xl font-bold text-safari-gold">
            Plan Your Dream Safari Adventure
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base mt-3">
            Let us create your perfect Rwandan experience — from gorilla trekking to Lake Kivu sunsets.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollArea className="h-[calc(90vh-140px)] px-8">
                <form onSubmit={handleFormSubmit} className="py-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      <section className="bg-gray-50 rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input id="name" name="name" required placeholder="Enter your full name" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" name="phone" type="tel" required placeholder="+250 XXX XXX XXX" />
                          </div>
                          <div>
                            <Label htmlFor="country">Country of Residence</Label>
                            <Input id="country" name="country" placeholder="Enter your country" />
                          </div>
                        </div>
                      </section>

                      <section className="bg-gray-50 rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Stay Details</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="duration">Duration of Stay (nights)</Label>
                            <Input id="duration" name="duration" type="number" min="1" placeholder="Number of nights" />
                          </div>
                          <div>
                            <Label htmlFor="groupSize">Group Size</Label>
                            <Input id="groupSize" name="groupSize" type="number" min="1" placeholder="Number of travelers" />
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      <section className="bg-gray-50 rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Travel Schedule</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <Label htmlFor="arrivalDate">Arrival Date *</Label>
                            <Input
                              id="arrivalDate"
                              name="arrivalDate"
                              type="date"
                              value={arrivalDate}
                              onChange={(e) => setArrivalDate(e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="departureDate">Departure Date *</Label>
                            <Input
                              id="departureDate"
                              name="departureDate"
                              type="date"
                              value={departureDate}
                              onChange={(e) => setDepartureDate(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </section>

                      <section className="bg-gray-50 rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                          Destinations & Preferences
                        </h3>
                        <Label>Select Your Desired Destinations</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                          {attractions.map((a) => (
                            <div key={a.id} className="flex items-center space-x-3">
                              <Checkbox id={a.id} name={`attraction-${a.id}`} />
                              <Label htmlFor={a.id}>{a.label}</Label>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="bg-gray-50 rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Information</h3>
                        <Textarea
                          id="comments"
                          name="comments"
                          rows={4}
                          placeholder="Do you have any extra comments or special requests?"
                        />
                      </section>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-safari-gold text-gray-900 hover:bg-safari-gold/90 font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Submit Trip Plan Request"}
                    </Button>

                    {error && (
                      <p className="text-red-600 text-sm mt-3 text-center" role="alert">
                        {error}
                      </p>
                    )}
                  </div>
                </form>
              </ScrollArea>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center h-[calc(90vh-140px)] text-center px-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle2 className="text-green-500 w-20 h-20 mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600 text-lg max-w-lg">
                ✅ Your trip plan has been sent successfully! Our team will contact you within 24 hours to customize your safari adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-safari-gold text-black font-semibold px-6 py-3 rounded-xl hover:bg-safari-gold/90"
                >
                  <Plane className="mr-2 w-5 h-5" /> Plan Another Trip
                </Button>
                <Button
                  onClick={() => onOpenChange(false)}
                  variant="outline"
                  className="px-6 py-3 rounded-xl border-gray-300"
                >
                  Close
                </Button>
              </div>
              <Sparkles className="text-safari-gold mt-10 w-8 h-8 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

export { TripPlannerDialog }
