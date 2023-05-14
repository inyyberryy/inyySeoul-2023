import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";


export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    KakaoProvider({
      clientId: 'f9425de55e0004bce96d21c0bbe5887d',  // 앱 설정 -> 앱키 
      clientSecret: 'iIgSj0z8dDwnzPGt5BUISLfXTOL3utyf',
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: 'qwe123',
});