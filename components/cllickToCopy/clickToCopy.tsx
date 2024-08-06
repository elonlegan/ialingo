import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ClickToCopy({ children }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>
					<p>Click para copiar</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
