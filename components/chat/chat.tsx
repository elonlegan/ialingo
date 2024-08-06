'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import ClickToCopy from '@/components/clickToCopy/clickToCopy';

export default function Chat() {
	const [messages, setMessages] = useState<
		{
			text: string;
			sender: 'user' | 'ai';
		}[]
	>([]);
	const [newMessage, setNewMessage] = useState('');

	const handleSendMessage = () => {
		if (newMessage.trim() !== '') {
			setMessages([
				...messages,
				{ text: newMessage, sender: 'user' },
			]);
			setNewMessage('');
		}
	};

	const enterListener = (e: any) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	return (
		<Card className='col-span-2 row-span-12 col-start-2 flex flex-col'>
			<CardHeader>
				<CardTitle>Chat</CardTitle>
			</CardHeader>
			<CardContent className='h-full flex flex-col'>
				<div className='h-full overflow-y-scroll border p-2 rounded-lg bg-gray-100 mb-5'>
					{messages.map((message, index) => (
						<div
							key={index}
							style={{
								marginBottom: '10px',
								textAlign:
									message.sender === 'user'
										? 'right'
										: 'left',
							}}
						>
							<ClickToCopy value={message.text}>
								<div
									style={{
										display: 'inline-block',
										padding: '10px',
										borderRadius: '8px',
										backgroundColor:
											message.sender === 'user'
												? '#daf4fa'
												: '#f1f1f1',
									}}
								>
									{message.text}
								</div>
							</ClickToCopy>
						</div>
					))}
				</div>
				<Textarea
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder='Escribe tu mensaje aquí...'
					rows={3}
					className='w-full mb-3'
					onKeyDown={enterListener}
				/>
				<Button
					onClick={handleSendMessage}
					className='w-full'
				>
					Send
				</Button>
			</CardContent>
		</Card>
	);
}
