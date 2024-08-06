import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ClickToCopy({ children, value }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					onClick={() => {
						navigator.clipboard.writeText(value);
					}}
				>
					{children}
				</TooltipTrigger>
				<TooltipContent>
					<p>Click para copiar</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
