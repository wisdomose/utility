type Props = {
    label: string;
    type?: "button" | "submit";
    block?: boolean
}

export default function Button({ label, type = "button", block }: Props) {
    return (
        <button type={type} className={`bg-primary-base py-4 px-10 text-white rounded font-semibold ${block ? "w-full" : "w-fit"}`}>{label}</button>
    )
}