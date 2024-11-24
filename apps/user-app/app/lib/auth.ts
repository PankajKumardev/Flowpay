import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";

const credentialsSchema = z.object({
  phone: z.string().min(6).max(12),
  password: z.string(),
});
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Phone",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },

      async authorize(credentials?: { phone: string; password: string }) {
        if (!credentials || !credentials.phone || !credentials.password) {
          console.error("Missing credentials");
          return null;
        }
   
        const result = credentialsSchema.safeParse(credentials);
        if (!result.success) {
          console.error(result.error);
          return null;
        }

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password,
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }

        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ session, token }: any) {
      // Assuming `sub` is the user ID stored in the token
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
};
