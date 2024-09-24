import React, { useEffect } from "react"
import { Label } from "../../../components/ui/label"
import { Button } from "../../../components/ui/button"
import { PriceInfo } from "../../../lib/types"

type Props = {
    data?: PriceInfo[]
    flightId: string
    handleSelectPrice: (flightId: string, price: string) => void
    selectedPrices: { [key: string]: string }
}

export const Cost: React.FC<Props> = ({ data, flightId, handleSelectPrice, selectedPrices }) => {

    useEffect(() => {
        if (!selectedPrices[flightId]) {
            const economyPrice = data?.find((item) => item.classType === "Economy")?.amount
            if (economyPrice) {
                handleSelectPrice(flightId, economyPrice)
            }
        }
    }, [data, flightId, selectedPrices, handleSelectPrice])

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {data?.map((item) => (
                <Button
                    key={item.classType}
                    variant={selectedPrices[flightId] === item.amount ? "ghost" : "secondary"}
                    className="w-28 h-full flex flex-col items-center justify-between p-4 border rounded cursor-pointer border-gray-400 transition-all duration-200 hover:bg-gray-100"
                    onClick={() => handleSelectPrice(flightId, item.amount ? item.amount : "")}
                >
                    <Label className="text-gray-500 text-lg cursor-pointer">{item.amount}</Label>
                    <Label className="text-gray-700 text-lg font-semibold cursor-pointer">{item.classType}</Label>
                </Button>
            ))}
        </div>
    )
}
