import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function MinimalRouterTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>✅ Router Works!</div>} />
      </Routes>
    </BrowserRouter>
  );
}
