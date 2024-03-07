import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const localization = {
  socialButtonsBlockButton: "Sign In with HEY",
  unstable__errors: {
    not_allowed_access:
      "You cannot pass is - please use another email address",
  },
};


function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider localization={localization} {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
export default MyApp;
