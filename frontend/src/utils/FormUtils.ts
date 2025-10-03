import {type KeyboardEvent} from 'react';

export const disableEnter = (e: KeyboardEvent) => {
    const target = e.target;
    if (e.key === 'Enter' && target instanceof HTMLInputElement) {
        e.preventDefault();
    }
};
