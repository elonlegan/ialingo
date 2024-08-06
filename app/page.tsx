import Chat from '@/components/chat/chat';
import ConversationWords from '@/components/conversation-words/conversation-words';
import Translate from '@/components/translate/translate';

export default function Home() {
	return (
		<main className='grid p-6 gap-6 grid-cols-3 grid-rows-12 h-dvh'>
			<Translate />
			<Chat />
			<ConversationWords />
		</main>
	);
}
