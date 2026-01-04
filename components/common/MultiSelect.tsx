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
                    <label
                        key={option.id}
                        className={`
              cursor-pointer flex justify-between items-center p-3 border rounded-lg
              ${isSelected ? "bg-blue-50" : "border-gray-300 hover:border-blue-400"}
              transition
            `}
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleOption(option)}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="text-[#333]">{option.identity}</span>
                        </div>
                        <span className="text-[#333] font-medium">₹{option.price}</span>
                    </label>
                );
            })}
        </div>
    );
}
