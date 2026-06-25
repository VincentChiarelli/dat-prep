"use client";

// SyncInit: mount in layout to pull remote progress and arm auto-push.
// Renders nothing — purely a side-effect component.
// Usage: add <SyncInit /> anywhere inside the root layout's client tree.

import { useEffect } from "react";
import { init } from "@/lib/sync";

export default function SyncInit() {
  useEffect(() => {
    init();
  }, []);

  return null;
}
