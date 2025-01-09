import { isAxiosError } from "axios";
import { NoteFormData, Project, Task } from "../types";
import api from "@/lib/axios";

type NoteAPIType = {
    formData: NoteFormData,
    projectId: Project["_id"]
    taskId: Task["_id"]
}

export async function createNote({projectId, taskId, formData}: Pick<NoteAPIType, "projectId" | "taskId" | "formData">){
    try {
        const url = `/projects/${projectId}/tasks/${taskId}/notes`
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message){
            throw new Error(error.response?.data.error)
        }
    }
}