import React from "react"
import { FlyDetails } from "./components/FlyDetails"
import { FlyFilter } from "./components/FlyFilter"
import { ChooseVacation } from "./components/ChooseVacation"
import { useManipulate } from "../../hooks/useManipulate"
import { Flight } from "../../lib/types"
import { useFlights } from "../../features/useFligths"

const Home: React.FC = () => {
    const [filterdata, setFilterdata] = React.useState<Flight[]>([])
    const [data, setData] = React.useState<Flight[]>([])
    const { useGetAllFlights } = useFlights()
    const { data: flights } = useGetAllFlights()

    const flight = useManipulate(flights)

    React.useEffect(() => {
        if (flight.flights) {
            setData(flight.flights)
            setFilterdata(flight.flights)
        }
    }, [flight.flights])

    return (
        <div className="rounded-lg m-4 md:m-10 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-9/12 m-4">
                <div className="flex flex-col gap-10">
                    <FlyFilter data={data} setData={setFilterdata} />
                    <FlyDetails filterData={filterdata} data={data} setData={setFilterdata} />
                </div>
            </div>

            <div className="h-full w-full md:w-3/12 m-4 md:sticky md:top-0">
                <ChooseVacation />
            </div>
        </div>
    )
}

export default Home