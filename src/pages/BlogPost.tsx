import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import influencerImage from "@/assets/influencer-marketing.jpg";
import contentCreation from "@/assets/content-creation.jpg";
import digitalGrowth from "@/assets/digital-growth.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "psychology-social-media-marketing": {
      id: 1,
      title: "The Psychology of Social Media Marketing",
      excerpt: "Explore how cognitive biases, dopamine loops, and FOMO drive user engagement.",
      image: analyticsImage,
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Psychology",
      content: `
        <p>Understanding the psychology behind social media engagement is crucial for any brand looking to create meaningful connections with their audience. In this comprehensive guide, we'll explore the cognitive mechanisms that drive user behavior on social platforms.</p>

        <h2>The Dopamine-Driven Engagement Loop</h2>
        <p>Social media platforms are designed to trigger dopamine release in users' brains. Every like, comment, and share creates a small rush of satisfaction, encouraging users to return for more. As marketers, we can leverage this by:</p>
        <ul>
          <li>Creating content that encourages immediate interaction</li>
          <li>Using polls, questions, and calls-to-action that prompt engagement</li>
          <li>Timing posts when your audience is most active</li>
          <li>Responding quickly to comments to maintain the engagement loop</li>
        </ul>

        <h2>Fear of Missing Out (FOMO) Marketing</h2>
        <p>FOMO is one of the most powerful psychological drivers in social media. People don't want to feel left out of trends, conversations, or opportunities. Here's how to ethically use FOMO:</p>
        <ul>
          <li>Limited-time offers and flash sales</li>
          <li>Behind-the-scenes content that makes followers feel "in the know"</li>
          <li>User-generated content that showcases community participation</li>
          <li>Live events and real-time interactions</li>
        </ul>

        <h2>Social Proof and Validation</h2>
        <p>Humans are inherently social beings who look to others for validation of their choices. Social media amplifies this tendency through:</p>
        <ul>
          <li>Customer testimonials and reviews</li>
          <li>Influencer partnerships and collaborations</li>
          <li>Showcase of follower count and engagement metrics</li>
          <li>Community building around shared values and interests</li>
        </ul>

        <h2>The Power of Storytelling</h2>
        <p>Our brains are wired to respond to stories. Narrative content is processed differently than factual information, making it more memorable and emotionally impactful. Effective social media storytelling includes:</p>
        <ul>
          <li>Brand origin stories that create emotional connections</li>
          <li>Customer success stories and transformations</li>
          <li>Behind-the-scenes content that humanizes your brand</li>
          <li>Problem-solution narratives that position your product as the hero</li>
        </ul>

        <h2>Cognitive Biases in Social Media</h2>
        <p>Several cognitive biases significantly impact social media behavior:</p>
        <ul>
          <li><strong>Confirmation Bias:</strong> Users seek content that confirms their existing beliefs</li>
          <li><strong>Anchoring Bias:</strong> The first piece of information influences all subsequent judgments</li>
          <li><strong>Recency Effect:</strong> Recent posts have more impact than older content</li>
          <li><strong>Bandwagon Effect:</strong> People follow trends and popular opinions</li>
        </ul>

        <h2>Practical Implementation</h2>
        <p>To apply these psychological principles effectively:</p>
        <ol>
          <li>Audit your current content through a psychological lens</li>
          <li>Test different psychological triggers with A/B testing</li>
          <li>Monitor engagement patterns to understand what resonates</li>
          <li>Always prioritize authenticity over manipulation</li>
          <li>Respect your audience's intelligence and emotions</li>
        </ol>

        <p>Remember, the goal isn't to manipulate your audience but to understand them better and create content that genuinely serves their needs while achieving your business objectives.</p>
      `
    },
    "go-viral-instagram-2025": {
      id: 2,
      title: "How to Go Viral on Instagram: The 2025 Playbook",
      excerpt: "Step-by-step tactics on virality: algorithm signals, trending audios, shareable formats.",
      image: influencerImage,
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Instagram",
      content: `
        <p>Going viral on Instagram isn't just about luck—it's about understanding the algorithm, creating shareable content, and timing your posts perfectly. This comprehensive guide reveals the strategies that actually work in 2025.</p>

        <h2>Understanding the Instagram Algorithm</h2>
        <p>Instagram's algorithm prioritizes content based on several key factors:</p>
        <ul>
          <li><strong>Engagement Rate:</strong> Likes, comments, saves, and shares within the first hour</li>
          <li><strong>Relevance:</strong> How well your content matches user interests</li>
          <li><strong>Relationships:</strong> How users have interacted with your content previously</li>
          <li><strong>Recency:</strong> When the content was posted</li>
          <li><strong>Profile Activity:</strong> How often users engage with your profile</li>
        </ul>

        <h2>The Viral Content Formula</h2>
        <p>Viral content typically follows this pattern:</p>
        <ol>
          <li><strong>Hook (0-3 seconds):</strong> Grab attention immediately</li>
          <li><strong>Value (3-15 seconds):</strong> Deliver on your promise</li>
          <li><strong>Payoff (15-30 seconds):</strong> Surprising or satisfying conclusion</li>
          <li><strong>Call-to-Action:</strong> Encourage engagement</li>
        </ol>

        <h2>Trending Audio Strategy</h2>
        <p>Using trending audio can significantly boost your reach:</p>
        <ul>
          <li>Monitor Instagram's Audio tab for trending sounds</li>
          <li>Use trending audio within 24-48 hours of its peak</li>
          <li>Adapt the audio to your niche and brand voice</li>
          <li>Create original audio that others might use</li>
        </ul>

        <h2>Content Formats That Go Viral</h2>
        <p>Certain content types have higher viral potential:</p>
        <ul>
          <li><strong>Before/After Transformations:</strong> Visual progress stories</li>
          <li><strong>Tutorial/How-To Content:</strong> Quick, actionable tips</li>
          <li><strong>Behind-the-Scenes:</strong> Authentic, unpolished moments</li>
          <li><strong>Relatable Humor:</strong> Content that makes people laugh and share</li>
          <li><strong>Trending Challenges:</strong> Participating in popular challenges</li>
        </ul>

        <h2>Optimal Posting Strategy</h2>
        <p>When and how you post matters:</p>
        <ul>
          <li>Post when your audience is most active (check Insights)</li>
          <li>Use all available features: Reels, Stories, IGTV, Feed posts</li>
          <li>Cross-promote content across different formats</li>
          <li>Engage with comments immediately after posting</li>
        </ul>

        <h2>Hashtag Strategy for Virality</h2>
        <p>Use a mix of hashtag types:</p>
        <ul>
          <li>2-3 trending hashtags (1M+ posts)</li>
          <li>5-7 moderate hashtags (100K-1M posts)</li>
          <li>10-15 niche hashtags (10K-100K posts)</li>
          <li>3-5 branded hashtags unique to your brand</li>
        </ul>

        <h2>Engagement Hacks</h2>
        <p>Boost early engagement with these tactics:</p>
        <ul>
          <li>Ask your most engaged followers to interact within the first hour</li>
          <li>Post in Instagram Stories to drive traffic to your new post</li>
          <li>Use Instagram's "Add Yours" sticker for Stories</li>
          <li>Collaborate with other creators for cross-promotion</li>
        </ul>

        <h2>Content Creation Tips</h2>
        <p>Quality matters as much as strategy:</p>
        <ul>
          <li>Use good lighting and clear audio</li>
          <li>Keep videos under 30 seconds for maximum retention</li>
          <li>Add captions for accessibility</li>
          <li>Create thumb-stopping visuals</li>
          <li>Tell a story in every piece of content</li>
        </ul>

        <p>Remember, going viral should support your broader marketing goals. Focus on creating value for your audience, and virality will follow naturally.</p>
      `
    },
    "top-hooks-attention-reels": {
      id: 3,
      title: "Top Hooks That Instantly Grab Attention on Reels",
      excerpt: "List of 20 proven hooks with examples. Why hooks matter in the first 3 seconds.",
      image: contentCreation,
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Content Strategy",
      content: `
        <p>The first 3 seconds of your Reel determine whether viewers will watch to the end or scroll past. A powerful hook can make the difference between viral content and content that gets lost in the feed.</p>

        <h2>Why Hooks Matter</h2>
        <p>Instagram's algorithm heavily weights the percentage of viewers who watch your entire video. If people scroll away in the first few seconds, your content won't be shown to a wider audience. A strong hook:</p>
        <ul>
          <li>Stops the scroll immediately</li>
          <li>Creates curiosity and anticipation</li>
          <li>Promises value or entertainment</li>
          <li>Encourages viewers to watch until the end</li>
        </ul>

        <h2>20 Proven Hook Formulas</h2>

        <h3>Curiosity-Based Hooks</h3>
        <ol>
          <li><strong>"Stop scrolling if..."</strong> - Creates immediate urgency</li>
          <li><strong>"The secret that..."</strong> - Promises insider knowledge</li>
          <li><strong>"What happens next will..."</strong> - Builds anticipation</li>
          <li><strong>"Nobody talks about..."</strong> - Suggests exclusive information</li>
          <li><strong>"I wish someone told me..."</strong> - Implies valuable advice</li>
        </ol>

        <h3>Problem-Solution Hooks</h3>
        <ol start="6">
          <li><strong>"If you struggle with..."</strong> - Identifies with pain points</li>
          <li><strong>"The reason you're not..."</strong> - Addresses common failures</li>
          <li><strong>"How to [achieve goal] without..."</strong> - Removes barriers</li>
          <li><strong>"The biggest mistake..."</strong> - Warns against errors</li>
          <li><strong>"Why [common belief] is wrong"</strong> - Challenges assumptions</li>
        </ol>

        <h3>Number-Based Hooks</h3>
        <ol start="11">
          <li><strong>"3 things that..."</strong> - Promises quick, digestible content</li>
          <li><strong>"5 signs you..."</strong> - Helps with self-assessment</li>
          <li><strong>"The #1 reason..."</strong> - Suggests the most important factor</li>
          <li><strong>"7 ways to..."</strong> - Offers multiple solutions</li>
        </ol>

        <h3>Story-Based Hooks</h3>
        <ol start="15">
          <li><strong>"Last week I..."</strong> - Personal narrative</li>
          <li><strong>"This changed everything..."</strong> - Transformation story</li>
          <li><strong>"My client just..."</strong> - Success story</li>
          <li><strong>"When I started..."</strong> - Origin story</li>
        </ol>

        <h3>Controversial/Bold Hooks</h3>
        <ol start="19">
          <li><strong>"Unpopular opinion:"</strong> - Signals contrarian viewpoint</li>
          <li><strong>"I'm about to ruin..."</strong> - Promises to challenge beliefs</li>
        </ol>

        <h2>Hook Best Practices</h2>
        <p>To maximize the effectiveness of your hooks:</p>
        <ul>
          <li><strong>Keep it short:</strong> Deliver your hook in 1-2 seconds</li>
          <li><strong>Use text overlay:</strong> Many viewers watch without sound</li>
          <li><strong>Match your energy:</strong> Your delivery should match the hook's intensity</li>
          <li><strong>Deliver on the promise:</strong> Don't clickbait—provide real value</li>
          <li><strong>Test variations:</strong> Try different hooks for the same content</li>
        </ul>

        <h2>Industry-Specific Hook Examples</h2>

        <h3>Fitness/Health</h3>
        <ul>
          <li>"Stop doing [exercise] if you want to [goal]"</li>
          <li>"The nutrition fact that doctors don't tell you"</li>
          <li>"I lost [amount] without [common method]"</li>
        </ul>

        <h3>Business/Entrepreneurship</h3>
        <ul>
          <li>"The business advice that nearly bankrupted me"</li>
          <li>"How I made [amount] while [situation]"</li>
          <li>"The client red flag that saved me [amount]"</li>
        </ul>

        <h3>Lifestyle/Personal Development</h3>
        <ul>
          <li>"The habit that completely changed my life"</li>
          <li>"What I wish I knew at [age]"</li>
          <li>"The mindset shift that [result]"</li>
        </ul>

        <h2>Common Hook Mistakes</h2>
        <p>Avoid these hook pitfalls:</p>
        <ul>
          <li>Taking too long to get to the point</li>
          <li>Using overused phrases that viewers ignore</li>
          <li>Promising more than you can deliver in 30 seconds</li>
          <li>Making the hook longer than the payoff</li>
          <li>Using generic language instead of specific details</li>
        </ul>

        <p>Remember, a great hook is just the beginning. You still need to deliver valuable content that lives up to the promise you made in those crucial first three seconds.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, post]) => ({ ...post, slug: key }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative mb-12 rounded-3xl overflow-hidden">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
              width="896"
              height="384"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="hero-title text-navy mb-6 font-playfair">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-navy">Share:</span>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="p-2">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none font-inter leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'hsl(var(--foreground))'
            }}
          />

          {/* Related Posts */}
          <section className="mt-20 pt-12 border-t border-border">
            <h3 className="text-3xl font-bold text-navy mb-8 font-playfair">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                      <h4 className="text-xl font-bold text-navy mt-3 mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;