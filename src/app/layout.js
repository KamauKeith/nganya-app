import './globals.css';
import Navbar from '../components/navbar/Navbar';

export const metadata = {
  title: 'Nganya App',
  description: 'Matatu & Bus booking app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}