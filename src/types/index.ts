import { z } from "zod"

//Projects
export const projecSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
})

export type Project = z.infer<typeof projecSchema>

export type ProjectFormData = Pick<Project, "clientName" | "projectName" | "description">