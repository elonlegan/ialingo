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
import { useState } from 'react';
import ClickToCopy from '@/components/clickToCopy/clickToCopy';
import { useChat } from 'ai/react';

export default function Chat() {
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
	} = useChat();

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
							style={{
								marginBottom: '10px',
								textAlign:
									message.role === 'user'
										? 'right'
										: 'left',
							}}
						>
							<ClickToCopy value={message.content}>
								<div
									style={{
										display: 'inline-block',
										padding: '10px',
										borderRadius: '8px',
										backgroundColor:
											message.role === 'user'
												? '#93c5fd'
												: '#e5e7eb',
									}}
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
