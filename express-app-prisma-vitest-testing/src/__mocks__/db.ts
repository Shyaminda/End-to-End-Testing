import { vi } from "vitest";

export const prismaClient = {
    request: {
        create: vi.fn(), //prismaClient.request.create
        delete: vi.fn() //prismaClient.request.delete
    }
}