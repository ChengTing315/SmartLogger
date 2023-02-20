export const checkNsetField = (name, field) => {
  if (field == null) {
    field = {
      id: "",
      title: "",
    };
  } else {
  }
  checkType(field) != null
    ? (depthInfo[name] = field.id)
    : (depthInfo[name] = "");
};
