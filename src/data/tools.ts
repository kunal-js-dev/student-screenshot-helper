export interface AiTool {
  name: string;
  url: string;
  description: string;
  free?: boolean;
}

export interface ToolCategory {
  id: string;
  title: string;
  colorVar: string;
  icon: string;
  tools: AiTool[];
}

export const categories: ToolCategory[] = [
  {
    id: "chatbots",
    title: "AI Chatbots",
    colorVar: "chatbots",
    icon: "💬",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "Versatile AI assistant by OpenAI", free: true },
      { name: "Claude", url: "https://claude.ai", description: "Thoughtful AI by Anthropic", free: true },
      { name: "DeepSeek", url: "https://chat.deepseek.com", description: "Open-source reasoning model", free: true },
      { name: "Gemini", url: "https://gemini.google.com", description: "Google's multimodal AI", free: true },
      { name: "Grok", url: "https://grok.x.ai", description: "AI by xAI with real-time data" },
      { name: "Meta AI", url: "https://meta.ai", description: "Meta's conversational AI", free: true },
      { name: "MS Copilot", url: "https://copilot.microsoft.com", description: "Microsoft's AI companion", free: true },
      { name: "Perplexity", url: "https://perplexity.ai", description: "AI-powered search engine", free: true },
    ],
  },
  {
    id: "coding",
    title: "AI Coding Assistance",
    colorVar: "coding",
    icon: "💻",
    tools: [
      { name: "Cursor", url: "https://cursor.sh", description: "AI-first code editor", free: true },
      { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer" },
      { name: "Replit", url: "https://replit.com", description: "AI-powered coding platform", free: true },
      { name: "Tabnine", url: "https://tabnine.com", description: "AI code completions", free: true },
      { name: "Coder", url: "https://coder.com", description: "Cloud dev environments" },
      { name: "Copilot", url: "https://copilot.microsoft.com", description: "Microsoft's coding AI" },
      { name: "Askcodi", url: "https://askcodi.com", description: "AI coding assistant", free: true },
    ],
  },
  {
    id: "writing",
    title: "AI Writing",
    colorVar: "writing",
    icon: "✍️",
    tools: [
      { name: "Copy.ai", url: "https://copy.ai", description: "AI copywriting tool", free: true },
      { name: "Grammarly", url: "https://grammarly.com", description: "Writing assistant & grammar checker", free: true },
      { name: "Jasper", url: "https://jasper.ai", description: "AI content creation" },
      { name: "Quarkle", url: "https://quarkle.ai", description: "Academic writing assistant", free: true },
      { name: "JoBot", url: "https://jobot.com", description: "AI resume & cover letter writer", free: true },
    ],
  },
  {
    id: "presentation",
    title: "AI Presentation",
    colorVar: "presentation",
    icon: "📊",
    tools: [
      { name: "Beautiful.AI", url: "https://beautiful.ai", description: "Smart slide design" },
      { name: "Gamma", url: "https://gamma.app", description: "AI presentations & docs", free: true },
      { name: "Pitch", url: "https://pitch.com", description: "Collaborative presentation tool", free: true },
      { name: "Slidesgo", url: "https://slidesgo.com", description: "Free presentation templates", free: true },
      { name: "Tome", url: "https://tome.app", description: "AI-powered storytelling", free: true },
      { name: "PopAI", url: "https://popai.pro", description: "AI presentation maker", free: true },
    ],
  },
  {
    id: "image",
    title: "AI Image Generation",
    colorVar: "image",
    icon: "🎨",
    tools: [
      { name: "DALL·E", url: "https://openai.com/dall-e-3", description: "AI image generation by OpenAI" },
      { name: "Midjourney", url: "https://midjourney.com", description: "High-quality AI art" },
      { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe's generative AI", free: true },
      { name: "Ideogram", url: "https://ideogram.ai", description: "AI with great text rendering", free: true },
      { name: "FLUX", url: "https://flux.ai", description: "Open-source image model", free: true },
      { name: "StableDiffusion", url: "https://stability.ai", description: "Open-source image AI", free: true },
      { name: "Recraft", url: "https://recraft.ai", description: "AI design & illustration", free: true },
    ],
  },
  {
    id: "video",
    title: "AI Video Generation",
    colorVar: "video",
    icon: "🎬",
    tools: [
      { name: "Descript", url: "https://descript.com", description: "AI video & audio editing", free: true },
      { name: "Runway", url: "https://runwayml.com", description: "AI creative video tools", free: true },
      { name: "Heygen", url: "https://heygen.com", description: "AI avatar video creation" },
      { name: "InVideo", url: "https://invideo.io", description: "AI video maker", free: true },
      { name: "Kinga", url: "https://kinga.ai", description: "AI video editing" },
      { name: "LTX Studio", url: "https://ltx.studio", description: "AI filmmaking tool" },
    ],
  },
  {
    id: "email",
    title: "AI Email Assistance",
    colorVar: "email",
    icon: "📧",
    tools: [
      { name: "Clippit.AI", url: "https://clippit.ai", description: "AI email writing" },
      { name: "Friday", url: "https://friday.app", description: "AI email management" },
      { name: "Mailmaestro", url: "https://mailmaestro.ai", description: "AI email drafting" },
      { name: "Shortwave", url: "https://shortwave.com", description: "AI email client", free: true },
      { name: "Superhuman", url: "https://superhuman.com", description: "Fastest email experience" },
    ],
  },
  {
    id: "spreadsheet",
    title: "AI Spreadsheet",
    colorVar: "spreadsheet",
    icon: "📋",
    tools: [
      { name: "Bricks", url: "https://bricks.com", description: "AI-powered spreadsheets" },
      { name: "Formula Bot", url: "https://formulabot.com", description: "AI Excel formula generator", free: true },
      { name: "Gigasheet", url: "https://gigasheet.com", description: "AI big data spreadsheets", free: true },
      { name: "Rows AI", url: "https://rows.com", description: "AI data analysis", free: true },
      { name: "SheetAI", url: "https://sheetai.app", description: "AI in Google Sheets" },
    ],
  },
  {
    id: "meeting",
    title: "AI Meeting Notes",
    colorVar: "meeting",
    icon: "🎤",
    tools: [
      { name: "Otter", url: "https://otter.ai", description: "AI meeting transcription", free: true },
      { name: "Fireflies", url: "https://fireflies.ai", description: "AI notetaker", free: true },
      { name: "Fellow.App", url: "https://fellow.app", description: "AI meeting management" },
      { name: "Fathom", url: "https://fathom.video", description: "Free AI meeting recorder", free: true },
      { name: "Avoma", url: "https://avoma.com", description: "AI meeting intelligence" },
    ],
  },
  {
    id: "workflow",
    title: "AI Workflow Automation",
    colorVar: "workflow",
    icon: "⚡",
    tools: [
      { name: "Zapier", url: "https://zapier.com", description: "Connect your apps", free: true },
      { name: "Make", url: "https://make.com", description: "Visual automation builder", free: true },
      { name: "N8n", url: "https://n8n.io", description: "Open-source automation", free: true },
      { name: "Monday.com", url: "https://monday.com", description: "Work management platform" },
      { name: "Wrike", url: "https://wrike.com", description: "Project management AI" },
    ],
  },
  {
    id: "scheduling",
    title: "AI Scheduling",
    colorVar: "scheduling",
    icon: "📅",
    tools: [
      { name: "Calendly", url: "https://calendly.com", description: "Smart scheduling", free: true },
      { name: "Clockwise", url: "https://clockwise.com", description: "AI calendar optimizer", free: true },
      { name: "Motion", url: "https://usemotion.com", description: "AI task & calendar manager" },
      { name: "ReclaimAI", url: "https://reclaim.ai", description: "AI time management", free: true },
      { name: "Skedda", url: "https://skedda.com", description: "Space scheduling" },
    ],
  },
  {
    id: "design",
    title: "AI Graphic Design",
    colorVar: "design",
    icon: "🎯",
    tools: [
      { name: "Canva", url: "https://canva.com", description: "AI-powered design platform", free: true },
      { name: "Figma", url: "https://figma.com", description: "Collaborative design tool", free: true },
      { name: "Design.com", url: "https://design.com", description: "AI logo & brand design" },
      { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI graphic design", free: true },
      { name: "Uizard", url: "https://uizard.io", description: "AI UI/UX design", free: true },
    ],
  },
];
