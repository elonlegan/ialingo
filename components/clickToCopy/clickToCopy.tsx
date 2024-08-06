import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import React, { ReactNode } from 'react';

export default function ClickToCopy({
	children,
	value,
}: {
	children?: ReactNode;
	value: string;
}) {
	const { toast } = useToast();

	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		toast({
			title: 'Copiado!',
			variant: 'success',
		});
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger onClick={handleCopy}>
					{children}
				</TooltipTrigger>
				<TooltipContent>
					<p>Click para copiar</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
