import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiAmazon,
  SiGooglecloud,
  SiR,
  SiRust,
  SiDotnet,
  SiStreamlit,
  SiFastapi,
  SiGnubash,
  SiSqlite,
  SiIcloud,
  SiFlydotio,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Languages & Frameworks',
      skills: [
        { skill: 'python', icon: SiPython },
        { skill: 'pytorch', icon: SiPytorch },
        { skill: 'tensorflow', icon: SiTensorflow },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'sql', icon: SiSqlite },
        { skill: 'docker', icon: SiDocker },
        { skill: 'streamlit', icon: SiStreamlit },
        { skill: 'fastapi', icon: SiFastapi },
        { skill: 'R', icon: SiR },
        { skill: 'bash', icon: SiGnubash },
        { skill: 'rust', icon: SiRust },
        { skill: 'c#', icon: SiDotnet },
      ],
    },
    {
      field: 'Cloud',
      skills: [
        {
          skill: 'aws',
          icon: SiAmazon,
        },
        {
          skill: 'azure',
          icon: VscAzure,
        },
        {
          skill: 'google cloud',
          icon: SiGooglecloud,
        },
        {
          skill: 'fly.io',
          icon: SiFlydotio,
        },
      ],
    },
  ]

export default SKILLS
