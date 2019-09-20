
export const initialState = [
    {
        item: 'Learn about reducers',
        complete: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {
                item: action.payload,
                complete: false,
                id: Date.now()
            }];
        
        default:
            return state;
    }

    
}