import OpenAI from "openai";

export default async function generate(prompt:string) {
    const openAiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (!openAiKey) {
        console.error("No OpenAI API key found in environment variables.");
        return "No OpenAI API key found.";
    }

    const openai = new OpenAI({
        apiKey: openAiKey,
        dangerouslyAllowBrowser: true
    });

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error in getting response from OpenAI:", error);
        return "Error in processing the request.";
    }
}


