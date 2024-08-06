// pages/api/translate.js

import { getAiResponse } from '@/lib/ai-response';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		// Extract the `messages` from the body of the request
		const { textForTranslate } = await req.json();

		// Ask Perplexity for a streaming chat completion using PPLX 70B online model
		// @see https://blog.perplexity.ai/blog/introducing-pplx-online-llms
		const prompt = `como un traductor profesional con mucha experiencia traduce el siguiente texto
			limita tu respuesta solo al resultado de la traduccion
			este es el texto: ${textForTranslate}`;

		const translatedText = await getAiResponse(prompt);

		// Respond with the stream
		return Response.json({ translatedText });
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
