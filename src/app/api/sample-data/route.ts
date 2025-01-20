export async function GET() {
  // Static sample data for demonstration
  const sampleData = [
    { id: 1, name: 'Item 1', status: 'Active' },
    { id: 2, name: 'Item 2', status: 'Inactive' },
    { id: 3, name: 'Item 3', status: 'Active' },
  ];

  return new Response(JSON.stringify(sampleData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
