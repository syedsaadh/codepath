import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { 
  FaReact, 
  FaNodeJs, 
  FaGraduationCap, 
  FaTools,
  FaRocket,
  FaCode,
  FaShoppingCart, 
  FaUserCircle, 
  FaComments, 
  FaChartBar,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { 
  BiCodeAlt, 
  BiData 
} from 'react-icons/bi';
import { 
  SiExpress, 
  SiNestjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3 
} from 'react-icons/si';
import { 
  MdSpeed, 
  MdAutoAwesome 
} from 'react-icons/md';
import { 
  BsLightningChargeFill 
} from 'react-icons/bs';
import ParticleBackground from "./ParticleBackground";

const technologies = [
  {
    name: "Frontend Development",
    icon: <FaReact size={48} />,
    skills: ["HTML", "CSS", "JavaScript"],
    realWorldApps: [
      { 
        name: "Facebook", 
        tech: "React",
        icon: <FaReact size={24} />
      },
      { 
        name: "Instagram", 
        tech: "React",
        icon: <FaReact size={24} />
      },
      { 
        name: "Netflix", 
        tech: "React",
        icon: <FaReact size={24} />
      }
    ],
    skillIcons: {
      "HTML": <SiHtml5 size={20} />,
      "CSS": <SiCss3 size={20} />,
      "JavaScript": <SiJavascript size={20} />
    }
  },
  {
    name: "Backend Development",
    icon: <FaNodeJs size={48} />,
    skills: ["Node.js", "Express", "NestJS"],
    realWorldApps: [
      { 
        name: "PayPal", 
        tech: "Node.js",
        icon: <FaNodeJs size={24} />
      },
      { 
        name: "LinkedIn", 
        tech: "Express",
        icon: <SiExpress size={24} />
      },
      { 
        name: "Adidas", 
        tech: "NestJS",
        icon: <SiNestjs size={24} />
      }
    ],
    skillIcons: {
      "Node.js": <FaNodeJs size={20} />,
      "Express": <SiExpress size={20} />,
      "NestJS": <SiNestjs size={20} />
    }
  }
];

const learningBenefits = [
  {
    title: "Structured Learning Path",
    description: "Follow a carefully designed curriculum that builds your skills progressively",
    icon: <FaGraduationCap size={40} />
  },
  {
    title: "Hands-on Practice",
    description: "Solve real-world problems and build practical applications",
    icon: <FaTools size={40} />
  },
  {
    title: "Industry-Ready Skills",
    description: "Learn technologies used by top companies worldwide",
    icon: <MdSpeed size={40} />
  },
  {
    title: "Interactive Learning",
    description: "Get immediate feedback and track your progress",
    icon: <MdAutoAwesome size={40} />
  }
];

const exampleComponents = [
  {
    title: "E-commerce Components",
    description: "Shopping cart, product catalog, and payment processing",
    frontend: ["React Components", "State Management", "API Integration"],
    backend: ["REST APIs", "Database Models", "Payment Gateway"],
    icon: <FaShoppingCart size={40} />,
    preview: "Shopping cart with real-time updates and secure checkout"
  },
  {
    title: "User Authentication",
    description: "Secure login, registration, and profile management",
    frontend: ["Auth Forms", "Protected Routes", "JWT Handling"],
    backend: ["JWT Auth", "Password Hashing", "Session Management"],
    icon: <FaUserCircle size={40} />,
    preview: "Complete authentication flow with social login"
  },
  {
    title: "Real-time Chat",
    description: "Live messaging system with notifications",
    frontend: ["WebSocket Client", "Message UI", "Notifications"],
    backend: ["WebSocket Server", "Message Queue", "Push Notifications"],
    icon: <FaComments size={40} />,
    preview: "Real-time chat with message history and typing indicators"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization and reporting interface",
    frontend: ["Chart Components", "Data Grid", "Filters"],
    backend: ["Data Aggregation", "Report Generation", "Caching"],
    icon: <FaChartBar size={40} />,
    preview: "Interactive dashboard with real-time data updates"
  }
];

// Add animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Animated Section Component
function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

function LandingPage() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section with Particles */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          bgcolor: "background.default",
          pb: 0,
          pt: 0,
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: "relative", 
            zIndex: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    background: "linear-gradient(45deg, #00bcd4 30%, #62efff 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Master Web Development
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    lineHeight: 1.6,
                    maxWidth: "600px",
                    fontWeight: 400,
                  }}
                >
                  Build modern web applications from scratch to deployment
                  with our structured learning path and hands-on projects.
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    component={Link}
                    to="/dashboard"
                    variant="contained"
                    size="large"
                    endIcon={<FaRocket size={20} />}
                  >
                    Start Learning
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
              {/* Empty grid for particle space */}
            </Grid>
          </Grid>
        </Container>
        <ParticleBackground />
      </Box>

      {/* Benefits Section with Card Animations */}
      <Box sx={{ bgcolor: "background.paper", py: 12 }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 8,
                color: "text.primary",
              }}
            >
              Why Learn With Us?
            </Typography>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {learningBenefits.map((benefit) => (
                <Grid item xs={12} sm={6} md={3} key={benefit.title}>
                  <motion.div variants={scaleIn}>
                    <Card className="glass-morphism">
                      <CardContent>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          mb: 3,
                          position: 'relative'
                        }}>
                          {benefit.icon}
                          <Box
                            sx={{
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
                              opacity: 0.5,
                              filter: 'blur(10px)',
                            }}
                          />
                        </Box>
                        <Typography variant="h6" gutterBottom color="text.primary" align="center">
                          {benefit.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {benefit.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Technologies Section with Interactive Cards */}
      <Box sx={{ bgcolor: "background.default", py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 800, mb: 8, color: "text.primary" }}
          >
            What You'll Learn
          </Typography>
          <Grid container spacing={4}>
            {technologies.map((tech) => (
              <Grid item xs={12} md={6} key={tech.name}>
                <Paper className="glass-morphism" sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: 3,
                    position: 'relative'
                  }}>
                    <Box sx={{ 
                      position: 'relative',
                      p: 2,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.primary.light}10)`,
                      mr: 2
                    }}>
                      {tech.icon}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
                          filter: 'blur(8px)',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ color: "text.primary" }}>
                      {tech.name}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    {tech.skills.map((skill) => (
                      <Chip
                        key={skill}
                        icon={tech.skillIcons[skill]}
                        label={skill}
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          "& .MuiChip-icon": {
                            color: "inherit",
                          },
                          "&:hover": {
                            bgcolor: "primary.dark",
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                  >
                    Companies Using These Technologies:
                  </Typography>
                  <List dense>
                    {tech.realWorldApps.map((app) => (
                      <ListItem key={app.name}>
                        <ListItemIcon 
                          sx={{ 
                            minWidth: 36,
                            color: "primary.light",
                            '& svg': {
                              filter: 'drop-shadow(0 0 8px rgba(0, 188, 212, 0.3))',
                              transition: 'transform 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.1)',
                              }
                            }
                          }}
                        >
                          {app.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={app.name}
                          secondary={`Built with ${app.tech}`}
                          primaryTypographyProps={{ color: "text.primary" }}
                          secondaryTypographyProps={{ color: "text.secondary" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Example Components Section */}
      <Box sx={{ bgcolor: "background.paper", py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 800, 
              mb: 8, 
              color: "text.primary",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 4,
                borderRadius: 2,
                bgcolor: "primary.main",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
              }
            }}
          >
            What You Can Build
          </Typography>
          <Grid container spacing={4}>
            {exampleComponents.map((component) => (
              <Grid item xs={12} md={6} key={component.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Paper 
                    className="glass-morphism" 
                    sx={{ 
                      p: 4, 
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: "absolute",
                        top: 0,
                        right: 0,
                        p: 3,
                        opacity: 0.1,
                        transform: "rotate(15deg) translate(20%, -20%)",
                        "& svg": {
                          fontSize: 100
                        }
                      }}
                    >
                      {component.icon}
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ mr: 2, color: "primary.main" }}>
                        {component.icon}
                      </Box>
                      <Typography variant="h5" sx={{ color: "text.primary" }}>
                        {component.title}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3,
                        color: "text.secondary"
                      }}
                    >
                      {component.description}
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}>
                        <Box sx={{ 
                          p: 2, 
                          bgcolor: "background.default",
                          borderRadius: 1,
                          height: "100%"
                        }}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <FaReact size={16} style={{ marginRight: 8 }} />
                            <Typography variant="subtitle2" color="primary">
                              Frontend
                            </Typography>
                          </Box>
                          <List dense>
                            {component.frontend.map((item, index) => (
                              <ListItem key={index} sx={{ py: 0 }}>
                                <Typography variant="body2" color="text.secondary">
                                  • {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ 
                          p: 2, 
                          bgcolor: "background.default",
                          borderRadius: 1,
                          height: "100%"
                        }}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <FaNodeJs size={16} style={{ marginRight: 8 }} />
                            <Typography variant="subtitle2" color="primary">
                              Backend
                            </Typography>
                          </Box>
                          <List dense>
                            {component.backend.map((item, index) => (
                              <ListItem key={index} sx={{ py: 0 }}>
                                <Typography variant="body2" color="text.secondary">
                                  • {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Grid>
                    </Grid>

                    <Box 
                      sx={{ 
                        mt: "auto",
                        pt: 2,
                        borderTop: 1,
                        borderColor: "divider"
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ 
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        }}
                      >
                        <BsLightningChargeFill />
                        {component.preview}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action with Particle Effect */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "primary.dark",
          color: "primary.contrastText",
          py: 12,
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
              Ready to Start Your Journey?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ mb: 4, opacity: 0.9, maxWidth: "600px", mx: "auto" }}
            >
              Join thousands of developers learning with us
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                component={Link}
                to="/dashboard"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  color: "primary.contrastText",
                  "&:hover": {
                    bgcolor: "background.default",
                  },
                }}
              >
                Get Started Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;
