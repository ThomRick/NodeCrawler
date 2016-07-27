import IRequestBodyParser from "../IRequestBodyParser";

/**
 * RequestBodyParser
 */
class RequestBodyParser<T> implements IRequestBodyParser<T> {
    
    /**
     * Constructor
     */
    constructor() {}

    /**
     * parse
     */
    public parse(jsonString: string, type: T): T {
        return null;
    }
}