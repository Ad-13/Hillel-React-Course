export default function requiredValidator(value, name) {
  return value ? '' : `${name} is required.`
}
