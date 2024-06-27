import {
    atom,
} from 'recoil';

export const UserDetails = atom({
    key: 'UserDetails',
    default: {
        email: null,
        isAdmin: false
    }
});