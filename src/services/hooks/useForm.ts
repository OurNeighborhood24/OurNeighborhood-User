import { useState, useCallback } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>
  );

  const handleChange = useCallback(
    (name: keyof T, value: any) => {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback((name: keyof T) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  const setError = useCallback((name: keyof T, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  }, []);

  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({} as Record<keyof T, string>);
    setTouched({} as Record<keyof T, boolean>);
  }, [initialValues]);

  const isValid = Object.values(errors).every((error) => !error);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setError,
    setFieldValue,
    resetForm,
    isValid,
  };
};
