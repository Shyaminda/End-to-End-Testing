// import { vi } from "vitest";
import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

// export const prismaClient = {
//     request: {
//         create: vi.fn(), //prismaClient.request.create
//         delete: vi.fn() //prismaClient.request.delete
//     }
// }

export const prismaClient = mockDeep<PrismaClient>();

//__mocks__ should be in the same directory as the module being mocked