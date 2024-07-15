import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./actions";

const localContacts = localStorage.getItem('contacts')

const initialState = localContacts !== null ? JSON.parse(localContacts) : [
    { id: '1', name: 'Neil Bryan Apostol', number: '09218017781' },
    { id: '2', name: 'Benjamina Apostol', number: '09218234241' },
    { id: '3', name: 'Bryce Apostol', number: '0921822331' },
];

const initialFilterState = ''

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];

        case DELETE_CONTACT:
            return state.filter(({ id }) => id !== action.payload); 
        default:
            return state;
    }
};

export const filterReducer = (state = initialFilterState, action) => {

    switch (action.type) {

        case SET_FILTER:
            return action.payload;
        default:
            return state;

    }

}
