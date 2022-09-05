export const emailValidator = (text) => {
    return !!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/g.exec(text);
}

export const numberValidator = (text) => {
    return !!/^-?\d*\.?\d*$/.exec(text) ;
}

export const passwordValidator = (text) => {
    return text?.length >= 6
}