import { NextResponse } from 'next/server';

const templates = [
  {
    keywords: ['login'],
    jsx: `function LoginForm() {
  return (
    <form className="bg-black p-6 rounded shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Login</h2>
      <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <button className="bg-[var(--neon-blue)] text-black py-2 px-4 rounded w-full font-bold">Submit</button>
    </form>
  );
}`,
    tsx: `import React from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <form className="bg-black p-6 rounded shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Login</h2>
      <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <button className="bg-[var(--neon-blue)] text-black py-2 px-4 rounded w-full font-bold">Submit</button>
    </form>
  );
};

export default LoginForm;`
  },
  {
    keywords: ['register', 'signup', 'sign up'],
    jsx: `function RegisterForm() {
  return (
    <form className="bg-black p-6 rounded shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Register</h2>
      <input type="text" placeholder="Name" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <button className="bg-[var(--neon-blue)] text-black py-2 px-4 rounded w-full font-bold">Sign Up</button>
    </form>
  );
}`,
    tsx: `import React from 'react';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <form className="bg-black p-6 rounded shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Register</h2>
      <input type="text" placeholder="Name" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-full bg-[#18181b] text-[var(--neon-blue)]" />
      <button className="bg-[var(--neon-blue)] text-black py-2 px-4 rounded w-full font-bold">Sign Up</button>
    </form>
  );
};

export default RegisterForm;`
  },
  {
    keywords: ['card'],
    jsx: `function InfoCard() {
  return (
    <div className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 shadow-md max-w-xs mx-auto">
      <img src="https://placehold.co/300x180" alt="Card" className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2 text-[var(--neon-blue)]">Card Title</h3>
      <p className="text-[var(--neon-blue)] mb-4">This is a sample card description. You can customize this card as needed.</p>
      <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold">Action</button>
    </div>
  );
}`,
    tsx: `import React from 'react';

interface InfoCardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageUrl = "https://placehold.co/300x180",
  title = "Card Title",
  description = "This is a sample card description. You can customize this card as needed."
}) => {
  return (
    <div className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 shadow-md max-w-xs mx-auto">
      <img src={imageUrl} alt="Card" className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2 text-[var(--neon-blue)]">{title}</h3>
      <p className="text-[var(--neon-blue)] mb-4">{description}</p>
      <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold">Action</button>
    </div>
  );
};

export default InfoCard;`
  },
  {
    keywords: ['navbar', 'navigation', 'menu'],
    jsx: `function Navbar() {
  return (
    <nav className="bg-black border-b border-[var(--neon-blue)] px-6 py-4 flex justify-between items-center">
      <span className="text-2xl font-bold text-[var(--neon-blue)]">Brand</span>
      <ul className="flex gap-6">
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">Home</a></li>
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">About</a></li>
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}`,
    tsx: `import React from 'react';

interface NavbarProps {
  brand?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brand = "Brand" }) => {
  return (
    <nav className="bg-black border-b border-[var(--neon-blue)] px-6 py-4 flex justify-between items-center">
      <span className="text-2xl font-bold text-[var(--neon-blue)]">{brand}</span>
      <ul className="flex gap-6">
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">Home</a></li>
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">About</a></li>
        <li><a href="#" className="text-[var(--neon-blue)] hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;`
  },
  {
    keywords: ['button'],
    jsx: `function NeonButton() {
  return (
    <button className="bg-[var(--neon-blue)] text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition">Click Me</button>
  );
}`,
    tsx: `import React from 'react';

interface NeonButtonProps {
  label?: string;
  onClick?: () => void;
}

const NeonButton: React.FC<NeonButtonProps> = ({ label = "Click Me", onClick }) => {
  return (
    <button className="bg-[var(--neon-blue)] text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition" onClick={onClick}>{label}</button>
  );
};

export default NeonButton;`
  },
  {
    keywords: ['input', 'field', 'textbox'],
    jsx: `function NeonInput() {
  return (
    <input type="text" placeholder="Type here..." className="p-3 rounded border border-[var(--neon-blue)] bg-[#18181b] text-[var(--neon-blue)] w-full" />
  );
}`,
    tsx: `import React from 'react';

interface NeonInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const NeonInput: React.FC<NeonInputProps> = ({ value, onChange, placeholder = "Type here..." }) => {
  return (
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="p-3 rounded border border-[var(--neon-blue)] bg-[#18181b] text-[var(--neon-blue)] w-full" />
  );
};

export default NeonInput;`
  },
  {
    keywords: ['modal', 'popup', 'dialog'],
    jsx: `function NeonModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[#18181b] border-2 border-[var(--neon-blue)] rounded-lg p-8 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Modal Title</h2>
        <p className="mb-6 text-[var(--neon-blue)]">This is a neon modal dialog. You can put any content here.</p>
        <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold w-full">Close</button>
      </div>
    </div>
  );
}`,
    tsx: `import React from 'react';

interface NeonModalProps {
  title?: string;
  onClose?: () => void;
}

const NeonModal: React.FC<NeonModalProps> = ({ title = "Modal Title", onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[#18181b] border-2 border-[var(--neon-blue)] rounded-lg p-8 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">{title}</h2>
        <p className="mb-6 text-[var(--neon-blue)]">This is a neon modal dialog. You can put any content here.</p>
        <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold w-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NeonModal;`
  },
  {
    keywords: ['table'],
    jsx: `function NeonTable() {
  return (
    <table className="min-w-full bg-black border border-[var(--neon-blue)] rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="px-4 py-2 text-[var(--neon-blue)] border-b border-[var(--neon-blue)]">Name</th>
          <th className="px-4 py-2 text-[var(--neon-blue)] border-b border-[var(--neon-blue)]">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 text-[var(--neon-blue)]">John Doe</td>
          <td className="px-4 py-2 text-[var(--neon-blue)]">john@example.com</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-[var(--neon-blue)]">Jane Smith</td>
          <td className="px-4 py-2 text-[var(--neon-blue)]">jane@example.com</td>
        </tr>
      </tbody>
    </table>
  );
}`,
    tsx: `import React from 'react';

interface NeonTableProps {
  data?: { name: string; email: string }[];
}

const NeonTable: React.FC<NeonTableProps> = ({
  data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ],
}) => {
  return (
    <table className="min-w-full bg-black border border-[var(--neon-blue)] rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="px-4 py-2 text-[var(--neon-blue)] border-b border-[var(--neon-blue)]">Name</th>
          <th className="px-4 py-2 text-[var(--neon-blue)] border-b border-[var(--neon-blue)]">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td className="px-4 py-2 text-[var(--neon-blue)]">{row.name}</td>
            <td className="px-4 py-2 text-[var(--neon-blue)]">{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NeonTable;`
  },
  {
    keywords: ['list', 'todo', 'tasks'],
    jsx: `function NeonList() {
  return (
    <ul className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 max-w-sm mx-auto">
      <li className="mb-2 text-[var(--neon-blue)]">Task 1</li>
      <li className="mb-2 text-[var(--neon-blue)]">Task 2</li>
      <li className="mb-2 text-[var(--neon-blue)]">Task 3</li>
    </ul>
  );
}`,
    tsx: `import React from 'react';

interface NeonListProps {
  items?: string[];
}

const NeonList: React.FC<NeonListProps> = ({ items = ['Task 1', 'Task 2', 'Task 3'] }) => {
  return (
    <ul className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 max-w-sm mx-auto">
      {items.map((item, i) => (
        <li key={i} className="mb-2 text-[var(--neon-blue)]">{item}</li>
      ))}
    </ul>
  );
};

export default NeonList;`
  },
  {
    keywords: ['profile', 'user card', 'avatar'],
    jsx: `function ProfileCard() {
  return (
    <div className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 shadow-md max-w-xs mx-auto flex flex-col items-center">
      <img src="https://placehold.co/100x100" alt="Avatar" className="rounded-full mb-4 border-2 border-[var(--neon-blue)]" />
      <h3 className="text-xl font-bold mb-1 text-[var(--neon-blue)]">Jane Doe</h3>
      <p className="text-[var(--neon-blue)] mb-2">UI Designer</p>
      <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold">Follow</button>
    </div>
  );
}`,
    tsx: `import React from 'react';

interface ProfileCardProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = 'Jane Doe',
  role = 'UI Designer',
  avatarUrl = 'https://placehold.co/100x100',
}) => {
  return (
    <div className="bg-black border border-[var(--neon-blue)] rounded-lg p-6 shadow-md max-w-xs mx-auto flex flex-col items-center">
      <img src={avatarUrl} alt="Avatar" className="rounded-full mb-4 border-2 border-[var(--neon-blue)]" />
      <h3 className="text-xl font-bold mb-1 text-[var(--neon-blue)]">{name}</h3>
      <p className="text-[var(--neon-blue)] mb-2">{role}</p>
      <button className="bg-[var(--neon-blue)] text-black px-4 py-2 rounded font-bold">Follow</button>
    </div>
  );
};

export default ProfileCard;`
  },
  {
    keywords: ['hero', 'landing', 'welcome'],
    jsx: `function HeroSection() {
  return (
    <section className="bg-black text-center py-16 border-b-2 border-[var(--neon-blue)]">
      <h1 className="text-5xl font-extrabold mb-4 text-[var(--neon-blue)]">Welcome to Sketchflow</h1>
      <p className="text-xl mb-8 text-[var(--neon-blue)]">Generate beautiful UIs with neon style instantly.</p>
      <button className="bg-[var(--neon-blue)] text-black px-8 py-4 rounded-lg font-bold text-lg">Get Started</button>
    </section>
  );
}`,
    tsx: `import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Welcome to Sketchflow',
  subtitle = 'Generate beautiful UIs with neon style instantly.',
  buttonText = 'Get Started',
}) => {
  return (
    <section className="bg-black text-center py-16 border-b-2 border-[var(--neon-blue)]">
      <h1 className="text-5xl font-extrabold mb-4 text-[var(--neon-blue)]">{title}</h1>
      <p className="text-xl mb-8 text-[var(--neon-blue)]">{subtitle}</p>
      <button className="bg-[var(--neon-blue)] text-black px-8 py-4 rounded-lg font-bold text-lg">{buttonText}</button>
    </section>
  );
};

export default HeroSection;`
  },
  {
    keywords: ['footer'],
    jsx: `function NeonFooter() {
  return (
    <footer className="bg-black border-t border-[var(--neon-blue)] py-6 text-center">
      <p className="text-[var(--neon-blue)]">&copy; 2024 Sketchflow. All rights reserved.</p>
    </footer>
  );
}`,
    tsx: `import React from 'react';

interface NeonFooterProps {
  copyright?: string;
}

const NeonFooter: React.FC<NeonFooterProps> = ({ copyright = '© 2024 Sketchflow. All rights reserved.' }) => {
  return (
    <footer className="bg-black border-t border-[var(--neon-blue)] py-6 text-center">
      <p className="text-[var(--neon-blue)]">{copyright}</p>
    </footer>
  );
};

export default NeonFooter;`
  },
  {
    keywords: ['sidebar', 'drawer'],
    jsx: `function NeonSidebar() {
  return (
    <aside className="bg-black border-r-2 border-[var(--neon-blue)] h-screen w-64 p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-[var(--neon-blue)]">Menu</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="text-[var(--neon-blue)] hover:underline">Dashboard</a>
        <a href="#" className="text-[var(--neon-blue)] hover:underline">Settings</a>
        <a href="#" className="text-[var(--neon-blue)] hover:underline">Profile</a>
      </nav>
    </aside>
  );
}`,
    tsx: `import React from 'react';

interface NeonSidebarProps {
  menuItems?: string[];
}

const NeonSidebar: React.FC<NeonSidebarProps> = ({ menuItems = ['Dashboard', 'Settings', 'Profile'] }) => {
  return (
    <aside className="bg-black border-r-2 border-[var(--neon-blue)] h-screen w-64 p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-[var(--neon-blue)]">Menu</h2>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, i) => (
          <a key={i} href="#" className="text-[var(--neon-blue)] hover:underline">{item}</a>
        ))}
      </nav>
    </aside>
  );
};

export default NeonSidebar;`
  },
  {
    keywords: ['alert', 'notification', 'message'],
    jsx: `function NeonAlert() {
  return (
    <div className="bg-black border-l-4 border-[var(--neon-blue)] p-4 max-w-md mx-auto rounded shadow">
      <p className="text-[var(--neon-blue)] font-bold">This is a neon alert message!</p>
    </div>
  );
}`,
    tsx: `import React from 'react';

interface NeonAlertProps {
  message?: string;
}

const NeonAlert: React.FC<NeonAlertProps> = ({ message = 'This is a neon alert message!' }) => {
  return (
    <div className="bg-black border-l-4 border-[var(--neon-blue)] p-4 max-w-md mx-auto rounded shadow">
      <p className="text-[var(--neon-blue)] font-bold">{message}</p>
    </div>
  );
};

export default NeonAlert;`
  },
];

