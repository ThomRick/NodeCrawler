/**
 * IRequestBodyParser
 */
interface IRequestBodyParser<T> {
    parse(jsonData: string, type: T): T;
}

export default IRequestBodyParser;