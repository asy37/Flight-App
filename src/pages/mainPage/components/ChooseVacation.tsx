import { Card, CardContent } from "../../../components/ui/card"
import { vacationImages } from "./imageData"

export const ChooseVacation: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 overflow-hidden">
            {vacationImages.map(image => (
                <Card key={image.id} className="flex-1 max-w-xs md:max-w-96 lg:max-w-96 cursor-pointer">
                    <CardContent className="p-0 shadow-none rounded-lg">
                        <img src={image.src} alt={image.alt} className="rounded-xl w-96 h-auto" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
