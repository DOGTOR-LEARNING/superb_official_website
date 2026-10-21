import { z } from "zod";

export const inquiryTypes = ["education", "product", "media", "other"] as const;
export type InquiryType = (typeof inquiryTypes)[number];

export const MESSAGE_MAX = 3000;

/**
 * 前後端共用的表單驗證。錯誤訊息為翻譯 key（Contact.form.errors.*），
 * 由介面依語言轉換成可理解的文字。
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "nameRequired").max(80, "nameTooLong"),
  email: z.string().trim().min(1, "emailRequired").pipe(z.email("emailInvalid")),
  organization: z.string().trim().max(120, "organizationTooLong").optional().default(""),
  inquiryType: z.enum(inquiryTypes, { error: "typeRequired" }),
  message: z
    .string()
    .trim()
    .min(1, "messageRequired")
    .min(10, "messageTooShort")
    .max(MESSAGE_MAX, "messageTooLong"),
  consent: z.literal(true, { error: "consentRequired" }),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactField = keyof ContactInput;
export type FieldErrors = Partial<Record<ContactField, string>>;

export function toFieldErrors(error: z.ZodError): FieldErrors {
  const result: FieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as ContactField | undefined;
    if (field && !result[field]) result[field] = issue.message;
  }
  return result;
}
