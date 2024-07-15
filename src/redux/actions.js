import { nanoid } from "nanoid"

export const ADD_CONTACT = 'contacts/addContact'
export const DELETE_CONTACT = 'contacts/deleteContact'
export const SET_FILTER = 'filter/setFilter'
export const SET_CONTACTS = 'contacts/setContact'

export const addContact = ({name, number}) => {

    return {
        type: ADD_CONTACT,
        payload: {
            id: nanoid(),
            name,
            number
        }
    }
    
}

export const deleteContact = (id) => {

    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export const setFilter = (filter) => {

    return {
        type: SET_FILTER,
        payload: filter
    }
}