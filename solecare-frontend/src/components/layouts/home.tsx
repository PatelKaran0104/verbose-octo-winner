import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";

export function HomeLayout() {
  return (
    <AppShell>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
