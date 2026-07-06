import ufcspaLogo from "/partners/ufcspa-logo-256x256.png";
import ifrsLogo from "/partners/Logo-IFRS-cores-sem-fundo-Vertical.png";
import ufrgsLogo from "/partners/Logo UFRGS formato SVG-01.svg";
import ufscLogo from "/partners/brasao_UFSC_vertical_sigla.svg";
import rnpLogo from "/partners/logo-rnp.png";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projeto", label: "Sobre" },
  { href: "/equipe", label: "Equipe" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/noticias", label: "Notícias" },
];

export const heroContent = {
  title: "Grupo de Trabalho (GT) - EduValida",
  description:
    "Plataforma de emissão, validação e verificação de microcertificações em uma base nacional.",
  image: "microcert.png",
  primaryCta: { href: "/projeto", label: "Sobre o projeto" },
  secondaryCta: { href: "/roadmap", label: "Roadmap" },
  asideTitle: "Leituras rápidas",
};

export const projectSection = {
  id: "projeto",
  kicker: "Sobre o EduValida",
  title:
    "Uma infraestrutura nacional para reconhecer, validar e verificar competências.",
  paragraphs: [
    "O EduValida nasceu para enfrentar um desafio crescente da educação moderna: competências relevantes são adquiridas em disciplinas, cursos de extensão, capacitações e trilhas formativas, mas frequentemente permanecem dispersas, pouco padronizadas e difíceis de validar.",
    "A plataforma permite que instituições definam seus próprios critérios para emissão de microcertificações, transformando evidências educacionais em credenciais digitais verificáveis e alinhadas às necessidades de estudantes, profissionais e empregadores.",
    "Por meio de uma arquitetura interoperável integrada ao ecossistema da RNP, o EduValida busca conectar instituições, automatizar processos de validação e reduzir a dependência de verificações manuais.",
    "Para garantir confiança, autenticidade e transparência, as credenciais emitidas podem ser verificadas de forma independente por meio de registros criptográficos baseados em blockchain, preservando a privacidade e autenticidade das microcertificações.",
  ],
};

export const useCasesSection = {
  id: "usecases",
  kicker: "Use cases",
  title: "Casos de uso principais",
  items: [
    {
      title: "Reconhecimento de competências",
      description:
        "Conecta disciplinas, extensão e formação continuada a microcertificações mais claras e portáteis.",
    },
    {
      title: "Emissão com menos fricção",
      description:
        "Padroniza regras institucionais e reduz o trabalho manual no fluxo de validação.",
    },
    {
      title: "Verificação externa simples",
      description:
        "Permite confirmar autenticidade com mais transparência para parceiros e empregadores.",
    },
  ],
};

export const architectureSection = {
  kicker: "Como funciona",
  title: "Da evidência educacional à credencial verificável.",
  items: [
    "Instituições definem trilhas formativas, competências e critérios de certificação.",
    "Estudantes e profissionais submetem evidências de formação e aprendizagem.",
    "A plataforma automatiza a validação e identifica microcertificações elegíveis.",
    "Credenciais digitais são emitidas e podem ser verificadas de forma segura e transparente.",
  ],
};

export const valueSections = [
  {
    kicker: "Benefícios",
    title: "Por que usar o EduValida?",
    items: [
      "Reconheça competências além dos diplomas tradicionais.",
      "Emita microcertificações de forma padronizada e verificável.",
      "Reduza processos manuais e custos operacionais.",
      "Fortaleça a confiança nas credenciais emitidas.",
    ],
  },
  {
    kicker: "Ecossistema",
    title: "Quem pode participar?",
    items: [
      "Instituições de ensino e pesquisa.",
      "Estudantes e profissionais em formação contínua.",
      "Programas de capacitação e extensão.",
      "Empregadores que desejam validar competências.",
    ],
  },
];

