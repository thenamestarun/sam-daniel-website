import { redirect } from "next/navigation";

export const runtime = "edge";

export default function AdminPage() {
  redirect("https://www.sanity.io/manage/personal/project/ouxg4bbm/content");
}
