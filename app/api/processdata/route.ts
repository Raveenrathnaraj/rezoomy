import { GoogleGenAI } from "@google/genai";
import resumeDetails from '@/lib/resumedetails.json'

const apiKey = process.env.GEMINI_API_KEY ?? '';
const ai = new GoogleGenAI({ apiKey });
const config = {
    thinkingConfig: {
        thinkingBudget: 0,
    },
    systemInstruction: [
        {
            text: `
            You are a AI Job application assistant.
            You'll get the DOM outerhtml as an input.
            You need to go through it and get all the input fields that needs to be filled by the user 
            and have a JSON created with the data of all the fields including xpath so that you can fill the field later on.
            You will also be given User's data so that you can extract the data needed for filling the forms from it.
            `,
        }
    ],
};

const prompt = `
The Dom content is given inside dom.html file and the user data is given inside data.json file. Extract the data and return me all the fields and it's value in an JSON array in a structured output format.
{
    "id": "demo-message",
    "type": "textarea",
    "name": "message",
    "placeholder": "Enter your message",
    "label": "Message",
    "value": "",
    "xpath": "",
}                      
`
const model = 'gemini-2.5-flash';

export async function POST(request: Request) {
    try {
        const body = await request?.json();

        const fullPrompt = `${prompt}
                    
                
                            dom.html file content: '''${body?.domContent ?? ''}'''


                            data.json file content: '''${JSON.stringify(resumeDetails) ?? ''}'''
                            `

        const contents = [
            {
                text: fullPrompt,
            },
        ];
        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
        let chunks = [];
        for await (const chunk of response) {
            chunks.push(chunk.text);
        }

        const fullResponse = chunks.join('');

        const match = fullResponse.match(/```json\s*([\s\S]*?)\s*```/);
        if (match && match[1]) {
            try {
                const parsedResponse = JSON.parse(match[1]);
                return Response.json({ message: 'Successfull', data: parsedResponse, fullPrompt, success: true });

            } catch (e) {
                console.error('Failed to parse JSON:', e);
            }
        }

        return Response.json({ message: 'Successfull', data: fullResponse, fullPrompt, success: true });
    } catch (err) {
        console.log(err);
        return Response.json({ message: 'Error', success: false, error: err });
    }
}

