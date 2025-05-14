import type { FastifyInstance } from 'fastify';

interface HealthResponse {
  status: string;
  timestamp: string;
  version: string;
  uptime: number;
}

const healthResponseSchema = {
  200: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      timestamp: { type: 'string' },
      version: { type: 'string' },
      uptime: { type: 'number' },
    },
  },
};

export async function healthRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get<{ Reply: HealthResponse }>(
    '/health',
    {
      schema: {
        description: 'Health check endpoint',
        tags: ['system'],
        response: healthResponseSchema,
      },
    },
    async (_request, reply) => {
      const response: HealthResponse = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0',
        uptime: process.uptime(),
      };

      return reply.code(200).send(response);
    }
  );
}
