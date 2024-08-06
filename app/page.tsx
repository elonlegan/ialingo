'use client';
import Chat from '@/components/chat/chat';
import ConversationWords from '@/components/conversation-words/conversation-words';
import Translate from '@/components/translate/translate';
import { Message } from 'ai';
import { useState } from 'react';

export default function Home() {
	const [message, setMessage] = useState<Message>();
	return (
		<main className='grid p-6 gap-6 grid-cols-3 grid-rows-12 h-dvh'>
			<Translate />
			<Chat onMessage={setMessage} />
			<ConversationWords message={message} />
		</main>
	);
}
