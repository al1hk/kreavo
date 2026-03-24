import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'Luxury wristwatch placed on a black marble surface, elegant composition, dark background with subtle gold light reflections, soft studio lighting, realistic shadows, premium product photography, minimal style, cinematic lighting, shallow depth of field, background slightly blurred with marble texture visible, high contrast, ultra realistic, 4K or 8K, no text. Keep composition simple, realistic, and avoid complex or abstract elements.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        fs.writeFileSync('public/hero-watch.jpg', buffer);
        console.log("Image saved to public/hero-watch.jpg");
        break;
      }
    }
  } catch (e) {
    console.error("Error generating image:", e);
  }
}

main();
