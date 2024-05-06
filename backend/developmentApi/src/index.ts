import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import { cors } from 'hono/cors';

const app = new Hono();
app.use(prettyJSON());

app.use(
    '/*',
    cors({
        origin: ['http://localhost:3000'],
        allowHeaders: ['Content-Type'],
        allowMethods: ['GET'],
        exposeHeaders: ['Content-Type'],
        credentials: true,
    })
);

app.get('/stableDiffusion4R/:prompt', (c) => {
    const prompt = c.req.param('prompt');
    return c.json({
        prompt: [prompt],
        url: ['https://yukiosada.work/CG-Animation.webp'],
    });
});

app.get('/modelA/:prompt', (c) => {
    const prompt = c.req.param('prompt');
    return c.json({
        prompt: prompt,
        url: ['https://yukiosada.work/CG-Animation.webp'],
    });
});

app.get('/modelB/:prompt', (c) => {
    const prompt = c.req.param('prompt');
    return c.json({
        prompt: prompt,
        url: ['https://yukiosada.work/CG-Animation.webp'],
    });
});

app.get('/modelC/:prompt', (c) => {
    const prompt = c.req.param('prompt');
    return c.json({
        prompt: prompt,
        url: ['https://yukiosada.work/CG-Animation.webp'],
    });
});

const port = 8787;

console.log(`Server is running on port http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
