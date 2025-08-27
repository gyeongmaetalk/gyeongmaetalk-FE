import { z } from "zod";

export const applyConsultFormSchema = z.object({
  purpose: z.string().nullable(),
  region: z.string().nullable(),
  service: z.string().nullable(),
  category: z.string().nullable(),
  name: z.string().nullable(),
});

export type ApplyConsultForm = z.infer<typeof applyConsultFormSchema>;
