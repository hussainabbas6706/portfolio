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
  status: "in-progress" | "upcoming" | "template";
  githubUrl?: string;
  liveUrl?: string;
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
