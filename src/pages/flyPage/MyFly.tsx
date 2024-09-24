import { FlyFilters } from "./components/FlyFilters"
import { Flys } from "./components/Flys"
import { SortCost } from "./components/SortCost"

const MyFly: React.FC = () => {
    return (
        <div className="h-full flex flex-col overflow-auto scrollbar-hide">
            <FlyFilters />
            <div className="flex-grow p-4 md:p-10 lg:p-20">
                <SortCost />
                <Flys />
            </div>
        </div>
    )
}

export default MyFly