export async function POST(request) {
  const { prompt, type = 'jsx' } = await request.json();
  const lowerPrompt = prompt.toLowerCase();

  for (const template of templates) {
    if (template.keywords.some(keyword => lowerPrompt.includes(keyword))) {
      return NextResponse.json({ code: template[type] });
    }
  }

  const fallback = {
    jsx: `function CustomComponent() {
  return (
    <div className="text-[var(--neon-blue)] p-6 rounded border border-[var(--neon-blue)] bg-black">
      <h2 className="text-2xl font-bold mb-2">Custom UI</h2>
      <p>Sorry, I couldn't recognize your prompt. Please try a different description or use keywords like 'login', 'card', 'navbar', 'button', etc.</p>
    </div>
  );
}`,
    tsx: `import React from 'react';

const CustomComponent: React.FC = () => {
  return (
    <div className="text-[var(--neon-blue)] p-6 rounded border border-[var(--neon-blue)] bg-black">
      <h2 className="text-2xl font-bold mb-2">Custom UI</h2>
      <p>Sorry, I couldn't recognize your prompt. Please try a different description or use keywords like 'login', 'card', 'navbar', 'button', etc.</p>
    </div>
  );
};

export default CustomComponent;`
  };
  return NextResponse.json({ code: fallback[type] });
} 