const initialState = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    formData: [],
}

const formReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "INCREMENT_ID":
            return { ...state, id: action.payload +1 }
        case "INCREMENT_NAME":
            return { ...state, name: action.payload }
        case "INCREMENT_EMAIL":
            return { ...state, email: action.payload }
        case "INCREMENT_PHONE":
            return { ...state, phone: action.payload }
        case "INCREMENT_FORMDATA":
            return { ...state, formData: [...state.formData, { id: state.id, name: state.name, email: state.email, phone: state.phone }] }

        default:
            return state

    }


}

export default formReducer