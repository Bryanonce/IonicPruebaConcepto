import React from 'react'
import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom';
import { RouterTransferencias } from './Auth/routes/RouterTransferencias';

export const RouterModule: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/" component={RouterTransferencias} />
            </IonRouterOutlet>
        </IonReactRouter>
    )
}