export const teamSection = {
  id: "equipe",
  kicker: "Equipe",
  title: "Equipe de Pesquisa, Desenvolvimento e Inovação",
  items: [
    {
      role: "Coordenador",
      name: "Prof. Dr. Muriel Figueredo Franco",
      org: "UFCSPA",
      photo: "/team/muriel.jpg",
      lattesUrl: "http://lattes.cnpq.br/5417317635081894",
    },
    {
      role: "Assistente de Inovação",
      name: "Me. José Antônio Linch Burmann",
      org: "UFRGS",
      photo: "/team/jose.png",
      lattesUrl: "http://lattes.cnpq.br/5817399860875888",
    },
    {
      role: "Assistente de Inovação",
      name: "Felipe Chassavoimaister Sedano",
      org: "UFCSPA",
      photo: "/team/felipe.jpg",
      lattesUrl: "http://lattes.cnpq.br/3631528557973707",
    },
    {
      role: "Pesquisador - IA",
      name: "Prof. Dr. Sílvio César Cazella",
      org: "UFCSPA",
      photo: "/team/silvio.jpg",
      lattesUrl: "http://lattes.cnpq.br/9173977294178020",
    },
    {
      role: "Pesquisadora - Blockchain",
      name: "Profa. Dra. Isabel Cristina Siqueira da Silva",
      org: "UFCSPA",
      photo: "/team/isabel.jpg",
      lattesUrl: "http://lattes.cnpq.br/7221692456270122",
    },
    {
      role: "Pesquisador - IA e Blockchain",
      name: "Prof. Dr. Eder John Scheid",
      org: "UFRGS",
      photo: "/team/eder.jpg",
      lattesUrl: "http://lattes.cnpq.br/0929533612240305",
    },
    {
      role: "Pesquisador - Blockchain",
      name: "Prof. Dr. Roben Castagna Lunardi",
      org: "IFRS",
      photo: "/team/roben.jpg",
      lattesUrl: "http://lattes.cnpq.br/1243090119249735",
    },
    {
      role: "Pesquisador - IA",
      name: "Prof. Dr. Ricardo Jose Pfitscher",
      org: "UFSC",
      photo: "/team/ricardo.jpg",
      lattesUrl: "http://lattes.cnpq.br/8670516631913057",
    },
    {
      role: "Assistente de Desenvolvimento - IA",
      name: "Eduardo Floriani de Souza",
      org: "UFSC",
      photo: "/team/eduardo.jpg",
      lattesUrl: "http://lattes.cnpq.br/2377057068835917",
    },
    {
      role: "Assistente de Desenvolvimento - Full-stack",
      name: "Richard Severo",
      org: "UFCSPA",
      photo: "/team/richard.jpg",
      lattesUrl: "http://lattes.cnpq.br/7295170153919926",
    },
    {
      role: "Assistente de Desenvolvimento - Full-stack",
      name: "Henry Peitz",
      org: "UFRGS",
      photo: "/team/henry.jpg",
      lattesUrl: "http://lattes.cnpq.br/1990877257984244",
    },
    {
      role: "Assistente de Desenvolvimento - Blockchain",
      name: "Bruno Beal Neves",
      org: "PUC-RS",
      photo: "/team/bruno.jpg",
      lattesUrl: "https://lattes.cnpq.br/6524632513849301",
    },
    {
      role: "Assistente de Desenvolvimento - IA",
      name: "Lucas Telles da Silva",
      org: "UFRGS",
      photo: "/team/lucas.jpg",
      lattesUrl: "https://lattes.cnpq.br/4626605288331671",
    },
  ],
};

export const partnersSection = {
  kicker: "Parcerias",
  title: "Instituições participantes",
  items: [
    {
      name: "UFCSPA",
      description:
        "A Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA) é a instituição coordenadora do projeto, responsável pela visão do produto, definição de trilhas formativas, desenvolvimento web, validação de casos de uso e integração com o ecossistema educacional.",
      logo: ufcspaLogo,
      logoClassName: "h-20 w-auto",
    },
    {
      name: "UFRGS",
      description:
        "A Universidade Federal do Rio Grande do Sul (UFRGs) contribui com expertise em desenvolvimento de software, inteligência artificial, blockchain e gerenciamento de infraestrutura.",
      logo: ufrgsLogo,
      logoClassName: "h-16 w-auto",
    },
    {
      name: "IFRS",
      description:
        "O Instituto Federal do Rio Grande do Sul (IFRS) - Campus Porto Alegre contribui com o desenvolvimento de soluções baseadas em blockchain e a aplicação da plataforma em diferentes níveis educacionais.",
      logo: ifrsLogo,
      logoClassName: "h-24 w-auto",
    },
    {
      name: "UFSC Joinville",
      description:
        "A Universidade Federal de Santa Catarina (UFSC) - Campus Joinville atua no desenvolvimento tecnológico da plataforma, incluindo inteligência artificial, extração de informações de documentos e trilhas de formação.",
      logo: ufscLogo,
      logoClassName: "h-24 w-auto",
    },

    {
      name: "RNP",
      description:
        "A Rede Nacional de Pesquisa (RNP) provê apoio técnico e fomento por meio do PD&I de Serviços Avançados para Educação.",
      logo: rnpLogo,
      logoClassName: "h-24 w-auto",
    },
  ],
};

export const fundingSection = {
  kicker: "Apoio institucional",
  title: "Projeto financiado pela RNP",
  items: [
    {
      name: "RNP",
      description:
        "O EduValida é desenvolvido com apoio da Rede Nacional de Ensino e Pesquisa (RNP), por meio do Programa de Pesquisa, Desenvolvimento e Inovação (PD&I) de Serviços Avançados para Educação.",
      logo: "/logo-rnp.png",
      logoClassName: "h-16 w-auto",
    },
  ],
};

export const roadmapSection = {
  id: "roadmap",
  kicker: "Roadmap",
  title: "Principais Marcos (Julho de 2026 a Junho de 2027)",
  items: [
    "Mapeamento de requisitos e definição das trilhas formativas.",
    "Construção da arquitetura e dos ambientes de experimentação.",
    "Desenvolvimento dos serviços de validação e emissão.",
    "Entrega do MVP com microcertificações verificáveis.",
    "Pilotos e validação com instituições parceiras.",
    "Preparação para integração ao ecossistema RNP.",
  ],
};

export const newsSection = {
  id: "noticias",
  kicker: "Notícias",
  title: "Notícias",
  emptyTitle: "Novidades em breve",
  emptyDescription:
    "As atualizações oficiais do GT-EduValida serão publicadas nesta página.",
  items: [
    {
      date: "Julho/2026",
      text:
        "O GT-EduValida realizou sua reunião de kick-off na UFCSPA, marcando oficialmente o início das atividades do projeto. O encontro reuniu representantes das instituições parceiras para apresentar os objetivos, alinhar o planejamento dos próximos meses e discutir as primeiras ações para o desenvolvimento da plataforma nacional de emissão, validação e verificação de microcertificações interoperáveis.",
      image: "/noticias/kickoff.jpeg", // Foto do kick-off
      //href: "#",
      //linkLabel: "Leia mais",
    },
  ],
};

export const footerContent = {
  title: "GT-EduValida",
  description:
    "Plataforma nacional para emissão, validação e verificação de microcertificações educacionais.",
};
