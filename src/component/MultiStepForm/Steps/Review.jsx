export default function Review({ watch }) {
  const data = watch();

  return (
    <pre className="bg-gray-100 p-4 rounded text-sm">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
