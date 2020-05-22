export const getType = value => (Array.isArray(value) ? "array" : typeof value);
export const buildPath = (path, name, type) => {
  if (path.length === 0) return `[${name}]`;

  switch (type) {
    case "array":
      return `${path}[${name}]`;
    default:
      return `${path}.[${name}]`;
  }
};
