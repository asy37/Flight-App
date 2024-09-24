import React, { useState } from "react"
import { Card, CardContent, CardFooter } from "../../../components/ui/card"
import { Plane } from "lucide-react"
import { Label } from "../../../components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { FilterInput } from "../../../components/flyFilter/FilterInput"
import { DatePicker } from "../../../components/flyFilter/DatePicker"
import { Button } from "../../../components/ui/button"
import { Flight } from "../../../lib/types"

type Props = {
    data: Flight[]
    setData: (data: Flight[]) => void
}

export const FlyFilter: React.FC<Props> = ({ data, setData }) => {
    const [selectedType, setSelectedType] = useState("Round Trip")
    const [departureCity, setDepartureCity] = useState("")
    const [landingCity, setLandingCity] = useState("")
    const [selectedDepartureDate, setSelectedDepartureDate] = useState<Date | string | null>(null)
    const [selectedLandingDate, setSelectedLandingDate] = useState<Date | string | null>(null)

    const filterFlights = () => {
        const filteredFlights = data.filter(flight => {
            const ticketMatch = flight.ticketType?.trim().toLowerCase() === selectedType.toLowerCase()
            const departureMatch = departureCity ? flight.departureInfo?.country?.toLowerCase() === departureCity.toLowerCase() : true
            const landingMatch = landingCity ? flight.arrivalInfo?.country?.toLowerCase() === landingCity.toLowerCase() : true

            const actualLandingDate = flight?.actualLandingTime
            const scheduleDate = flight?.scheduleDate

            const landingDateMatch = selectedLandingDate ? actualLandingDate === selectedLandingDate : true
            const departureDateMatch = selectedDepartureDate ? scheduleDate === selectedDepartureDate : true

            return ticketMatch && departureMatch && landingMatch && landingDateMatch && departureDateMatch
        })

        setData(filteredFlights.length ? filteredFlights : data)
    }

    const resetFilters = () => {
        setSelectedType("Round Trip")
        setDepartureCity("")
        setLandingCity("")
        setSelectedDepartureDate(null)
        setSelectedLandingDate(null)
        setData(data)
    }

    return (
        <Card className="shadow-none">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <Tabs defaultValue="Round Trip" className="w-full flex flex-col gap-20" onValueChange={value => setSelectedType(value)}>
                    <TabsList className="flex flex-col lg:flex-row w-full items-center justify-between bg-white p-6 gap-4">
                        <div className="flex items-center gap-2">
                            <Plane color="rgb(30 58 138)" />
                            <Label className="text-blue-900 font-semibold text-lg">Book Your Flight</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <TabsTrigger value="Round Trip" className="text-base font-semibold text-blue-900 data-[state=active]:text-yellow-400">
                                Round trip
                            </TabsTrigger>
                            <TabsTrigger value="One Way" className="text-base font-semibold text-blue-900 data-[state=active]:text-yellow-400">
                                One way
                            </TabsTrigger>
                        </div>
                    </TabsList>
                    <div>
                        <CardContent className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                                <FilterInput className="rounded lg:rounded-l-xl lg:rounded-r-none w-auto lg:w-full" selectedValue={departureCity} onChange={setDepartureCity} />
                                <FilterInput className="rounded lg:rounded-l-none lg:rounded-r-xl w-auto lg:w-full" landing={true} selectedValue={landingCity} onChange={setLandingCity} />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                                <DatePicker className="rounded lg:rounded-l-xl lg:rounded-r-none w-auto lg:w-full" onChange={setSelectedDepartureDate} />
                                <DatePicker className="rounded lg:rounded-l-none lg:rounded-r-xl w-auto lg:w-full" onChange={setSelectedLandingDate} />
                            </div>
                        </CardContent>
                    </div>
                </Tabs>
            </div>
            <CardFooter className="flex justify-center lg:justify-end">
                <Button variant="link" onClick={filterFlights}>
                    Show Flights
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                    Reset Filters
                </Button>
            </CardFooter>
        </Card>
    )
}
