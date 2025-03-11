import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="inline-flex items-center cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
