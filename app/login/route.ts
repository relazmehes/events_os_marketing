import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export function GET() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL;

  if (!appUrl) {
    redirect("/contact");
  }

  redirect(`${appUrl}/login`);
}
