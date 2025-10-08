import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogHeader from "@/assets/blog-header.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import influencerImage from "@/assets/influencer-marketing.jpg";

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = [
    {
      id: 1,
      title: "The Psychology of Social Media Marketing",
      excerpt: "Explore how cognitive biases, dopamine loops, and FOMO drive user engagement. Practical insights on applying psychology for brand growth.",
      image: analyticsImage,
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Psychology",
      slug: "psychology-social-media-marketing"
    },
    {
      id: 2,
      title: "How to Go Viral on Instagram: The 2025 Playbook",
      excerpt: "Step-by-step tactics on virality: algorithm signals, trending audios, shareable formats. Case studies of viral posts.",
      image: influencerImage,
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Instagram",
      slug: "go-viral-instagram-2025"
    },
    {
      id: 3,
      title: "Top Hooks That Instantly Grab Attention on Reels",
      excerpt: "List of 20 proven hooks with examples. Why hooks matter in the first 3 seconds and how to craft compelling openings.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Content Strategy",
      slug: "top-hooks-attention-reels"
    },
    {
      id: 4,
      title: "Video Editing Secrets for Social Media Success",
      excerpt: "Beginner-to-pro workflow for editing videos. Tools like CapCut, Premiere Pro, and AI editors for stunning content.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Video",
      slug: "video-editing-secrets"
    },
    {
      id: 5,
      title: "Storytelling in Marketing: How to Make Your Brand Memorable",
      excerpt: "Frameworks for brand storytelling using Hero's Journey and relatable struggles. Examples from global and Indian brands.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Branding",
      slug: "storytelling-marketing"
    },
    {
      id: 6,
      title: "The Future of Social Media in India: Trends for 2025 & Beyond",
      excerpt: "Predictions around short-form video, influencer commerce, regional content. Data-backed forecasts for the Indian market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Trends",
      slug: "future-social-media-india"
    },
    {
      id: 7,
      title: "Neuromarketing: How the Brain Responds to Ads",
      excerpt: "Deep dive into subconscious triggers, colors, sounds, and placements. Application for digital campaigns and consumer psychology.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      date: "2024-01-01",
      readTime: "13 min read",
      category: "Psychology",
      slug: "neuromarketing-brain-ads"
    },
    {
      id: 8,
      title: "How to Build a Personal Brand on Instagram",
      excerpt: "Step-by-step guide for entrepreneurs and influencers. Content pillars, consistency strategies, and audience building.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Personal Branding",
      slug: "build-personal-brand-instagram"
    },
    {
      id: 9,
      title: "The Science of Hashtags and Reach",
      excerpt: "Data-backed strategies for choosing hashtags. Mistakes to avoid and 2025 updates on hashtag relevance and effectiveness.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "Growth",
      slug: "science-hashtags-reach"
    },
    {
      id: 10,
      title: "From Likes to Leads: Converting Engagement into Sales",
      excerpt: "Funnel building on social media. Turning attention into revenue with CTAs, landing pages, and retargeting strategies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "2023-12-22",
      readTime: "14 min read",
      category: "Conversion",
      slug: "likes-to-leads-conversion"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="py-32 section-padding relative overflow-hidden"
        style={{
          backgroundImage: `url(${blogHeader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-primary/80 to-accent/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center ${inView ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <h1 className="hero-title text-white mb-8 font-playfair">
              Insights & <span className="text-gold">Ideas</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto font-inter leading-relaxed">
              Expert insights on social media marketing, digital growth strategies, and the latest trends shaping the industry.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold/30 rounded-full"></div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article 
                  className={`cursor-pointer ${inView ? 'fade-in visible' : 'fade-in'}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    // Featured post spans 2 columns
                    ...(index === 0 && { gridColumn: 'span 2', gridRow: 'span 2' })
                  }}
                >
                  <div className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-[var(--elegant-shadow)] transition-all duration-500 hover:scale-105 h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? 'h-80' : 'h-48'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 ${index === 0 ? 'p-10' : ''}`}>
                      <h3 className={`font-bold text-navy mb-4 font-playfair group-hover:text-primary transition-colors duration-300 ${index === 0 ? 'text-3xl mb-6' : 'text-xl'}`}>
                        {post.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed font-inter mb-6 ${index === 0 ? 'text-lg' : ''}`}>
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="premium-outline-button">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 section-padding bg-gradient-to-r from-navy to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-white mb-6 font-playfair">
            Stay Updated with Latest <span className="text-gold">Insights</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 font-inter">
            Get weekly insights on social media trends, marketing strategies, and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-gold font-inter"
            />
            <button className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;