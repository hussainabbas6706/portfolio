export interface TechTag {
  name: string;
  category?: "frontend" | "backend" | "ai" | "math" | "tools";
}

export interface ProjectSlot {
  id: string;
  index: string; // e.g. "01", "02"
  title: string;
  description: string;
  tags: string[];
  status: "live" | "completed" | "in-progress" | "upcoming" | "template";
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavSection {
  id: string;
  label: string;
  href: string;
}
