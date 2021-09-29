export default {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  clientName: process.env.NEXT_PUBLIC_BASE_NAME,
  isProduction: true,
  // isProduction: process.env.NODE_ENV === 'production',
  payment: {
    paystack: {
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    },
    flutterwave: {
      publicKey: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    },
  },

  logo: { text: "/assets/logo/logo.svg", icon: "/assets/logo/icon.svg" },
  client: {
    clientName: "Kimogan",
    clientDomain: "kimogan.com",
    facebook: "",
    instagram: "",
    telephone: "",
    youtube: "",
    twitter: "",
  },
  styles: {
    baseColor: "#0C4284",
    primaryColor: "",
    accentColor: "",
    tertiaryColor: "",
  },
  cloudinary: {},
};
