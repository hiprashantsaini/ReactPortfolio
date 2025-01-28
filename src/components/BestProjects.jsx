import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import img from "./Dashbord.png";
import img4 from "./EducationSeekersProvider.png";
import img2 from "./Frontend.png";
import img3 from "./LapTopScreen.png";


const BestProjects = () => {
  const projects = [
    {
      title: "NoticeForYou - User Interface",
      description: "A user-friendly notification platform where users can receive real-time alerts, manage preferences, and interact with notifications. Features include customizable notification settings, message threading, and push notifications.",
      image: img2,
      techStack: ["React", "lucide-react", "Tailwind", "Redux","Express","Node.js","mongoDb"],
      links: {
        github: "https://github.com/hiprashantsaini",
        live: "https://noticeforyou.netlify.app/"
      }
    },
    {
      title: "NoticeForYou - Admin Dashboard",
      description: "Comprehensive admin dashboard for managing the notification system. Features include user management, notification broadcasting, analytics, template management, and system monitoring.",
      image: img,
      techStack: ["React", "Lucide-react", "Recharts.js", "Redux","Express","Node.js","mongoDb","JWT"],
      links: {
        github: "https://github.com/hiprashantsaini",
        live: "https://noticeforyou.netlify.app/admin"
      }
    },
    {
      title: "Education Provider and Seekers",
      description: "This a very helpfull applications that provides connetivity between education providers and seekers. It is proving features to connect with each other, communicate with messages.",
      image:img4,
      techStack: ["React", "Tailwind css", "Web sockets", "MongoDb","Lucide-react","Express","Node.js","JWT"],
      links: {
        github: "https://github.com/hiprashantsaini/Educational-Platform",
        live: "https://classroom-web.netlify.app/"
      }
    },
    {
      title: "Advanced Task Manager",
      description: "A powerful task management solution with Kanban boards, team collaboration, and advanced filtering. Includes features like task dependencies, time tracking, and automated workflows.",
      image:img3,
      techStack: ["React", "Tailwind css", "weather api", "Local Storage","Lucide-react","Framer-motion"],
      links: {
        github: "https://github.com/hiprashantsaini/react-todo-weather-app",
        live: "https://taskfullweb.netlify.app/"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  useEffect(()=>{
    document.getElementById('bestProjects').scrollIntoView({ behavior: "smooth" });
  },[]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        id='bestProjects'
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Best Projects
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      sx={{ fontWeight: 'bold' }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.techStack.map((tech) => (
                          <Chip 
                            key={tech}
                            label={tech}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<LaunchIcon />}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default BestProjects;