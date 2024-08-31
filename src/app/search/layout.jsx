'use client'

import SearchHearder from "../components/SearchHearder";
import "./../globals.css";
import { Suspense } from 'react'

export default function layout({ children }) {
  return (
    <div>
      <SearchHearder />
      <Suspense>
        {children}
      </Suspense>
    </div>
  );
}
