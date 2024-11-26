"use server";
import { ID } from "node-appwrite";
import { createSessionClient, createAdminClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";


export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);
    
    return parseStringify(response);  // Assuming this parses and returns the response
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw new Error("Sign-in failed"); // Re-throw the error so it can be caught in onSubmit
  }
};

export const signUp = async(userData: SignUpParams) =>{
    const {email, password, firstName, lastName} = userData;
    try{
        const { account } = await createAdminClient();

    const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  
  return parseStringify(newUserAccount);
        
    } catch(error){
        console.error("Error", error);
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user =  await account.get();
      return parseStringify(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return null;
    }
  }

export const loggedOut = async () => {

  try{
    const {account} = await createSessionClient();

    cookies().delete('appwrite-session');
    await account.deleteSession('current');

  }catch{
    return null;  }
}
  