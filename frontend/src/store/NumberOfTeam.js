import {
    atom,
} from 'recoil';

export const numberOfTeamsState = atom({
    key: 'numberOfTeamsState',
    default: 8,
});