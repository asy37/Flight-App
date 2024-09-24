import React from "react"

export const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-full w-full px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6">
            {children}
        </div>
    )
}