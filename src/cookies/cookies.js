import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const setCookie = (name, value, option) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3540); // 쿠키 시간 59분으로 설정..

    const cookieOptions = {
        ...option,
        expires: time,
    };

    return cookies.set(name, value, cookieOptions);
};


export const getCookie = (name) => {
    return cookies.get(name);
};
export const removeCookie = (name) => {

    return cookies.remove(name);
}