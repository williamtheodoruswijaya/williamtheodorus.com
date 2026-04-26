import {
  BriefcaseBusiness,
  FileText,
  FolderGit2,
  Mail,
  UserRound,
} from "lucide-react";

const shortcuts = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Experience", href: "#experiences", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "CV.pdf", href: "/CV.pdf", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const DesktopShortcuts = () => (
  <aside className="site-container os-desktop-shortcuts" aria-label="Desktop shortcuts">
    {shortcuts.map(({ href, icon: Icon, label }) => (
      <a key={label} href={href} className="os-desktop-shortcut">
        <span className="os-desktop-icon">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="os-desktop-label">{label}</span>
      </a>
    ))}
  </aside>
);
