import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { cn } from "../../lib"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { format } from "date-fns"

type Props = {
    className?: string
    onChange?: React.Dispatch<React.SetStateAction<Date | string | null>>
}

export const DatePicker: React.FC<Props> = ({ className, onChange }) => {
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    const handleDateChange = (selectedDate: Date | undefined) => {
        setDate(selectedDate)
        if (selectedDate) {
            const formattedDate = format(selectedDate, "dd/MM/yyyy")
            if (onChange) {
                onChange(formattedDate)
            }
        } else {
            if (onChange) {
                onChange(null)
            }
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild className={`${className}`}>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full max-w-xs justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-xs p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
