import React from 'react';
const RemoteFooterComponent = React.lazy(() => import('FooterApp/Footer'));

export const Footer = () => {
    return (
        <div>
            <React.Suspense fallback={<p>Loading Footer...</p>}>
                <RemoteFooterComponent />
            </React.Suspense>
        </div>
    );
}