import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Flight } from "../../lib/types"

type Props = {
    data?: Flight
    className?: string,
}

export const CheckDetails: React.FC<Props> = ({ data, className }) => {
    const formatTime = (isoString: string) => {
        const date = new Date(isoString)
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"ghost"} className={className}>Check Details</Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-80 md:w-96">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label>Flight Direction</Label>
                            <Label className="text-end">{data?.flightDirection}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Operational Flight</Label>
                            <Label className="text-end">{data?.isOperationalFlight ? "Yes" : "No"}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Flight Number</Label>
                            <Label className="text-end">{data?.flightNumber}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Baggage Claim</Label>
                            <Label className="text-end">{data?.baggageClaim?.belts?.[0] || "Unknown"}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Expected Time On Belt</Label>
                            <Label className="text-end">
                                {data?.expectedTimeOnBelt ? formatTime(data.expectedTimeOnBelt) : "Unknown"}
                            </Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Air Craft Type</Label>
                            <Label className="text-end">{data?.aircraftType?.iataMain}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Airline Code</Label>
                            <Label className="text-end">{data?.airlineCode}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Terminal</Label>
                            <Label className="text-end">{data?.terminal}</Label>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 h-8">
                            <Label>Visa</Label>
                            <Label className="text-end">{data?.route?.visa ? "Yes" : "No"}</Label>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
