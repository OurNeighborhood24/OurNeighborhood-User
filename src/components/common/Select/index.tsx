import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  SelectContainer,
  SelectText,
  DropdownList,
  DropdownItem,
} from "./style";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Select = ({
  options,
  value,
  onChange,
  placeholder = "선택해주세요",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <SelectContainer onClick={() => setIsOpen(!isOpen)}>
      <SelectText $hasValue={!!selectedOption}>
        {selectedOption ? selectedOption.label : placeholder}
      </SelectText>
      <BsChevronDown />

      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
              $isLast={index === options.length - 1}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SelectContainer>
  );
};

export default Select;
