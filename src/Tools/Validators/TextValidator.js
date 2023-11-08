const TextValidator = (value) => (!!value && value.trim() !== '') || 'El valor es requerido';

export default TextValidator;
