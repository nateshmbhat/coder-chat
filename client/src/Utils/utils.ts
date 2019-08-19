export const getSessionId = () :string => {
    const date = new Date();
    return `${date.getDate()}${date.getMonth()}${date.getFullYear()}`
    
}