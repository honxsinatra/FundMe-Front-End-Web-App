export const metadata = {
  title: "FundRiser",
  description:
    "Decentralized Application for raising funds for various purposes like charity, group goals archivement, Built by Hongoa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
