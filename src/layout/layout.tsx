import React from "react"
import { Header } from "./components/header"
import { Content } from "./components/content"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-gray-200">
            <Header />
            <div className="px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6">
                <Content>{children}</Content>
            </div>
        </div>
    )
}