import { format, parse } from 'date-fns';

export const convertFormat = (dateString, toFormat = 'MM/DD/YYYY') => {
    const parsed = parse(dateString);
    return format(parsed, toFormat);
}
