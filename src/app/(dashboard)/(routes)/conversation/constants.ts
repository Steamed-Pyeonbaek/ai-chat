import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "프롬프트는 필수 입력 항목입니다."
    })
})