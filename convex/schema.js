import { defineTable } from "convex/server";
import { defineSchema } from "convex/server";
import { v } from "convex/values";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
export default defineSchema({
    users:defineTable({
        userName:v.string(),
        email:v.string(),
        imageURL:v.string()
    }),
    pdfFiles:defineTable({
        fileId:v.string(),
        storageId:v.string(),
        fileName:v.string(),
        fileUrl:v.string(),
        uploadedBy:v.string()
    }),
    documents: defineTable({
        embedding: v.array(v.number()),
        text: v.string(),
        metadata: v.any(),
      }).vectorIndex("byEmbedding", {
        vectorField: "embedding",
        dimensions: 1536,
      }),
})