import { Award, BookOpen, CheckCircle2, GraduationCap, School } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const technicalSkills = [
    { name: "HTML", image: "/img/html.png" },
    { name: "CSS", image: "/img/css.jpeg" },
    { name: "C++", image: "/img/c++logo.jpg" },
    { name: "Javascript", image: "/img/js.webp" },
    { name: "NextJS", image: "/img/next.png" },
    { name: "React", image: "/img/react.png" },
    { name: "Python", image: "/img/pyLogo.png" },
    { name: "Java", image: "/img/java.jpg" },
  ]

  const education = [
    {
      level: "B.Tech",
      institution: "National Institute of Technology (NIT) Agartala",
      year: "2022 - 2026",
      marks: "8.15 CGPA",
      details: "Electrical Engineering",
    },
    {
      level: "Senior Secondary",
      institution: "Sant Kabir Inter College",
      year: "2018 - 2019",
      marks: "92.17%",
      details: "Science",
    },
    {
      level: "Secondary",
      institution: "Sant Kabir Inter College",
      year: "2020 - 2021",
      marks: "81.8%",
      details: "Science",
    },
  ]

  const achievements = [
    "Software Developer & Web Developer",
    "Attained highest rating of 1711 on Leetcode",
    "Attained highest rating of 1174 on Codeforces.",
    "Solved 800+ DSA problems across different coding platform",
    "Professional Skills: Algorithms and Data Structures, Object Oriented Programming-OOPs",
  ]

  return (
    <section id="skills" className="py-16 md:py-24 container-fluid">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills & Education</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Expertise & Background</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical skills, educational background, and achievements.
            </p>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-12 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 border rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-3 rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
                  <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="w-10 h-10 object-contain" />
                </div>
                <span className="font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 animate-fade-in animate-delay-300">
          <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.level}
                className="border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <CardHeader className="pb-2">
                  {edu.level === "B.Tech" ? (
                    <GraduationCap className="h-12 w-12 text-primary mb-2" />
                  ) : edu.level === "Senior Secondary" ? (
                    <School className="h-12 w-12 text-primary mb-2" />
                  ) : (
                    <BookOpen className="h-12 w-12 text-primary mb-2" />
                  )}
                  <CardTitle>{edu.level}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    <p className="text-sm">{edu.details}</p>
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t">
                      <span className="text-sm font-medium">Percentage/CGPA:</span>
                      <span className="text-sm font-bold text-primary">{edu.marks}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 animate-fade-in animate-delay-500">
          <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Achievements
          </h3>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg border animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
