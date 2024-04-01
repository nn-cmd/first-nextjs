"use server";

import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email !== "admin@admin.com" && password !== "1234") {
    return { message: "Login Fail" };
  }

  //Login pass

  const secretJWK = {
    kty: "oct",
    k: process.env.JOSE_SECRET, // Replace with your actual base64 encoded secret key
  };

  const secretKey = await importJWK(secretJWK, "HS256");
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h") // Token expires in 1 hour
    .sign(secretKey);

  console.log(token);
  cookies().set("token", token);
  redirect("/manage/blog");
}
