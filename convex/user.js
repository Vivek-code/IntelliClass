import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser=mutation(
    {
        args:{
            email:v.string(),
            userName:v.string(),
            imageURL:v.string()
        },
        handler: async(ctx,args)=>{
            // if user already exist
            const user = await ctx.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect();

            if(user?.length ==0){
                await ctx.db.insert('usres',{
                    email:args.email,
                    imageURL:args.imageURL,
                    userName:args.userName
                });
                return 'Inserted new User..'
            }
            return 'user already exists'
        }
    }
)