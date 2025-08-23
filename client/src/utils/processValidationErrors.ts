import type { AnyObjectSchema, InferType } from "yup";

export function processValidationErrors<S extends AnyObjectSchema>(errors: InferType<S>) {
  const processedErrors = {} as InferType<S>;

  Object.keys(errors).forEach((key) => {
    if (key.startsWith("sizes[")) {
      // Extract index from the key
      const indexMatch = key.match(/\[(\d+)\]/);
      if (indexMatch) {
        const index = parseInt(indexMatch[1], 10);
        const field = key.split("].")[1];

        if (!processedErrors[index]) {
          processedErrors[index] = {};
        }
        processedErrors[index][field] = errors[key];
      }
    } else {
      processedErrors[key] = errors[key];
    }
  });

  return processedErrors;
}
