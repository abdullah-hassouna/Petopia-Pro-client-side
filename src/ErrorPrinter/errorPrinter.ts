import errorText from './errorsText.json'


function ErrorPrinter(errorStatus?: string) {
    let errorTextObjecy = Object(errorText);
    const ErrorText = errorTextObjecy[errorStatus || 200] as string

    return ErrorText
}


export default ErrorPrinter