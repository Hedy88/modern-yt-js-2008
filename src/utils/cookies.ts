import { cookie_domain } from "../config.js";
import cookies from "js-cookie";

// wrapper functions 
// todo: maybe replace later
const createCookie = (name: string, value: string, days: number = 0) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
    cookies.set(`${name}`, `${value}`, {
        expires: date,
        domain: cookie_domain
    });
};

const eraseCookie = (name: string) => {
    cookies.remove(`${name}`);
};

export { createCookie, eraseCookie };