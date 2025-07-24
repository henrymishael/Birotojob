import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const phone = searchParams.get("phone");
  const email = searchParams.get("email");
  const program = searchParams.get("program");

  const programText =
    program === "kids" ? "Kids Program (₦50,000)" : "Teens Program (₦75,000)";
  const programAge =
    program === "kids" ? "Kids (Ages 6–11)" : "Teens (Ages 12–16)";

  const message = `Hi! I'm interested in the BIRO TO JOB Tech Summer Camp for ${programAge}.

Name: ${name}
Age: ${age}
Phone: ${phone}
Email: ${email}
Program: ${programText}

Please provide more information about enrollment.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=2349081893000&text=${encodedMessage}`;

  return Response.redirect(whatsappUrl, 302);
}
