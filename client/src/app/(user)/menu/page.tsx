'use client';

import { Suspense } from 'react';
import MenuPageContent from './MenuPageContent';

export default function MenuPage() {
  return (
    <Suspense fallback={<div>Loading menu...</div>}>
      <MenuPageContent />
    </Suspense>
  );
}
