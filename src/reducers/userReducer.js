export const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...action.user};

        case "LOGOUT":
            return null;

        default:
            return null;
    }
};

export const login = (item) => ({
    type: "LOGIN",
    item
});

export const logout = (item) => ({
    type: "LOGOUT",
    item
});