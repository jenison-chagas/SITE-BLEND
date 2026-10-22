import { createClient } from "@/lib/supabase/server";

export async function getFeaturedProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("SUPABASE ERROR MESSAGE:", String(error.message));
    console.error("SUPABASE ERROR CODE:", String(error.code));
    console.error("SUPABASE ERROR DETAILS:", String(error.details));
    console.error("SUPABASE ERROR HINT:", String(error.hint));
    console.error("SUPABASE ERROR JSON:", JSON.stringify(error));

    return [];
  }

  return data;
}