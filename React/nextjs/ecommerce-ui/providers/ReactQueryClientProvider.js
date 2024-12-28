'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
const queryClient = new QueryClient();
const ReactQueryClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
