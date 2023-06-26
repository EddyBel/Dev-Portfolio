import { DiJavascript, DiCss3, DiSass, DiHtml5, DiPython, DiJava, DiReact, DiDjango } from 'react-icons/di';
import { SiTypescript, SiLua, SiVim, SiWordpress, SiTailwindcss, SiVite, SiC } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BsFillTerminalFill, BsMarkdown, BsFillLaptopFill } from 'react-icons/bs';
import { FaCode, FaRegStickyNote } from 'react-icons/fa';
import { BiSolidServer, BiLogoFlask } from 'react-icons/bi';
import { MdHttp } from 'react-icons/md';

type PropsTechnologyIcon = {
  technology?: string;
  size?: number;
  color?: string;
  className?: string;
};

const technologyIcons: { [key: string]: any } = {
  javascript: DiJavascript,
  typescript: SiTypescript,
  css: DiCss3,
  sass: DiSass,
  html: DiHtml5,
  python: DiPython,
  java: DiJava,
  lua: SiLua,
  vim: SiVim,
  vimscript: SiVim,
  nvim: SiVim,
  wordpress: SiWordpress,
  tailwind: SiTailwindcss,
  react: DiReact,
  django: DiDjango,
  vite: SiVite,
  c: SiC,
  cpp: TbBrandCpp,
  terminal: BsFillTerminalFill,
  bash: BsFillTerminalFill,
  shell: BsFillTerminalFill,
  markdown: BsMarkdown,
  code: FaCode,
  note: FaRegStickyNote,
  backend: BiSolidServer,
  flask: BiLogoFlask,
  system: BsFillLaptopFill,
  laptop: BsFillLaptopFill,
  host: MdHttp,
  localhost: MdHttp,
};

export function TechnologyIcon(props: PropsTechnologyIcon) {
  const Icon = technologyIcons[props.technology?.toLowerCase()];

  if (!Icon) return <></>;
  return <Icon size={props.size || 24} color={props.color || '#000'} className={props.className} />;
}
