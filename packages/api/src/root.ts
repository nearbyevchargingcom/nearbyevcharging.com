import { authRouter } from "./router/auth";
import { featureRouter } from "./router/feature.router";
import { pricingRouter } from "./router/pricing.router";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  auth: authRouter,
  pricing: pricingRouter,
  feature: featureRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
export type UserRouter = typeof userRouter;
export type PricingRouter = typeof pricingRouter;
export type FeatureRouter = typeof featureRouter;
