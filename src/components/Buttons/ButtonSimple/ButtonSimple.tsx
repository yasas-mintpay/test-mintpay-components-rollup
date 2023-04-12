import * as React from 'react';

interface IButtonSimpleProps {
    label: string
}

const ButtonSimple: React.FC<IButtonSimpleProps> = ({label}) => {
    return (
        <button>
            {label.toUpperCase()}
        </button>
    );
};

export default ButtonSimple;