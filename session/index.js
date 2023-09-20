import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    password: "somelong32characterpasswordSomeRandomCharacter",
    cookieName: "CookieCreatedByIronSessionForNextjsApp",
    cookieOptions: {
      secure: false,
    },
  });
}
