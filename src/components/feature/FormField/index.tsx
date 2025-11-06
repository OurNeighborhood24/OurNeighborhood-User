import { ReactNode } from "react";
import { FormSection, FormLabel } from "./style";

interface FormFieldProps {
  label: string;
  children: ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <FormSection>
      <FormLabel>{label}</FormLabel>
      {children}
    </FormSection>
  );
};

export default FormField;
