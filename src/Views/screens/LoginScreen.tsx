import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../../SharedComponents/Header'
import { InputIcon } from '../../SharedComponents/InputIcon'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useForm } from '../../UtilHooks/useForm';
import { RoyalButton } from '../../SharedComponents/RoyalButton';
import { useLogin } from '../../AplicacionesModulos/Auth/hooks/useLogin';

export const LoginScreen: React.FC = () => {

    const {
        email, 
        password, 
        handleInputChange,
        handleSubmit
    } = useLogin()

    return (
        <IonPage>
            <IonContent>
                <Header />
                <main className="container">
                    <InputIcon 
                        MatIcon={MailOutlineIcon} 
                        placeholder="Ingrese Email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        type="email"
                    />
                    <InputIcon 
                        MatIcon={LockOpenIcon} 
                        placeholder="Ingrese Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        type="password"
                    />
                    <RoyalButton 
                        onClick={handleSubmit}
                    />
                    <p className="sign-up-banner">Don't have an account? <span>SIGN UP</span></p>
                </main>
            </IonContent>
        </IonPage>
    )
}
