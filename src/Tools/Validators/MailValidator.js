import RegexMail from '../Regex/regexMail';

const MailValidator = (value) => RegexMail.test(value) || 'El valor no es un correo valido';

export default MailValidator;
