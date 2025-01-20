import HomePage from '@/components/pages/HomePage';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/sample-data`);

  if (!res.ok) {
    return;
  }

  return res.json();
}

export default async function Home() {
  await getData();
  return <HomePage />;
}
