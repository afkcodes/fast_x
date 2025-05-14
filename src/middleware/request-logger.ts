import type { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Middleware that logs information about incoming requests
 *
 * This middleware adds a timestamp to the request object and logs
 * request details after the response has been sent.
 */
export async function requestLoggerMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Store the start time on the request object
  const start = performance.now();

  // Use onResponse hook from the reply
  reply.raw.on('finish', () => {
    const duration = performance.now() - start;
    const { method, url, ip } = request;
    const { statusCode } = reply;

    request.log.info({
      method,
      url,
      statusCode,
      ip,
      duration: `${duration.toFixed(2)}ms`,
    });
  });
}
