import React from "react"
import { Flight } from "../../../lib/types"
import { FlyDetailCard } from "../../../components/flyDetails/FlyDetailCard"
import { FlyDetailSort } from "../../../components/flyDetails/FlyDetailSort"

type Props = {
    filterData: Flight[]
    data: Flight[]
    setData: (data: Flight[]) => void
}

export const FlyDetails: React.FC<Props> = ({ filterData, data, setData }) => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 py-28">
            <FlyDetailCard data={filterData} className="w-full lg:w-9/12" />
            <FlyDetailSort data={data} setData={setData} />
        </div>
    )
}
