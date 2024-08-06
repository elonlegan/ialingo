// pages/api/translate.js

import { getAiResponse } from '@/lib/ai-response';
import { NextApiRequest, NextApiResponse } from 'next';

interface TranslateRequest extends NextApiRequest {
	body: {
		textForTranslate: string;
		targetLanguage: string;
	};
}

interface TranslateResponse extends NextApiResponse {
	status: (statusCode: number) => TranslateResponse;
	json: (data: {
		translatedText?: string;
		message?: string;
		error?: any;
	}) => void;
}

export default async function handler(
	req: TranslateRequest,
	res: TranslateResponse
) {
	if (req.method !== 'POST') {
		return res
			.status(405)
			.json({ message: 'Only POST requests allowed' });
	}

	const { textForTranslate } = req.body;

	try {
		const prompt = `como un traductor profesional con mucha experiencia traduce el siguiente texto
		limita tu respuesta solo al resultado de la traduccion
		este es el texto: ${textForTranslate}`;

		const translatedText = await getAiResponse(prompt);
		res.status(200).json({ translatedText });
	} catch (error) {
		res
			.status(500)
			.json({ message: 'Error translating text', error });
	}
}
