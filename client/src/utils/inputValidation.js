export async function inputValidation(schema, entries) {
  try {
    await schema.validate(entries, { abortEarly: false });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      throw { ...validationErrors };
    } else {
      throw { message: error.message };
    }
  }
}
