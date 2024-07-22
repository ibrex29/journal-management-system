import type { Metadata } from 'next';
// import PageClient from './PageClient'; // Import the client-side component
import { config } from '@/config'; // Import config
import Summary from './overview/PageClient';

export const metadata: Metadata = { title: `Overview | Dashboard | ${config.site.name}` };

export default function Page(): React.JSX.Element {
  return <Summary />;
}
