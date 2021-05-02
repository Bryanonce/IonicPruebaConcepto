import React from 'react'
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface InputIconProps {
    MatIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    placeholder: string,
    name: string,
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    type?: string,
}

export const InputIcon: React.FC<InputIconProps> = ({MatIcon, placeholder, name, value="", onChange, type="text"}:InputIconProps) => {
    return (
        <div className="input-container">
            <input
                className={`input ${(value !== '')? 'input-no-empty': ''}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                type={type}
            />
            <MatIcon className={`icon ${(value !== '')? 'input-no-empty': ''}`} />
        </div>
    )
}
