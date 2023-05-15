import { authRouter } from "./router/auth";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export type PostRouter = typeof userRouter;
