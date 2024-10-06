const AppErrors = require("./error-handler");
const {StatusCodes} = require('http-status-codes');


class ClientError extends AppErrors{
    constructor(name, message, explanation, statusCode) {
        
        // Object.keys(error.errors)

        super(
            name,
            message,
            explanation,
            statusCode
        )
    }
}

module.exports = ClientError;