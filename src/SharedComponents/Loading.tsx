import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface LoadingProps {
    classname?: string
}

export const Loading: React.FC<LoadingProps> = ({classname = ''}:LoadingProps) => {

    return (
        <CircularProgress size={150} className={`color-primary loading-container ${classname}`} />
    );
}
