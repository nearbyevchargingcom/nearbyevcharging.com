import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

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
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.pricingModel.findFirst({ where: { id: input.id } });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.pricingModel.delete({ where: { id: input } });
  }),
});
