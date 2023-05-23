import { authRouter } from "./router/auth";
import { pricingRouter } from "./router/pricing.router";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: userRouter,
  auth: authRouter,
  pricing: pricingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export type PostRouter = typeof userRouter;
