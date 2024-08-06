import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client
// but configure it to point to perplexity.ai
const perplexity = new OpenAI({
	apiKey: process.env.PERPLEXITY_API_KEY || '',
	baseURL: 'https://api.perplexity.ai/',
});

export async function POST(req: Request) {
	// Extract the `messages` from the body of the request
	let { messages } = await req.json();

	if (messages.length === 1) {
		messages[0].content =
			'charla conmigo como si fuera mi mejor profesor de ingles y estuvieramos practicando un dialogo, dame consejos de mejoras o correciones que detectes \n  ' +
			messages[0].content;
	}

	// Ask Perplexity for a streaming chat completion using PPLX 70B online model
	// @see https://blog.perplexity.ai/blog/introducing-pplx-online-llms
	const response = await perplexity.chat.completions.create(
		{
			model: 'llama-3-sonar-large-32k-chat',
			stream: true,
			max_tokens: 1000,
			messages,
		}
	);

	// Convert the response into a friendly text-stream.
	const stream = OpenAIStream(response);

	// Respond with the stream
	return new StreamingTextResponse(stream);
}
