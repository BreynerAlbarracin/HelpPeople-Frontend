import dayjs from 'dayjs';

export const formatDateUser = (textDate) => dayjs(textDate).format('DD/MM/YYYY');

export const formatDateSystem = (textDate) => dayjs(textDate).format('YYYY-MM-DD');
