import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/utils/database";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';


export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 //30일
  },
  providers: [
    KakaoProvider({
      clientId: 'f9425de55e0004bce96d21c0bbe5887d',  // 앱 설정 -> 앱키 
      clientSecret: 'iIgSj0z8dDwnzPGt5BUISLfXTOL3utyf',
    }),
    CredentialsProvider({
    //1. 로그인페이지 폼 자동생성해주는 코드 
    name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
    },

    //2. 로그인요청시 실행되는코드
    //직접 DB에서 아이디,비번 비교하고 
    //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
    async authorize(credentials) {
      let db = (await connectDB).db('inyySeoul');
      let user = await db.collection('user').findOne({email : credentials.email})
      if (!user) {
        console.log('해당 이메일은 없음');
        return null
      }
      const pwcheck = await bcrypt.compare(credentials.password, user.password);
      if (!pwcheck) {
        console.log('비번틀림');
        return null
      }
      return user
    }
  }),
  ],
  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
        token.user.image = user.image
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
  secret: 'qwe123',
  adapter : MongoDBAdapter(connectDB),
});