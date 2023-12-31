import ThemeProvider from '@/components/ServerComponents/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CssBaseline from '@/components/ServerComponents/CssBaseline';
import theme from '@/config/theme';
import { Providers } from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audrey Study Game',
  description: 'Study app for Audrey <3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning={true} >
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body className={inter.className} style={{backgroundColor: '#dff7d2', wordBreak: 'break-word'}}>
					<Providers>
						{children}
					</Providers>
				</body>
			</ThemeProvider>
		</html>
	)
}
