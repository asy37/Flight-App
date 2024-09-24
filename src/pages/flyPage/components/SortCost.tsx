import React from "react"
import { Label } from "../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { CircleAlert } from "lucide-react"
import useUpdate from "../../../hooks/useUpdate"

export const SortCost: React.FC = () => {
    const bookedFlights = useUpdate()

    const totalFare = bookedFlights.reduce((total, flight) => {
        const price = parseFloat(flight.totalPrice.replace('$', '').trim())
        return total + (isNaN(price) ? 0 : price)
    }, 0)

    return (
        <div className="w-full h-16 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center gap-2">
                <Label>Sort By:</Label>
                <Select>
                    <SelectTrigger className="w-full sm:w-[180px] bg-white">
                        <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Most Seller Flys</SelectItem>
                        <SelectItem value="dark">Populer Flys</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-end gap-2">
                <CircleAlert color="#1e3a8a" />
                <Label className="text-blue-900 text-lg">Avg Fare: {totalFare.toFixed(2)}$</Label>
            </div>
        </div>
    )
}
