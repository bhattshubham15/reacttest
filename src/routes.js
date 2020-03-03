import HomeComponent from "./Components/HomePage";
import LoginComponent from "./Components/Login";

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomeComponent
    },
    {
        path: '/login',
        component: LoginComponent
    }
];