import React from "react"
import { Card, CardContent } from "../../../components/ui/card"
import { Label } from "../../../components/ui/label"
import { Cost } from "./Cost"
import { Separator } from "../../../components/ui/separator"
import { CheckDetails } from "../../../components/flyDetails/CheckDetails"
import { Flight } from "../../../lib/types"

export const Flys: React.FC = () => {
    const data = localStorage.getItem("bookedFlights")
    const flights: Flight[] = data ? JSON.parse(data) : []
    const [selectedPrices, setSelectedPrices] = React.useState<{ [key: string]: string }>({})

    const handleSelectPrice = (flightId: string, price: string) => {
        const updatedFlights = flights.map((flight) =>
            flight.id === flightId ? { ...flight, totalPrice: price } : flight
        )

        setSelectedPrices((prev) => ({
            ...prev,
            [flightId]: price
        }))

        localStorage.setItem('bookedFlights', JSON.stringify(updatedFlights))
    }

    return (
        <div className="w-full flex flex-col mb-4 gap-4 items-center">
            {flights?.map((item, index) => {
                return (
                    <div className="w-full" key={index}>
                        <Card className="w-full shadow-none grid grid-cols-1 sm:grid-cols-2 p-8 border-none">
                            <CardContent className="w-full grid grid-rows-2 !p-6">
                                <div>
                                    <Label className="text-gray-700 font-semibold text-2xl">
                                        {item?.scheduleDateTime ? new Date(item.scheduleDateTime).toLocaleTimeString() : "Unknown"}
                                    </Label>
                                    <Label className="text-gray-700 font-semibold text-2xl">-</Label>
                                    <Label className="text-gray-700 font-semibold text-2xl">
                                        {item?.actualLandingTime ? new Date(item.actualLandingTime).toLocaleTimeString() : "Unknown"}
                                    </Label>

                                </div>
                                <div className="w-full flex flex-col 2xl:flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col items-start gap-1">
                                        <Label className="text-gray-700 text-l">{item?.flightName?.publicName}</Label>
                                        <CheckDetails data={item} className="p-0" />
                                    </div>
                                    <Separator className="w-full md:w-40" />
                                    <Label className="text-gray-700 text-l">{item.serviceType}:({item?.flightDuration})</Label>
                                    <Separator className="w-full md:w-40" />
                                    <div className="flex flex-col items-start gap-1">
                                        <Label className="text-gray-700 text-l">{item?.departureInfo?.iata} to {item?.arrivalInfo?.iata}</Label>
                                        <Label className="text-gray-700 text-l">{item?.mainFlight}</Label>
                                    </div>
                                </div>
                            </CardContent>
                            <CardContent className="w-full flex items-center justify-center sm:justify-evenly !p-0">
                                <Separator className="w-0.5 h-full hidden md:block" />
                                <Cost
                                    data={item?.price}
                                    flightId={item?.id}
                                    handleSelectPrice={handleSelectPrice}
                                    selectedPrices={selectedPrices} />
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
