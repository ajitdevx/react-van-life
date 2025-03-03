import { data } from "react-router";


export const requireAuth = async () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        //throw redirect("/login");
        throw data("User is not authorized", { status: 404 });
    }
    return null;
};
