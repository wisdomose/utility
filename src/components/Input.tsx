type Props = {
    label: string;
    placeholder: string;
    type?: "email" | "number" | "text";
    id: string;
    disabled?: boolean;
    percent?: string;
    required?: boolean;
};

export default function Input({ label, placeholder, type = "text", id, disabled = false, required = false, percent }: Props) {
    return (
        <div>
            <label htmlFor={id} className='block mb-2 text-sm font-medium'>{label} {!!percent && <span className="ml-2 inline-block bg-[#00FF19] bg-opacity-5 text-[#037400] text-xs px-3 rounded-full">{percent}%</span>}</label>
            <input type={type} name={id} id={id} placeholder={placeholder} disabled={disabled} required={required} className='bg-primary-base/5 py-4 px-4 w-full placeholder:text-sm text-sm outline-none focus:bg-primary-base/10 rounded' />
        </div>
    )
}