import React from "react";

interface InputTextProps {
    style?: string;
    autocomplete?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
    id?: string;
    value?: string;
    type?: string;
}

export const InputText: React.FC<InputTextProps> = ({
    style, type= "text", autocomplete= "false", ...outrasProps
} : InputTextProps) => {
    return (
        <input type={type} 
               autoComplete={autocomplete}
               {...outrasProps}
               className={`${style} border px-3 py-2 rounded-lg text-gray-900`} />
    )
}