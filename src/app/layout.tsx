import "./styles.css"; // Import your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your App Title</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
