import React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Label } from "../../components/ui/label"
import { useState } from "react"
import { Flight } from "../../lib/types"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useAirlines } from "../../features/useAirlines"
import { X } from "lucide-react"

type Props = {
    data: Flight[]
    setData: (data: Flight[]) => void
}

export const FlyDetailSort: React.FC<Props> = ({ data, setData }) => {
    const { useGetAllAirlines } = useAirlines()
    const { data: airlines } = useGetAllAirlines()

    const airlinesData = React.useMemo(() => {
        return airlines?.airlines ?? []
    }, [airlines])

    const [, setSortOption] = useState<string>("")
    const [selectedTimeRange, setSelectedTimeRange] = useState<string>("")
    const [selectedAirline, setSelectedAirline] = useState<string>("")

    const sortData = (option: string) => {
        const sortedData = [...data]
        sortedData.sort((a, b) => {
            const priceA = parseFloat(a.totalPrice.replace('$', '').trim())
            const priceB = parseFloat(b.totalPrice.replace('$', '').trim())
            return option === "Lowest Price" ? priceA - priceB : priceB - priceA
        })
        setData(sortedData)
    }

    const handleSelectChange = (value: string) => {
        setSortOption(value)
        sortData(value)
    }

    const handleTimeRangeChange = (value: string) => {
        setSelectedTimeRange(value)
        filterData(selectedAirline, value)
    }

    const handleAirlineChange = (value: string) => {
        setSelectedAirline(value)
        filterData(value, selectedTimeRange)
    }

    const filterData = (airline: string, timeRange: string) => {
        const filteredData = data.filter(flight => {
            const estimatedTimeStr = flight?.estimatedLandingTime
            if (!estimatedTimeStr) return false

            const [hours] = estimatedTimeStr.split(':').map(Number)

            if (timeRange === "morning" && !(hours >= 0 && hours < 12)) {
                return false
            } else if (timeRange === "afternoon" && !(hours >= 12 && hours < 18)) {
                return false
            }

            if (airline && flight?.flightName?.iata !== airline) {
                return false
            }

            return true
        })

        setData(filteredData)
    }
    const resetFilters = () => {
        setSortOption("")
        setSelectedTimeRange("")
        setSelectedAirline("")
        setData(data)
    }
    return (
        <div className="w-full md:w-3/12 sticky top-0 space-y-8 p-4">
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <Label className="text-black text-base font-semibold">Sort by:</Label>
                    <Label className="flex items-center cursor-pointer" onClick={resetFilters}>Clear All<X size={20} /></Label>
                </div>
                <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full bg-white border-none">
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="Lowest Price">Lowest Price</SelectItem>
                            <SelectItem value="Highest Price">Highest Price</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <Label className="text-black text-base font-semibold">Arrival Time:</Label>
                <RadioGroup onValueChange={handleTimeRangeChange} value={selectedTimeRange}>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="morning" id="r1" />
                            <Label className="text-black text-base font-semibold" htmlFor="r1">06:00 AM - 11:59 AM</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="afternoon" id="r2" />
                            <Label className="text-black text-base font-semibold" htmlFor="r2">12:00 PM - 05:59 PM</Label>
                        </div>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <Label className="text-black text-base font-semibold">Airlines Included</Label>
                <RadioGroup onValueChange={handleAirlineChange} value={selectedAirline}>
                    {airlinesData?.map((item, index) => {
                        return (
                            <div className="flex items-center space-x-2" key={index}>
                                <RadioGroupItem value={item?.iata ?? ""} id={`airline-${index}`} />
                                <Label className="text-black text-base font-semibold" htmlFor={`airline-${index}`}>{item.publicName}</Label>
                            </div>
                        )
                    })}
                </RadioGroup>
            </div>
        </div>
    )
}
