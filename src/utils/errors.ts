/**
 * Base application error class that extends the built-in Error
 */
export class AppError extends Error {
  public statusCode: number;
  public errorCode: string;
  public isOperational: boolean;
  public errors?: Record<string, any>;

  constructor(
    message: string,
    statusCode = 500,
    errorCode = 'INTERNAL_SERVER_ERROR',
    isOperational = true,
    errors?: Record<string, any>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = isOperational;
    this.errors = errors;

    // Ensure the correct prototype chain
    Object.setPrototypeOf(this, AppError.prototype);

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * 404 Not Found error
 */
export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', errorCode = 'NOT_FOUND') {
    super(message, 404, errorCode, true);
  }
}

/**
 * 400 Bad Request error
 */
export class BadRequestError extends AppError {
  constructor(
    message = 'Invalid request',
    errorCode = 'BAD_REQUEST',
    errors?: Record<string, any>
  ) {
    super(message, 400, errorCode, true, errors);
  }
}

/**
 * 401 Unauthorized error
 */
export class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required', errorCode = 'UNAUTHORIZED') {
    super(message, 401, errorCode, true);
  }
}

/**
 * 403 Forbidden error
 */
export class ForbiddenError extends AppError {
  constructor(message = 'Access denied', errorCode = 'FORBIDDEN') {
    super(message, 403, errorCode, true);
  }
}

/**
 * 409 Conflict error
 */
export class ConflictError extends AppError {
  constructor(message = 'Resource conflict', errorCode = 'CONFLICT') {
    super(message, 409, errorCode, true);
  }
}

/**
 * 429 Too Many Requests error
 */
export class TooManyRequestsError extends AppError {
  constructor(message = 'Rate limit exceeded', errorCode = 'RATE_LIMIT_EXCEEDED') {
    super(message, 429, errorCode, true);
  }
}
