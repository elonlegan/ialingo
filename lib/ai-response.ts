import OpenAI from 'openai';
import { createOpenAI } from '@ai-sdk/openai';
import {
	OpenAIStream,
	StreamingTextResponse,
	generateText,
} from 'ai'; // Vercel AI SDK ***

if (!process.env.PERPLEXITY_API_KEY) {
	throw new Error(
		'PERPLEXITY_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai'
	);
}

const perplexity = createOpenAI({
	apiKey: process.env.PERPLEXITY_API_KEY || '',
	baseURL: 'https://api.perplexity.ai',
});

function buildPrompt(
	prompt: string
): [{ role: 'user'; content: string }] {
	return [
		{
			role: 'user',
			content: prompt,
		},
	];
}

export async function getAiResponse(prompt: string) {
	try {
		const { text } = await generateText({
			model: perplexity('llama-3-sonar-large-32k-chat'),
			prompt,
		});
		return text;
	} catch (error: unknown) {
		console.log(error);
		throw new Error();
	}
}
