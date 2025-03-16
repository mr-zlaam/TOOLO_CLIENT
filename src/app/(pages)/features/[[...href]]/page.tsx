import React from "react";

export default async function FeaturePage({ params }: { params: Promise<{ href: string[] }> }) {
  const { href } = await params;

  return (
    <div>
      <pre>{JSON.stringify(href, null, 2)}</pre>
    </div>
  );
}
