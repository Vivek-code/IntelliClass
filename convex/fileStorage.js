import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
export const AddFileEntryTODb = mutation({
    args:{
        fileId:v.string(),
        storageId:v.string(),
        fileName:v.string(),
        fileUrl:v.string(),
        uploadedBy:v.string()
    },
    handler: async(ctx,args)=>{
        // if user already exist
        const result = await ctx.db.insert('pdfFiles',{
            fileId:args.fileId,
            storageId:args.storageId,
            fileName:args.fileName,
            fileUrl:args.fileUrl,
            uploadedBy:args.uploadedBy
        })

        return 'Inserted...'
    }
})
export const getFileUrl = mutation(
    {
        args:
        {
            storageId:v.string()
        },
        handler:async(ctx,args)=>
        {
            const url = await ctx.storage.getUrl(args.storageId);
            return url;
        }
    }
)
export const GetfileRecord = mutation( async(ctx,args)=>{
    const result = await ctx.db.select('pdfFiles').where('fileId',args.fileId);
    return result;
})