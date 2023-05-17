import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const PricingModelSchema = z.object({
  id: z.string(),
  planName: z.string(),
  description: z.string(),
  monthlyPrice: z.string(),
  yearlyPrice: z.string(),
  isBanner: z.boolean(),
  features: z.array(
    z.object({
      title: z.string(),
    }),
  ),
});

export const pricingRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.pricingModel.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.pricingModel.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(PricingModelCreateInput)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.pricingModel.create({
        data: input,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.pricingModel.delete({ where: { id: input } });
  }),
});