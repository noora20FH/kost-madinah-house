"use server";

interface User {
    id: number;
    email: string;
}
export const get = async ():Promise<User[]> => {
    const data = await fetch (`${process.env.APP_URL}/users`);
    const json = await data.json();
    return json.data;
};
export const post = async () => {};
export const put = async () => {};

