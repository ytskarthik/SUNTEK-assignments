import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();
import { UserModel } from "../models/UserModel.js";

async function main() {
  if (!process.env.DB_URL) {
    console.error("DB_URL missing in environment");
    process.exit(1);
  }

  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to DB");

  const users = await UserModel.find({});
  console.log(`Found ${users.length} users`);

  let updated = 0;
  for (const u of users) {
    const pwd = u.password || "";
    if (typeof pwd !== "string") continue;
    // bcrypt hashes start with $2 and are ~60 chars
    if (pwd.startsWith("$2") && pwd.length >= 50) {
      continue; // already hashed
    }
    const hashed = await bcrypt.hash(pwd, 10);
    u.password = hashed;
    await u.save();
    updated++;
    console.log(`Hashed password for ${u.email}`);
  }

  console.log(`Migration complete. Updated ${updated} user(s).`);
  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
