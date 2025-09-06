import { GoogleGenAI } from "@google/genai";
import resumeDetails from '@/lib/resumedetails.json'
import { geminiPrompt, geminiSystemInstruction, gptOssPrompt } from "@/lib/prompts";

const apiKey = process.env.GEMINI_API_KEY ?? '';
const ai = new GoogleGenAI({ apiKey });

const config = {
    thinkingConfig: {
        thinkingBudget: 0,
    },
    systemInstruction: [
        {
            text: geminiSystemInstruction,
        }
    ],
};

const model = 'gemini-2.5-flash-lite';

export async function POST(request: Request) {
    try {
        const body = await request?.json();

        const fullPrompt = `${body?.isLocal ? gptOssPrompt : geminiPrompt}
                    
                dom.html file content: '''${body?.domContent ?? ''}'''

                data.json file content: '''${JSON.stringify(resumeDetails) ?? ''}'''
            `

        if (body?.isLocal) {
            const resp = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: fullPrompt,
                    model: "gpt-oss:20b",
                    stream: false,
                }),
            });
            const data = await resp.json();
            const match = data.response.match(/```json\s*([\s\S]*?)\s*```/);
            if (match && match[1]) {
                try {
                    const parsedResponse = JSON.parse(match[1]);
                    return Response.json({ message: 'Successfull', data: parsedResponse, fullPrompt, success: true });

                } catch (e) {
                    console.error('Failed to parse JSON:', e);
                }
            }
            return Response.json({ message: 'Fail', data: data, fullPrompt, success: true });

        }
        const contents = [{ text: fullPrompt }];

        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });

        const match = response?.text?.match(/```json\s*([\s\S]*?)\s*```/);
        if (match && match[1]) {
            try {
                const parsedResponse = JSON.parse(match[1]);
                return Response.json({ message: 'Successfull', data: parsedResponse, success: true });

            } catch (e) {
                console.error('Failed to parse JSON:', e);
            }
        }

        return Response.json({ message: 'Successfull', data: response, success: true });
    } catch (err) {
        console.log(err);
        return Response.json({ message: 'Error', success: false, error: err });
    }
}

