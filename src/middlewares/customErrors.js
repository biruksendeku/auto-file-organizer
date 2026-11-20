export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Invalid Request") {
    super(message, 400);
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} Not Found`, 404);
  }
}
