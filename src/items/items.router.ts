/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

itemsRouter.get("/getAllColors", async (req: Request, res: Response) => {
    res.status(200).send(ItemService.colorOptions);
});

itemsRouter.post("/createMap", async (req: Request, res: Response) => {
    let columns = req.body.columns;
    let lines = req.body.lines;
    let colors = req.body.colors;
    res.status(200).send(ItemService.createMap(columns, lines, colors));
});

itemsRouter.post("/setOrigin", async (req: Request, res: Response) => {
    let map = req.body.square;
    let color = req.body.color;
    res.status(200).send(ItemService.setOrigin(map, color));
});