import React from 'react'
const RemoteHeaderComponent = React.lazy(() => import('HeaderApp/Header'))

export const Header = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading Header...</div>}>
                <RemoteHeaderComponent />
            </React.Suspense>
        </div>
    )
}