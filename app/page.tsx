'use client';
import Chat from '@/components/chat/chat';
import ConversationWords from '@/components/conversation-words/conversation-words';
import { ModeToggle } from '@/components/mode-toggle/mode-toggle';
import Translate from '@/components/translate/translate';
import { Message } from 'ai';
import { headers } from 'next/headers';
import { useState } from 'react';

export default function Home() {
	const [message, setMessage] = useState<Message>();
	return (
		<div className='p-6 h-dvh gap-6 flex'>
			<header className='flex flex-col gap-6'>
				<ModeToggle />
				<h1
					className='text-4xl  font-semibold'
					style={{
						writingMode: 'vertical-rl',
					}}
				>
					IaLingo
				</h1>
			</header>
			<main className='grid gap-6 grid-cols-3 grid-rows-12 h-full'>
				<Translate />
				<Chat onMessage={setMessage} />
				<ConversationWords message={message} />
			</main>
		</div>
	);
}
