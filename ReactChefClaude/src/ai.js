import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
 You don't need to use every ingredient they mention in your recipe.
  The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
  Include a section at the bottom clearly noting the additional ingredients you've included.
  Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromGemini(ingredients) {
    //const model = await ai.models.get({model: 'gemini-2.5-flash'});
    //console.log(model);

    const response = await ai.models.generateContent({

        model: "gemini-2.5-flash",
        config: {
            systemInstruction: SYSTEM_PROMPT,
            maxOutputTokens: 1024,
                thinkingConfig: {
                    thinkingBudget:128
                }

        },
        contents: ingredients.join(", ")
    });

    //console.log(response.text);
    return response;
}
