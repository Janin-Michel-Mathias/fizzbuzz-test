import express from 'express';
export const getAllConversations = (app: express.Application) => {
    app.post('/text/:text', async (req: express.Request, res: express.Response) => {
        res.json({
            message: req.params.text
        });
    });
};