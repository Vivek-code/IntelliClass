import { inngest } from "./client";
import { db } from "@/config/db";
import { CHAPTER_NOTES, STUDY_MATERIAL, USER_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";
import { generateNotesAIModel } from "@/config/AiModels";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "hello-world" };
  }
);
export const hello = inngest.createFunction(
  { id: "hello" },
  { event: "test/hello" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "hello" };
  }
);
export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    console.log("////////////////////");
    const user = event.data;
    // Get event data
    const result = await step.run(
      "Check user and create new if not in DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(
            eq(USER_TABLE?.email, user?.primaryEmailAddress?.emailAddress)
          );
        // If not then create a new
        if (result?.length == 0) {
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
          console.log("User data received:", event.data.user);
          return userResp;
        }
        return result;
      }
    );
    return "Success";
  }
  // Step is to send welcome email

  // send emai notification to user after 3 days
);

export const GenerateNotes = inngest.createFunction(
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    const { course } = event.data;

    // Generate notes for each chapter with AI
    const notesResult = await step.run("Generate Chapter Notes", async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;
      Chapters.forEach(async (chapter) => {
        const PROMPT = `Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML , Head, Body, title tag), The chapters : ${JSON.stringify(
          chapter
        )}}`;
        const result = await generateNotesAIModel.sendMessage(PROMPT);
        const aiResp = result?.response.text();

        await db.insert(CHAPTER_NOTES).values({
          chapterId: index,
          courseId: course?.courseId,
          notes: aiResp,
        });
        index = index + 1;
      });
      return "Completed";
    });
    //  Update the status to "Ready"
    const updateCourseStatusResult = await step.run(
      "Update Course Status to Ready",
      async () => {
        const result = await db
          .update(STUDY_MATERIAL)
          .set({
            status: "Ready",
          })
          .where(eq(STUDY_MATERIAL?.courseId, course?.courseId));
        return "Ready";
      }
    );
  }
);
