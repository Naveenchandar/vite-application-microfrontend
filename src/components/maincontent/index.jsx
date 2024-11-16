import React from 'react';
const RemoteMainContentComponent = React.lazy(() => import('MainContentApp/MainContent'));

export const MainContent = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <RemoteMainContentComponent />
        </React.Suspense>
    );
}