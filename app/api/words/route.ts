import { getAiResponse } from '@/lib/ai-response';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		// Extract the `messages` from the body of the request
		const { message } = await req.json();

		const prompt = `Crea una lista de palabras y frases en ingles que me pueden ser de ayuda para responder el siguiente mensaje:  ${message.content}
		limita tu respuesta a solo las palabras utiles separadas por ',' sin ningun introduccion encierra la lista en []`;

		const rawUsefulWord = await getAiResponse(prompt);
		const conversationWords =
			getConversationWordsArray(rawUsefulWord);

		// Respond with the stream
		return Response.json({ conversationWords });
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}

function getConversationWordsArray(rawArray: string) {
	const strWithoutBrackets = rawArray.slice(1, -1);

	// Paso 2: Dividir el string en partes usando la coma como separador
	const array = strWithoutBrackets.split(', ');

	// Paso 3: Eliminar espacios adicionales (si es necesario)
	return array.map((item) => item.trim());
}
