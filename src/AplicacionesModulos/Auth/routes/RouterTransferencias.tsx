import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { LoginScreen } from '../../../Views/screens/LoginScreen'
import { RegisterScreen } from '../../../Views/screens/RegisterScreen';

export const RouterTransferencias: React.FC = () => {
    return (
        <IonRouterOutlet>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Redirect to="/login" />
        </IonRouterOutlet>
    )
}
