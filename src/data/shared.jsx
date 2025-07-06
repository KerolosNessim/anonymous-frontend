import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


export const links = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About Us'
  },
  {
    href: '/services',
    label: 'Services'
  },
  {
    href: '/blogs',
    label: 'Blog'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  }
]
export const pages = [
  {
    href: '/team',
    label: 'Team'
  },
  {
    href: '/faq',
    label: 'FAQ'
  },
]
export const auth = [
  {
    href: '/signup',
    label: 'Sign Up'
  },
  {
    href: '/login',
    label: 'Login'
  },
]
export const socialIcons = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: <FaFacebook size={20} />
  },
  {
    href: 'https://www.twitter.com/',
    label: 'Twitter',
    icon: <FaTwitter size={20} />
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: <FaInstagram size={20} />
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'Linkedin',
    icon: <FaLinkedinIn size={20} />
  }
]
export const features = [
  "99% accurate AI-driven detection.",
  "MITRE ATT&CK threat mapping.",
  "Fully automated static analysis.",
]
export const aboutCards = [
  {
    icon: "/home/about/about1.svg",
    title: "Predictive Accuracy",
    desc: "Trained on real-world data, our AI sees threats for what they are — not what they’ve done with 99% accuracy."
  },
  {
    icon: "/home/about/about2.svg",
    title: "Deep Insights",
    desc: "We don’t just flag threats — we profile them. Classifying malware families and mapping TTPs for deeper, actionable insight. This intelligence is crucial for proactive defense."
  },
  {
    icon: "/home/about/about3.svg",
    title: "Efficiency and Automation",
    desc: "Anonymous handles the grunt work of malware analysis — so analysts can focus on what truly matters"
  },
  {
    icon: "/home/about/about4.svg",
    title: "Accessibility",
    desc: "Strong security, simple design. Our intuitive interface brings advanced analysis to any team, anywhere — no expertise required."
  },
]
export const services = [
  {
    id: 1,
    img: "/home/services/service1.png",
    icon: "/home/services/serv-1.svg",
    title: "AI-Powered Malware Detection",
    desc: "At our core: an AI-powered engine built for precision. We turn binaries into images and code into language — detecting even the most obfuscated malware.",
    details: `<h2>Our Core Service</h2>
  <p>
    Our core service is a state-of-the-art detection engine that uses artificial intelligence to scan files with unparalleled accuracy. By converting file binaries into image representations for our CNN model and analyzing opcode sequences with our NLP model, we identify even the most heavily obfuscated and packed malware.
  </p>
  <ul class="list-disc pl-6 mt-4 space-y-2">
    <li>Detects known and unknown threats, including zero-day exploits.</li>
    <li>Achieves 99% accuracy in classifying files as malicious or benign.</li>
    <li>Overcomes traditional static analysis limitations through intelligent, adaptive techniques.</li>
  </ul>`
  },
  {
    id: 2,
    img: "/home/services/service2.jpeg",
    icon: "/home/services/serv-2.svg",
    title: "Malware Family Classification",
    desc: `Detection is just the beginning. Anonymous classifies threats by family — Ransomware, Trojan, Spyware — with 87% accuracy, giving you the context to respond smarter.`,
    details: `<h2 >Threat Classification & Contextual Analysis</h2>
  <p>
    Identifying a threat is only the first step. Understanding its origin and behavior is critical. Anonymous classification model accurately assigns detected malware to its specific family (e.g., Ransomware, Trojan, Spyware). With 87% classification accuracy, we provide the context needed for an effective response.
  </p>
  <ul class="list-disc  pl-6 mt-4 space-y-2">
    <li>Helps analysts predict a threat's potential behavior and impact.</li>
    <li>Links the sample to known threat actor groups and campaigns.</li>
    <li>Enables teams to find shared vulnerabilities across related malware samples.</li>
  </ul>`
  },
  {
    id: 3,
    img: "/home/services/service3.jpg",
    icon: "/home/services/serv-3.svg",
    title: "TTP Mapping & Threat Intelligence",
    desc: `Understanding a threat means knowing its moves. Anonymous maps malware capabilities to the MITRE ATT&CK framework — giving you a clear, standardized view of what it can do.`,
    details: ` <h2>Threat Capability Mapping</h2>
  <p>
    To truly understand a threat, you need to know what it can do. Anonymous automatically maps the capabilities of detected malware to the globally recognized MITRE ATT&amp;CK framework. This provides a clear, standardized explanation of the threat's potential actions.
  </p>
  <ul class="list-disc pl-6 mt-4 space-y-2">
    <li>Identifies specific Tactics, Techniques, and Procedures (TTPs).</li>
    <li>Provides actionable intelligence for threat hunting and defense hardening.</li>
    <li>Generates comprehensive, automated reports summarizing the analysis, saving your team critical time and effort.</li>
  </ul>`

  },

]
export const contacts = [
  {
    img: "/home/contact/phone.svg",
    title: "Phone Number",
    desc: "123-456-7890"
  },
  {
    img: "/home/contact/email.svg",
    title: "Email Address",
    desc: "Wt6E0@example.com"
  },
  {
    img: "/home/contact/website.svg",
    title: "website",
    desc: "www.awesomesite.com"
  }
]
export const faqs = [
  {
    question: "What is Anonymous ?",
    answer: "Anonymous  is an advanced, AI-powered platform for malware detection and analysis. It uses static analysis combined with machine learning to identify, classify, and report on malicious software without relying on traditional signatures."
  },
  {
    question: "What types of files can I upload?",
    answer: "Our platform is primarily designed to analyze All files. For optimal performance, we currently recommend file sizes up to 25MB and file type executable, PDFs and Office documents."
  },
  {
    question: "How is this different from a traditional Detection Solution?",
    answer: "Traditional software primarily uses signature-based detection, which is ineffective against new or unknown (zero-day) threats. Anonymous uses AI to analyze a file's structure and code patterns, allowing it to detect threats it has never seen before, without running."
  },
]
export const faqsTwo = [
  {
    question: "What is Malware Family Classification?",
    answer: "It is the process of categorizing malware based on shared characteristics. Knowing the family (e.g., Zeus, WannaCry, Emotet) helps analysts understand its likely behavior, capabilities, and how to best defend against it. "
  },
  {
    question: "What are TTPs?",
    answer: "TTP stands for Tactics, Techniques, and Procedures. It is a framework used to describe the behavior of a threat actor. Our reports map malware to the MITRE ATT&CK framework to show you exactly how it might try to achieve its goals, such as data exfiltration or persistence."
  },
]
export const blogs = [
  {
    id: 1,
    img: "/home/blogs/blog1.webp",
    title: "The End of an Era: Why Traditional Antivirus Can't Keep Up",
    author: "The Anonymous Defenders Team",
    date: "June 29, 2025",
    content: `For decades, the cybersecurity world has relied on a simple principle: identify a threat, create a signature for it, and block it. This signature-based approach, the cornerstone of traditional antivirus software, has served us well. But its time is running out. Today, we face a new breed of threat, one that changes its face with every attack, rendering digital "fingerprints" useless.

The Rise of the Shapeshifter

Modern threats, particularly polymorphic and AI-generated malware, are designed to be moving targets. Unlike traditional malware that uses basic techniques to hide, this new generation can dynamically rewrite its own code every time it executes. Recent research and proof-of-concept models, like those explored by CardinalOps, demonstrate how AI can be used to generate behaviorally identical but structurally unique malware on the fly. Imagine trying to identify a criminal who not only wears a different disguise every day but physically alters their features. That’s the challenge traditional antivirus faces. It’s searching for a fixed signature in a threat that is defined by its ability to never look the same twice.

Beyond the Signature: Detecting Intent

If we can't rely on what malware looks like, we have to focus on what it does. This is the fundamental shift AI brings to cybersecurity. Instead of just matching signatures, AI-driven security systems analyze a file’s structure, behaviors, and patterns to understand its underlying intent.

These advanced systems can identify suspicious behaviors—like a program attempting to log keystrokes or connect to a known malicious server—even if the code itself is completely novel. AI models are trained on vast datasets of both malicious and benign files, learning the subtle characteristics that separate a legitimate application from a digital weapon. They can spot the tell-tale signs of a threat even when it's wrapped in layers of obfuscation, making them uniquely equipped to fight the battles of today and tomorrow. The era of static defense is over; the future is intelligent, adaptive, and predictive.`,
    references: [
      {
        title: "How AI-generated polymorphic malware can bypass EDRs, and how to stop them",
        source: "CardinalOps",
        link: "https://cardinalops.com/blog/polymorphic-ai-malware-detection/"
      },
      {
        title: "A Review on Malware and its Detection using Artificial Intelligence",
        source: "IRJMETS",
        link: "https://www.irjmets.com/uploadedfiles/paper/issue_12_december_2022/32405/final/fin_irjmets1672245996.pdf"
      }
    ]
  },
  {
    id: 2,
    img: "/home/blogs/blog2.webp",
    title: "The Linguistics of Malice: How AI Learns to Read Malware's Intent",
    author: "The Anonymous Defenders Team",
    date: "June 29, 2025",
    content: `What if you could understand the malicious intent of a software program simply by reading it like a language? This is not science fiction; it’s the groundbreaking approach at the heart of modern malware analysis, powered by Natural Language Processing (NLP). Your project, INTERA, is at the forefront of this field, and recent research validates just how powerful this technique is.

From Code to Language

At its core, every computer program is a sequence of instructions, or "opcodes," that tell the processor what to do. NLP models treat these sequences of opcodes as sentences in a unique language. By analyzing the "grammar" and "vocabulary" of this language, an AI can learn to distinguish between the "dialects" of benign software and malicious code. A recent 2025 study published in arXiv explores this very concept, demonstrating that analyzing sequences of code and API calls can lead to incredibly accurate malware classification.

Finding Meaning in the Flow

Researchers are using techniques like n-grams (analyzing sequences of 'n' words, or in this case, opcodes) to capture the unique linguistic footprints of different malware families. Just as a human writer has a distinct style, so too does a malware author. For example:

A sequence of opcodes related to creating a file, encrypting it, and then deleting the original is a strong indicator of ransomware.

A pattern involving capturing keyboard input and sending it over the network is a classic sign of a keylogger.

By training on thousands of examples, NLP models become expert "linguists" capable of reading a program's source code or API call sequence and predicting its narrative arc—is it a helpful tool or a destructive weapon? As confirmed by a comprehensive 2025 review on the topic, this approach moves beyond simple keyword matching to grasp the semantic meaning behind the code, allowing for the detection of even previously unseen threats. It’s a powerful testament to the idea that to beat a threat, you first have to understand what it's trying to say.`,
    references: [
      {
        title: "Malware Classification Leveraging NLP & Machine Learning for Enhanced Accuracy",
        source: "arXiv (Cornell University)",
        link: "https://arxiv.org/abs/2406.16224"
      },
      {
        title: "A Comprehensive Review of Natural Language Processing Techniques for Malware Detection",
        source: "ResearchGate",
        link: "https://www.researchgate.net/publication/381488349_A_Comprehensive_Review_of_Natural_Language_Processing_Techniques_for_Malware_Detection"
      }
    ]
  },
  {
    id: 3,
    img: "/home/blogs/blog3.webp",

    title: "The Next Frontier: Defending Our AI Defenders",
    author: "The Anonymous Defenders Team",
    date: "June 29, 2025",
    content: `Artificial intelligence is revolutionizing cybersecurity, giving us powerful new tools to detect and neutralize threats. But as we build smarter defenders, adversaries are getting smarter, too. Their new target? The AI itself. Welcome to the world of Adversarial Machine Learning (AML), the next great challenge in cybersecurity.

What is Adversarial Machine Learning?

Adversarial Machine Learning is the science of fooling AI models. It involves creating malicious inputs, known as "adversarial examples," that are specifically designed to be misclassified by a machine learning system. In the context of malware detection, an attacker might subtly tweak a malicious file—without changing its harmful function—in such a way that an AI detector confidently labels it as "benign." This is a stealthy and dangerous form of attack because it turns the AI's own logic against itself.

The Cat-and-Mouse Game of AI Security

Recent reviews of AML research highlight a growing arms race between attackers and defenders. Attackers are developing sophisticated techniques to probe AI models for weaknesses and craft these deceptive files. There are two main types of attacks:

Evasion Attacks: This is the most common type, where malware is modified to evade detection at the point of analysis.

Poisoning Attacks: A more insidious attack where the attacker corrupts the AI's training data itself, crippling the model's ability to learn correctly from the very beginning.

In response, defenders are developing robust new strategies. Adversarial Training, for instance, involves intentionally training AI models with these adversarial examples, teaching them to be more resilient and skeptical. Other methods include creating more complex models that are harder to reverse-engineer and developing systems that can detect the subtle statistical fingerprints left behind by adversarial manipulations.

The emergence of AML doesn't mean AI-based security is a failure. On the contrary, it proves its importance. It signifies that AI is so critical to modern defense that it has become the new frontline. The future of cybersecurity won't just be about using AI to find malware, but about building resilient, robust, and self-aware AI that can defend itself.`,
    references: [
      {
        title: "Adversarial Machine Learning in Cybersecurity: A Review on Defending Against AI-Driven Attacks",
        source: "Zenodo",
        link: "https://zenodo.org/records/15718872"
      },
      {
        title: "Adversarial Machine Learning in Cybersecurity: A Comprehensive Review",
        source: "MDPI (Applied Sciences)",
        link: "https://www.mdpi.com/2076-3417/13/20/11494"
      },
      {
        title: "Adversarial Machine Learning in Cybersecurity: Attacks and Defenses",
        source: "ResearchGate",
        link: "https://www.researchgate.net/publication/372728952_Adversarial_Machine_Learning_in_Cybersecurity_Attacks_and_Defenses"
      }
    ]
  }
];
export const team = [
  {
    id: 1,
    img: "/home/team/karim-gomaa.png",
    name: "Karim Gomaa",
    role: "Lead/RE & Malware Analysis ",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 2,
    img: "/home/team/karim-hesham.png",
    name: "Karim Hesham",
    role: "Member/ Deep Learning",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 3,
    img: "/home/team/karim-hashem.png",
    name: "Kareem Wali",
    role: "Member/Back-end",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 4,
    img: "/home/team/abdo.png",
    name: "Abdulrahman Nasr ",
    role: "Member/Business Analysis",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 5,
    img: "/home/team/philo.png",
    name: "Philopater Rafat ",
    role: "Member/Machine Learning",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 6,
    img: "/home/team/kero.png",
    name: "Kerolos Nessim",
    role: "Member/Front-end",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 7,
    img: "/home/team/mina.png",
    name: "Mina Nessim",
    role: "Member/Front-end",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },
  {
    id: 8,
    img: "/home/team/khaled.png",
    name: "Khaled Kayed",
    role: "Member/RE & Malware Analysis",
    links: 
      {
      linkedin: "https://www.linkedin.com/in/karim-hesham-a6105b227",
      github: "https://github.com/KarimHesham23",
      facebook:"https://www.facebook.com/share/19jPqXnXyi/"
      },

  },

]
