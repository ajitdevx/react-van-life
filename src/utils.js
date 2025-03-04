import { redirect } from "react-router";


export const requireAuth = async () => {
    const isLoggedIn = getUser();
    if (!isLoggedIn) {
        const response = redirect("/login?message=You must log in first.");
        response.body = true;
        throw response;
    }
    return null;
};

function getUser() {
    return JSON.parse(localStorage.getItem("loggedin"))
}
