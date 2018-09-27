export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues //Both objects
  };
};
