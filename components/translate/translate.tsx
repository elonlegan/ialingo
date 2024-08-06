'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import ClickToCopy from '@/components/clickToCopy/clickToCopy';

export default function Translate() {
	const [translatedText, setTranslatedText] = useState('');

	const handleTranslate = (textForTranslate: string) => {
		const translated = textForTranslate
			.split('')
			.reverse()
			.join('');
		setTranslatedText(translated);
	};

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
