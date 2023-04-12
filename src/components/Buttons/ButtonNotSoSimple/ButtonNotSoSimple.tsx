import * as React from 'react';

interface IButtonNotSoSimpleProps {
    thingInside: string;
    clickHandler?: () => void;
}

const ButtonNotSoSimple: React.FC<IButtonNotSoSimpleProps> = ({thingInside, clickHandler}) => {
    return (
        <button onClick={
            clickHandler ? clickHandler : () => console.log('No click handler provided')
        }>
            {thingInside.toLowerCase()}
        </button>
    );
};

export default ButtonNotSoSimple;