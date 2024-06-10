import { prisma } from "./connection";

export async function getUcAll() {
  // ... you will write your Prisma Client queries here
  const result = await prisma.uc_product.findMany({
    orderBy:{
      price: 'asc'
    }
  });
  await prisma.$disconnect();
  return result;
}
