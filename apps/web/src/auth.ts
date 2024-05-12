import type { User, Session } from "next-auth";
import type { JWT } from "next-auth/jwt"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


interface LoginResponse {
  token: JWT | null;
}


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials, _req) {
        try {
          const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        });
          
          const data = await response.json() as LoginResponse; 
                    
          
          if (!data.token) {
            return null;
          }

          const user: User = {
            token: data.token,
            username: credentials.username as string,
            role: credentials.username === "mor_2314" ? "admin" : "user"

          };
          return user;
        } catch (error) {
          return null;
        }
      
      },
    }),
  ],
/*   callbacks: {
    jwt(params) {
      // If a user is returned, include their token in the JWT token
      const { token, user } = params;
        return {
          ...token,
          accessToken: user.token
      }
    },
    session(session: Session, token: JWT) {
      // Include the user token in the session
      session.accessToken = token.accessToken;
      return session;
    },
  }, */
  callbacks: {
  jwt({ token, account, user }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
      token.accessToken = account.access_token    
      token.role = user.role
      token.username = user.username
    }
    return token
  },
  session({session, token}: {session: Session, token: JWT}) {
    session.user = {...session.user, role: token.role as string, username: token.username as string}
    
    
    return session
  },
}

});
