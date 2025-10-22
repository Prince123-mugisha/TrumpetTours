import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { FaCircleCheck } from "react-icons/fa6"
import { ImCross } from "react-icons/im"

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

  if (!itinerary) return null

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
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
              <Button variant="outline" onClick={onClose}>Close</Button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}