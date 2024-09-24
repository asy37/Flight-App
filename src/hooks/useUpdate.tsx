import { useEffect, useState } from "react"

const useBookedFlights = () => {
    const [bookedFlights, setBookedFlights] = useState<Array<{ totalPrice: string }>>([])

    const fetchBookedFlights = () => {
        const data = localStorage.getItem("bookedFlights")
        if (data) {
            setBookedFlights(JSON.parse(data))
        }
    }

    useEffect(() => {
        fetchBookedFlights()

        const intervalId = setInterval(fetchBookedFlights, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return bookedFlights
}

export default useBookedFlights
