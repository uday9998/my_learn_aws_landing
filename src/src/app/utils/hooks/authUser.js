import { toast } from "react-toastify";

export const authUser = async (action, data) => {
    try {
        const { data: responseData } = await action(data);
        return responseData;
    } catch(err) {
        const { response: { data: { error } } } = err;
        toast.error(error);

    }
}

export const registerUser = async (action, data) => {
    try {
        const { data: responseData } = await action(data);
        return responseData;
    } catch(err) {
        const { response: { data: { message } } } = err;
        toast.error(message);
    }
}

export const resetPasswordUser = async (action, data) => {
    try {
        const { data: responseData } = await action(data);
        toast.success(responseData.success);
        return responseData;
    } catch(err) {
        const { response: { data: { email } } } = err;
        toast.error(email);
    }
}

export const resetPasswordUserEmail = async (action, data) => {
    try {
        const { data: responseData } = await action(data);
        toast.success(responseData.success);
        return responseData;
    } catch(err) {
        const { response: { data: { email } } } = err;
        toast.error(email);
    }
}