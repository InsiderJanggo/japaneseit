/* eslint-disable  */

const errorTypes = {
    ValidationError: 422,
    UniqueViolationError: 409,
};

const errorMessages = {
    UniqueViolationError: 'Already exists.',
}

exports.errorHandler = (error, req, res, next) => {
    var statusCode = res.statusCode == 200 ? errorTypes[error.name] || 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: errorMessages[error.name] || error.message,
        stack:  process.env.NODE_ENV === 'development' ? '🍕' : error.stack,
        errors: error.errors || undefined,
    })
}

exports.NotFound = (req, res, next) => {
    var error = `Not Found - ${req.originalUrl}`;
    res.status(404);
    res.json({
        message: error,
        statusCode: 404
    })
}