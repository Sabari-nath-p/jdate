import { useState } from "react";
import type { User } from "@/types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: implement login/logout/session persistence

  return { user, setUser, isLoading, setIsLoading };
}
