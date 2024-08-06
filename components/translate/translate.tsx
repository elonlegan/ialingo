'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import ClickToCopy from '@/components/clickToCopy/clickToCopy';
import { useToast } from '../ui/use-toast';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

export default function Translate() {
	const { toast } = useToast();

	const [translatedText, setTranslatedText] = useState('');

	const handleTranslate = useDebouncedCallback(
		async (textForTranslate: string) => {
			if (!textForTranslate) {
				setTranslatedText('');
				return;
			}
			setTranslatedText('cargando...');
			try {
				const response = await axios.post(
					'/api/translate',
					{
						textForTranslate,
					}
				);
				setTranslatedText(response.data.translatedText);
			} catch (error) {
				console.error('Error translating text:', error);
				toast({
					title: 'Error translating text',
					variant: 'destructive',
				});
			}
		},
		300
	);

	return (
		<main>
			<Card className='col-start-1 row-start-1 col-span-1 row-span-5'>
				<CardHeader>
					<CardTitle>Traductor</CardTitle>
					<CardDescription>
						Tranquilo detectara el idioma
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Textarea
								id='inputText'
								onChange={(e) =>
									handleTranslate(e.target.value)
								}
								placeholder='Ingresar texto'
							/>
						</div>
						<ClickToCopy value={translatedText}>
							<div className='flex flex-col space-y-1.5'>
								<Textarea
									id='translatedText'
									value={translatedText}
									readOnly
									placeholder='Traducción'
								/>
							</div>
						</ClickToCopy>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
