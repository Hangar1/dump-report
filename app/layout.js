import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Website</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        {children}
        <footer>© 2024 Retrofit Reports</footer>
      </body>
    </html>
  );
}
