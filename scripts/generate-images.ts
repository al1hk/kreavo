import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const outputDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const prompts = [
  {
    name: 'hero.jpeg',
    prompt: 'Ultra-realistic luxury wristwatch floating in a dark cinematic environment, black background with deep shadows, gold metallic reflections, soft spotlight from top right, macro photography details, visible brushed metal texture, sapphire glass reflections, shallow depth of field, dramatic lighting, subtle dust particles in air, premium product photography, high contrast, 8K, hyper-detailed, shot like a Rolex advertisement, no text, centered composition, elegant and minimal. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '1:1'
  },
  {
    name: 'collection.jpeg',
    prompt: 'Luxury wristwatches arranged in a premium showroom style, dark matte background, soft studio lighting, gold and silver watches placed on black marble or reflective surface, elegant shadows, minimal composition, high-end product photography, symmetrical layout, cinematic lighting, ultra realistic, 8K, inspired by luxury brand catalogs, no text. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '16:9'
  },
  {
    name: 'featured.jpeg',
    prompt: 'Close-up macro shot of a luxury watch dial, extreme detail showing hands, markers, textures, subtle reflections, gold accents, black dial, dramatic lighting, shallow depth of field, premium watch advertisement style, hyper-realistic, 8K, cinematic shadows, no text. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '3:4'
  },
  {
    name: 'workshop.jpeg',
    prompt: 'Luxury watchmaking workshop, craftsman assembling a high-end watch, detailed tools, warm cinematic lighting, focus on hands and precision work, metal parts and gears visible, elegant atmosphere, storytelling composition, depth of field, premium documentary style, 8K realism. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '16:9'
  },
  {
    name: 'movement.jpeg',
    prompt: 'Extreme close-up of mechanical watch movement, visible gears and springs, gold and silver components, intricate engineering, dramatic lighting with shadows, macro lens, ultra detailed, cinematic look, luxury engineering aesthetic, 8K, no text. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '3:4'
  },
  {
    name: 'lifestyle.jpeg',
    prompt: 'Luxury lifestyle shot of a man wearing an elegant watch, dressed in a black suit, low lighting, cinematic shadows, focus on wrist and watch, blurred city lights in background (bokeh), premium fashion photography, moody, high contrast, 8K, no text. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '3:4'
  },
  {
    name: 'gallery.jpeg',
    prompt: 'Luxury watch placed on black reflective surface, multiple angles composition, dramatic studio lighting, gold reflections, minimal aesthetic, premium catalog photography, clean and elegant, 8K ultra realistic, no text. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '1:1'
  },
  {
    name: 'footer.jpeg',
    prompt: 'Minimal luxury background, black gradient with subtle gold light streaks, soft glow, elegant and simple, cinematic texture, premium brand aesthetic, no objects, no text, 8K. Maintain consistent lighting, color grading, and cinematic luxury style across all images.',
    aspectRatio: '16:9'
  }
];

async function generateImages() {
  for (const item of prompts) {
    console.log(`Generating ${item.name}...`);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: item.prompt,
        config: {
          imageConfig: {
            aspectRatio: item.aspectRatio as any,
          }
        }
      });
      
      let base64Data = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          base64Data = part.inlineData.data;
          break;
        }
      }
      
      if (base64Data) {
        fs.writeFileSync(path.join(outputDir, item.name), Buffer.from(base64Data, 'base64'));
        console.log(`Saved ${item.name}`);
      } else {
        console.error(`No image data returned for ${item.name}`);
      }
    } catch (e) {
      console.error(`Failed to generate ${item.name}:`, e);
    }
  }
}

generateImages();
