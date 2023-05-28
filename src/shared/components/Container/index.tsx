interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export default function Container({ children, ...rest }: ContainerProps) {
	return (
		<div className="container px-2 mx-auto md:px-0" {...rest}>
			{children}
		</div>
	);
}
