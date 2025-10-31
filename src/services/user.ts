import { message } from "antd";
import supabaseConfig from "../config/supabase-config";


export const registerUser = async (values: any) => {
    try {

        const userExistsResponse = await supabaseConfig.from("user_data")
        .select("*").eq("email", values.email);
        if(userExistsResponse.data && userExistsResponse.data.length > 0) {
            throw new Error ("User with this email already exists");
        }


        const signupResponse = await supabaseConfig.auth.signUp({
            email: values.email,
            password: values.password,

        })
        if (signupResponse.error) {
            throw new Error(signupResponse.error.message)
        }

        const userId = signupResponse.data.user?.id;
        const userTableData = {
            id: userId,
            name: values.name,
        }

        const userDataResponse = await supabaseConfig.from("user_data").insert([userTableData]);

        if (userDataResponse.error) {
            throw new Error(userDataResponse.error.message)
        }
        
        return {
            success: true,
            message: "User registered successfully"
        };


    } catch (error: any) {
        throw new Error(error.message || "Something went wrong")

    }
}


export const loginUser = async (values: any) => {
    try {

        const loginResponse = await supabaseConfig.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (loginResponse.error) {
            throw new Error(loginResponse.error.message)
        }
        return {
            success: true,
            message: "User logged in successfully"
        };


    } catch (error: any) {
        throw new Error(error.message || "Something went wrong")

    }
}

export const getLoggedInUser = async () => {
    try {

        const userResponse = await supabaseConfig.auth.getUser();

        if (userResponse.error) {
            throw new Error(userResponse.error.message)
        }
        const userId = userResponse.data.user?.id;
        const userDataResponse = await supabaseConfig.from("user_data")
        .select("*").eq("id", userId);
        if (userDataResponse.error || userDataResponse.data?.length === 0) {
            throw new Error(userDataResponse?.error?.message)
        }
        const result = {
            ...userResponse.data.user,
            ...userDataResponse.data[0]
        }
        return {
            success: true,
            message: "User data fetched successfully",
            data: result
        }
        
    } catch (error:any) {
        throw new Error(error.message || "Something went wrong")
        
    }
}