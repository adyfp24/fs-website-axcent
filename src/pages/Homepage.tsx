import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Code, Cpu, Globe, Award, Briefcase } from 'lucide-react'

export default function HomePage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50">
                        <Code className="w-4 h-4 mr-2" />
                        Software Engineer
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ady Firdaus</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        I build exceptional digital experiences with modern web technologies.
                        Passionate about creating efficient, scalable, and user-friendly applications.
                    </p>
                    <div className="flex gap-4">
                        <Button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                            View Projects
                        </Button>
                        <Button variant="outline" className="rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-100/70 dark:hover:bg-gray-800/70">
                            Download CV
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10"></div>
                        <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-white/20 shadow-2xl">
                            <AvatarImage src="/placeholder-avatar.jpg" alt="Ady Firdaus" />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold">
                                AF
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section id="skills" className="space-y-8">
                <div className="flex items-center gap-4">
                    <Cpu className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Tech Stack</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
                        { name: 'React', icon: '/tech-icons/react.svg' },
                        { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
                        { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
                        { name: 'GraphQL', icon: '/tech-icons/graphql.svg' },
                        { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
                        { name: 'Docker', icon: '/tech-icons/docker.svg' },
                        { name: 'AWS', icon: '/tech-icons/aws.svg' },
                        { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss.svg' },
                        { name: 'Prisma', icon: '/tech-icons/prisma.svg' },
                        { name: 'Git', icon: '/tech-icons/git.svg' },
                        { name: 'Jest', icon: '/tech-icons/jest.svg' },
                    ].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="space-y-8">
                <div className="flex items-center gap-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'E-commerce Platform',
                            description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
                            tags: ['Next.js', 'Node.js', 'Stripe'],
                            image: '/project-placeholder-1.jpg'
                        },
                        {
                            title: 'Task Management App',
                            description: 'Collaborative task management application with real-time updates.',
                            tags: ['React', 'Firebase', 'Material UI'],
                            image: '/project-placeholder-2.jpg'
                        },
                        {
                            title: 'AI Content Generator',
                            description: 'AI-powered content generation tool with custom templates.',
                            tags: ['Python', 'OpenAI', 'FastAPI'],
                            image: '/project-placeholder-3.jpg'
                        },
                    ].map((project, index) => (
                        <div key={index} className="group rounded-xl overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary" className="px-2 py-1 text-xs font-medium">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full rounded-lg border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-100/70 dark:hover:bg-gray-800/70">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="space-y-8">
                <div className="flex items-center gap-4">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Work Experience</h2>
                </div>
                <div className="space-y-6">
                    {[
                        {
                            role: 'Senior Software Engineer',
                            company: 'Tech Innovators Inc.',
                            period: '2021 - Present',
                            description: 'Led frontend development team, implemented microservices architecture, and improved application performance by 40%.',
                            achievements: [
                                'Developed and launched 3 major product features',
                                'Mentored 5 junior developers',
                                'Reduced API response time by 60%'
                            ]
                        },
                        {
                            role: 'Software Developer',
                            company: 'Digital Solutions Co.',
                            period: '2018 - 2021',
                            description: 'Built and maintained web applications for enterprise clients, focusing on scalability and security.',
                            achievements: [
                                'Implemented CI/CD pipeline reducing deployment time',
                                'Designed database architecture for high-traffic application',
                                'Received Employee of the Year award in 2020'
                            ]
                        },
                    ].map((exp, index) => (
                        <div key={index} className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                                </div>
                                <Badge variant="outline" className="px-3 py-1 text-sm font-medium bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 w-fit">
                                    Full-time
                                </Badge>
                            </div>
                            <p className="mt-4">{exp.description}</p>
                            <ul className="mt-4 space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="space-y-8 pb-12">
                <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Awards & Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Best Open Source Contribution',
                            issuer: 'Tech Community Awards',
                            year: '2023',
                            description: 'Recognized for significant contributions to open-source projects in the JavaScript ecosystem.'
                        },
                        {
                            title: 'AWS Certified Solutions Architect',
                            issuer: 'Amazon Web Services',
                            year: '2022',
                            description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.'
                        },
                        {
                            title: 'Hackathon Winner',
                            issuer: 'Global Dev Challenge',
                            year: '2021',
                            description: 'First place in annual coding competition with innovative AI-powered solution.'
                        },
                        {
                            title: 'Employee of the Year',
                            issuer: 'Digital Solutions Co.',
                            year: '2020',
                            description: 'Awarded for exceptional performance and contributions to company projects.'
                        },
                    ].map((award, index) => (
                        <div key={index} className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-100/50 dark:bg-blue-900/20 backdrop-blur-md border border-blue-200/50 dark:border-blue-800/50">
                                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">{award.title}</h3>
                                    <p className="text-muted-foreground">{award.issuer} • {award.year}</p>
                                    <p className="mt-2">{award.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}