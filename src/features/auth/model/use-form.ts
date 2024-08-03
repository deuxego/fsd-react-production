import { FormEvent, useState } from 'react';

export const useForm = <T>(cb: (formData: T) => void, defaultValues: T = {} as T) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<T>(defaultValues);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    cb(formData);

    setIsLoading(false);
  };

  return {
    isLoading,
    formData,
    setFormData,
    handleSubmit
  };
};
