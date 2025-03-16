import React from "react";

export default function FeaturePage({ params }: { params: Promise<{ feature: string[] }> }) {
  return (
    <div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
