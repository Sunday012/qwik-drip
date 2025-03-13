import { createServerFn } from "@tanstack/start";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

import { formSchema } from "~/schema";

export type WaitlistResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

export const joinUsFn = createServerFn({ method: "POST" })
  .validator((variables: unknown) => {
    return formSchema.parse(variables);
  })
  .handler(async (ctx) => {
    try {
      const userData = ctx.data;

      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")!,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheetId = process.env.GOOGLE_SHEET_ID!;
      if (!sheetId) {
        throw new Error("VITE_APP_GOOGLE_SHEET_ID is not defined");
      }
      const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        isBusinessOwner: userData.isBusinessOwner ? "Yes" : "No",
        isCreator: userData.isCreator ? "Yes" : "No",
        isConsumer: userData.isConsumer ? "Yes" : "No",
        submittedAt: new Date().toISOString(),
      });

      return {
        success: true,
        message: "Successfully added to waitlist",
      } as WaitlistResponse;
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
      } as WaitlistResponse;
    }
  });
