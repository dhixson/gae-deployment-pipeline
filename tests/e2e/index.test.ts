import { StatusCodes } from "http-status-codes";
import * as helper from './testHelper'

describe("GET /", () => {
    it("should return 200 OK", async () => {
        const response = await helper.request.get("/");
        expect(response.status).toBe(StatusCodes.OK);
    });
})