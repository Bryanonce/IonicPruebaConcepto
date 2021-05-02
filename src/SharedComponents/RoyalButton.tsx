import React from 'react'

interface RoyalButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const RoyalButton: React.FC<RoyalButtonProps> = ({onClick}:RoyalButtonProps) => {
    return (
        <button 
            className="btn"
            onClick={onClick}
        >SIGN IN</button>
    )
}
