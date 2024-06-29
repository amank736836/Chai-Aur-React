import conf from "../conf/conf";
import { Client , Account , ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId) // Your project ID
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.createSession(ID.unique() , email, password,name);
            if(userAccount){
                // call another method to login
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        }catch(error){
            // console.log("Auth service :: createAccount :: error :: ", error);
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            // console.log("Auth service :: login :: error :: ", error);
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Auth service :: getCurrentUser :: error :: ", error);
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log("Auth service :: logout :: error :: ", error);
        }

        return null;
    }
}

const authService = new AuthService();

export default authService;