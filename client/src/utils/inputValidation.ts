import { ValidationError, type AnyObjectSchema, type InferType } from "yup";

export async function inputValidation<S extends AnyObjectSchema, E>(schema: InferType<S>, entries: E) {
  try {
    await schema.validate(entries, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      const validationErrors = error.inner.reduce((acc: Record<string, string>, curr) => {
        if (curr.path !== undefined) {
          acc[curr.path] = curr.message;
        }
        return acc;
      }, {} as Record<string, string>);
      throw { ...validationErrors };
    } else {
      const message = typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : String(error);
      throw { message };
    }
  }
}

