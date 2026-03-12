import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

export function login(body) {
    return axios.post(
        `${apiUrl}/auth/login`,
        body
    );
};

export function registerStepOne(body) {
    return axios.post(
        `${apiUrl}/auth/register/step_one`, body
    )
};

export function ResetPasswordSend(body) {
    return axios.post(
        `${apiUrl}/auth/password/email`, body
    )
}

export function resetPassword(body) {
    return axios.post(
        `${apiUrl}/auth/password/reset`, body
    )
}