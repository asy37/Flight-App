import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react"
import { Separator } from "../ui/separator"
import { cn } from "../../lib"
import { CheckDetails } from "./CheckDetails"
import { Flight } from "../../lib/types"

type Props = {
    data: Flight[]
    className?: string
}

export const FlyDetailCard: React.FC<Props> = ({ data, className }) => {
    const [bookedFlights, setBookedFlights] = React.useState<{ [key: string]: boolean }>({})

    const handleBookFlight = (flight: Flight) => {
        const existingFlights = localStorage.getItem("bookedFlights")
        const bookedFlightsArray: Flight[] = existingFlights ? JSON.parse(existingFlights) : []

        const isFlightBooked = bookedFlightsArray.some((bookedFlight: Flight) => bookedFlight.id === flight.id)

        if (isFlightBooked) {
            console.log("This flight is already booked.")
            return
        }

        const updatedFlights = [...bookedFlightsArray, flight]
        localStorage.setItem("bookedFlights", JSON.stringify(updatedFlights))

        setBookedFlights((prev) => ({ ...prev, [String(flight.id)]: true }))
    }

    const handleDeleteFlight = (flight: Flight) => {
        const existingFlights = localStorage.getItem("bookedFlights")
        const bookedFlightsArray: Flight[] = existingFlights ? JSON.parse(existingFlights) : []

        const updatedFlights = bookedFlightsArray.filter((bookedFlight: Flight) => bookedFlight.id !== flight.id)
        localStorage.setItem("bookedFlights", JSON.stringify(updatedFlights))
        console.log("Updated Booked Flights: ", updatedFlights)

        setBookedFlights((prev) => ({ ...prev, [String(flight.id)]: false }))
    }

    return (
        <div className={cn("flex flex-col mb-4 gap-2 items-center", className)}>
            {data?.map((item, index) => {
                const isFlightBooked = bookedFlights[item.id]

                return (
                    <div className="w-full" key={index}>
                        <Card className="w-full rounded-bl-none shadow-none border-none">
                            <CardHeader>
                                <CardTitle className="flex justify-start">
                                    <Label>{item.departureInfo?.iata ?? "Unknown"}</Label>
                                    <Label>-</Label>
                                    <Label>{item.arrivalInfo?.iata ?? "Unknown"}</Label>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col min-[1699px]:flex-row items-center justify-evenly">
                                <div className="flex flex-col items-center justify-start gap-4 shrink-0 p-2">
                                    <Label className="flex gap-1 items-center">
                                        <PlaneTakeoff /> Departure
                                    </Label>
                                    <Label>{new Date(item?.scheduleDateTime || "").toLocaleTimeString()}</Label>
                                    <Label>Airport: {item?.departureInfo?.city ?? item?.departureInfo?.country}</Label>
                                </div>
                                <Separator className="w-full md:w-40" />
                                <div className="flex flex-col items-center justify-start gap-4 shrink-0 p-2">
                                    <Label>{item?.flightName?.publicName}</Label>
                                    <Plane />
                                    <Label>{item.serviceType}: ({item?.flightDuration})</Label>
                                </div>
                                <Separator className="w-full md:w-40" />
                                <div className="flex flex-col items-center justify-start gap-4 shrink-0 p-2">
                                    <Label className="flex items-center gap-2">
                                        <PlaneLanding /> Arrival
                                    </Label>
                                    <Label>{new Date(item?.actualLandingTime || "").toLocaleTimeString()}</Label>
                                    <Label>Airport: {item?.arrivalInfo?.city ?? item?.arrivalInfo?.country}</Label>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col md:flex-row justify-between p-4">
                                <Label className="text-blue-900 text-xl font-bold">
                                    Price: {Array.isArray(item?.price) && item.price.length > 0 ? item.price[0].amount : "Price not available"}
                                </Label>
                                <Label className="text-blue-700 text-l font-bold">{item?.ticketType}</Label>

                                {!isFlightBooked ? (
                                    <Button variant="link" onClick={() => handleBookFlight(item)}>Book Flight</Button>
                                ) : (
                                    <Button variant="secondary" onClick={() => handleDeleteFlight(item)}>Delete Book</Button>
                                )}
                            </CardFooter>
                        </Card>
                        <CheckDetails data={item} className="border-none rounded-t-none bg-gray-300" />
                    </div>
                )
            })}
        </div>
    )
}
