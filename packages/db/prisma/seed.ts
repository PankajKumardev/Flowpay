import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: {
      number: "1234567890",
    },
    update: {},
    create: {
      number: "1234567890",
      password: "password",
      name: "Alice",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Completed",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: {
      number: "9876543210",
    },
    update: {},
    create: {
      number: "9876543210",
      password: "password",
      name: "Bob",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failed",
          amount: 20000,
          token: "123",
          provider: "ICICI Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
