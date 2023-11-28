import { TperspectiveTextProps } from "@types";

export default function PerspectiveText({ label }: TperspectiveTextProps) {
	return (
		<div className="perspectiveText">
			<p>{label}</p>
			<p>{label}</p>
		</div>
	);
}
