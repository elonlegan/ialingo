'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import ClickToCopy from '@/components/clickToCopy/clickToCopy';
import { Message, useChat } from 'ai/react';

export default function Chat({
	onMessage,
}: {
	onMessage: (message: Message) => void;
}) {
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
	} = useChat({
		onFinish: onMessage,
	});

	const enterListener = (e: any) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	return (
		<Card className='col-span-2 row-span-12 col-start-2 flex flex-col'>
			<CardHeader>
				<CardTitle>Chat</CardTitle>
				<CardDescription>
					Aprende inglés hablando en cualquier escenario{' '}
				</CardDescription>
			</CardHeader>
			<CardContent className='h-full flex flex-col'>
				<div className='h-full overflow-y-scroll border p-2 rounded-lg mb-5'>
					{messages.map((message) => (
						<div
							key={message.id}
							className='mb-2'
							style={{
								textAlign:
									message.role === 'user'
										? 'right'
										: 'left',
							}}
						>
							<ClickToCopy value={message.content}>
								<div
									className={`inline-block p-2 rounded-lg  ${
										message.role === 'user'
											? 'bg-blue-300 dark:bg-blue-700'
											: 'bg-gray-200 dark:bg-gray-600'
									}`}
								>
									{message.content}
								</div>
							</ClickToCopy>
						</div>
					))}
				</div>
				<Textarea
					value={input}
					onChange={handleInputChange}
					placeholder='Escribe tu mensaje aquí...'
					rows={3}
					className='w-full mb-3'
					onKeyDown={enterListener}
				/>
				<Button onClick={handleSubmit} className='w-full'>
					Send
				</Button>
			</CardContent>
		</Card>
	);
}
