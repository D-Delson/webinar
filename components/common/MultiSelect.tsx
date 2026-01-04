"use client";

type Option = {
    id: string;
    identity: string;
    price: number;
};

type MultiSelectProps = {
    options: Option[];
    selected: Option[];
    onChange: (selected: Option[]) => void;
};

export default function MultiSelect({ options, selected, onChange }: MultiSelectProps) {
    const toggleOption = (option: Option) => {
        if (selected.find((s) => s.id === option.id)) {
            onChange(selected.filter((s) => s.id !== option.id));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className="grid gap-2">
            {options.map((option) => {
                const isSelected = selected.some((s) => s.id === option.id);
                return (
                    <div
                        key={option.id}
                        onClick={() => toggleOption(option)}
                        className={`
              cursor-pointer flex justify-between items-center p-3 border rounded-lg
              ${isSelected ? "bg-blue-50 border-blue-500" : "border-gray-300 hover:border-blue-400"}
              transition
            `}
                    >
                        <span>{option.identity}</span>
                        <span>₹{option.price}</span>
                    </div>
                );
            })}
        </div>
    );
}
