import React from "react"
import { useDestinations } from "../features/useDestination"
import { useAirlines } from "../features/useAirlines"
import { format, addHours, addMinutes, parseISO } from "date-fns"

const getRandomFlightDuration = () => {
    const hours = Math.floor(Math.random() * 10) + 1
    const minutes = Math.floor(Math.random() * 60)
    return { hours, minutes }
}

const getRandomPrice = () => {
    return Math.floor(Math.random() * 500) + 50
}

const manipulateFlight = (flight: any, destinationData: any[], airlineData: any[]) => {
    const getRandomAirline = () => {
        const randomIndex = Math.floor(Math.random() * airlineData.length)
        return airlineData[randomIndex]
    }

    const getRandomDestination = () => {
        const randomIndex = Math.floor(Math.random() * destinationData.length)
        return destinationData[randomIndex]
    }

    const prices = [
        {
            classType: "Economy",
            amount: `${getRandomPrice()} $`,
        },
        {
            classType: "EconomyFirst",
            amount: `${getRandomPrice()} $`,
        },
        {
            classType: "Business",
            amount: `${getRandomPrice()} $`,
        },
        {
            classType: "BusinessFirst",
            amount: `${getRandomPrice()} $`,
        },
        {
            classType: "FirstClass",
            amount: `${getRandomPrice()} $`,
        },
    ]

    const economyPrice = prices.find((price) => price.classType === "Economy")?.amount || "0 $"

    const scheduleDate = format(new Date(), "dd/MM/yyyy")

    const { hours, minutes } = getRandomFlightDuration()
    const flightDuration = `${hours} hours ${minutes} minutes`

    const landingTime = addMinutes(addHours(new Date(), hours), minutes)
    const actualLandingTime = format(landingTime, "yyyy-MM-dd HH:mm:ss")

    const estimatedLandingTimeFormatted = flight.estimatedLandingTime
        ? format(parseISO(flight.estimatedLandingTime), "HH:mm:ss")
        : undefined


    return {
        ...flight,
        departureInfo: getRandomDestination(),
        arrivalInfo: getRandomDestination(),
        scheduleDate: scheduleDate,
        actualLandingTime: actualLandingTime,
        flightName: getRandomAirline(),
        serviceType: Math.random() > 0.5 ? "Nonstop" : "Connecting Flight",
        flightDuration: flightDuration,
        price: prices,
        totalPrice: economyPrice,
        ticketType: Math.random() > 0.5 ? "Round Trip" : "One Way",
        estimatedLandingTime: estimatedLandingTimeFormatted,

    }
}

export const useManipulate = (data: any) => {
    const { useGetAllDestinations } = useDestinations()
    const { data: destinationRawData } = useGetAllDestinations()
    const { useGetAllAirlines } = useAirlines()
    const { data: flightAirlineData } = useGetAllAirlines()

    const destinationData = React.useMemo(() => destinationRawData?.destinations ?? [], [destinationRawData])
    const airlineData = React.useMemo(() => flightAirlineData?.airlines ?? [], [flightAirlineData])

    const flights = Array.isArray(data?.flights) ? data.flights : []

    const manipulatedFlights = React.useMemo(() => {
        return flights.map((flight: any) => manipulateFlight(flight, destinationData, airlineData))
    }, [flights, destinationData, airlineData])

    return {
        ...data,
        flights: manipulatedFlights,
    }
}
