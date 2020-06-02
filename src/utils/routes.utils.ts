import { App } from "../components/App";

const baseUrl = process.env.PUBLIC_URL;

export const Routes = {
    Home: baseUrl,
};

export const routes = [{
    path: Routes.Home,
    component: App,
}];