import React from "react"
import { Check, ChevronDown, PlaneTakeoff, PlaneLanding } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { Button } from "../../components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../../components/ui/command"
import { cn } from "../../lib"
import { useDestinations } from "../../features/useDestination"

type Props = {
    landing?: boolean
    className?: string
    selectedValue?: string
    onChange?: (value: string) => void
}

export const FilterInput: React.FC<Props> = ({ landing, className, selectedValue, onChange }) => {
    const { useGetAllDestinations } = useDestinations()
    const { data: destinationRawData } = useGetAllDestinations()
    const destinationData = React.useMemo(() => destinationRawData?.destinations ?? [], [destinationRawData])

    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className={className}>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full  justify-between"
                >
                    {!landing ? <PlaneTakeoff className="mr-2 h-5 w-5 shrink-0" /> :
                        <PlaneLanding className="mr-2 h-5 w-5 shrink-0" />}
                    {selectedValue
                        ? destinationData?.find((destination) => destination.country === selectedValue)?.publicName?.english
                        : "Select country..."}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search country..." className="p-2" />
                    <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                            {destinationData?.map((destination, index) => (
                                <CommandItem
                                    key={index}
                                    value={destination.country}
                                    onSelect={(currentValue) => {
                                        if (onChange) {
                                            onChange(currentValue === selectedValue ? "" : currentValue)
                                        }
                                        setOpen(false)
                                    }}

                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedValue === destination.country ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {destination.publicName?.english} - {destination.country}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
