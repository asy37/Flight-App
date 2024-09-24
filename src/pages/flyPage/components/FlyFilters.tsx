import React from "react"
import { Button } from "../../../components/ui/button"
import { Rating } from "./Rating"

export const FlyFilters: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-t-lg h-auto grid grid-cols-2">
            <div className="flex flex-wrap items-center justify-center p-4 gap-2">
                <Button variant={"secondary"} className="flex-1 min-w-[120px]">Airport</Button>
                <Button variant={"secondary"} className="flex-1 min-w-[120px]">Airplane</Button>
                <Button variant={"secondary"} className="flex-1 min-w-[120px]">Time</Button>
                <Button variant={"secondary"} className="flex-1 min-w-[120px]">Stops</Button>
                <Button variant={"secondary"} className="flex-1 min-w-[120px]">Amenities</Button>
            </div>
            <div className="lg:flex items-center justify-around w-full p-4">
                <Rating />
            </div>
        </div>
    )
}
