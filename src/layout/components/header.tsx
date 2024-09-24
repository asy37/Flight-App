import React from "react"
import { logo } from "../../assets"
import { Plane } from 'lucide-react'
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between p-4 md:p-8 lg:p-10 h-16 bg-gray-200">
            <div className="w-20 md:w-28 h-16 md:h-20 flex items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-full h-full object-contain" />
                </Link>
            </div>

            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
                <Link to="/myfly">
                    <Plane className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center gap-2">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full" />
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white p-4 rounded-lg">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
