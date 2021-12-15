import supertest from "supertest";

const baseUrl = process.env.BASE_URL;

export const request = supertest(baseUrl);
