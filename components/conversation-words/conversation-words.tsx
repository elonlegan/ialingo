'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import ClickToCopy from '../clickToCopy/clickToCopy';

// components/ConversationWords.tsx

const colors: string[] = [
	'bg-red-500',
	'bg-blue-500',
	'bg-green-500',
	'bg-yellow-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-indigo-500',
	'bg-teal-500',
];

const conversationWords = [
	'Hello',
	'How are you?',
	'Good morning',
	'Good afternoon',
	'Good evening',
	'Nice to meet you',
	'How can I help you?',
	'What do you think about...?',
	"Let's discuss",
	'Could you explain that?',
	'I agree',
	'I disagree',
	'In my opinion',
	'For example',
	'That sounds great',
	'Thank you',
	"You're welcome",
	'Excuse me',
	"I'm sorry",
	'No problem',
	'Yes, of course',
	'Can you repeat that, please?',
	'I understand',
	"I don't understand",
	'Can you help me with this?',
	'What do you mean?',
	'Could you clarify?',
	"Let's schedule a meeting",
	"I'll check on that",
	"Let's move forward",
	'Please review this',
	'Any updates on this?',
	'Looking forward to your response',
	'Best regards',
	'Kind regards',
];

export default function ConversationWords() {
	return (
		<Card className='col-start-1 row-start-6 col-span-1 row-span-7 flex flex-col'>
			<CardHeader>
				<CardTitle>Palabras y frases útiles</CardTitle>
			</CardHeader>
			<CardContent className='overflow-y-auto h-full'>
				{conversationWords.map((word, index) => (
					<ClickToCopy key={index + word} value={word}>
						<Badge
							className={colors[index % colors.length]}
						>
							{word}
						</Badge>
					</ClickToCopy>
				))}
			</CardContent>
		</Card>
	);
}
