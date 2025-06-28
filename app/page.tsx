import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  Star,
  Shield,
  Users,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Settings,
  Video,
  Camera,
  Edit,
  Share2,
  Eye,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-4 bg-[#fa4f00] text-white">
        Webinuxs Limited Demo. For buy please contact with <Link href="https://webinuxs.com/" className="underline">
          Webinuxs Team</Link>.
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">vimeo</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Product
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Solutions
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Resources
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Watch
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700">
                Log in
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Your videos,
                <br />
                your way
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Make, manage, and share videos that drive action. From small businesses to global enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Start for free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Watch demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                <div className="aspect-video bg-gray-700 rounded flex items-center justify-center mb-4">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>0:00 / 2:34</span>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>HD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">ADOBE</div>
            <div className="text-2xl font-bold">nike</div>
            <div className="text-2xl font-bold">buzzfeed</div>
            <div className="text-2xl font-bold">spotify</div>
            <div className="text-2xl font-bold">LG</div>
            <div className="text-2xl font-bold">Bloomberg</div>
            <div className="text-2xl font-bold">xfinity</div>
            <div className="text-2xl font-bold">DELL</div>
            <div className="text-2xl font-bold">HULU</div>
            <div className="text-2xl font-bold">salesforce</div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The platform that powers your video strategy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <Video className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Host live events and webinars</h3>
                <p className="text-gray-300">
                  Connect with your audience through interactive live streaming experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Create and edit anywhere</h3>
                <p className="text-gray-300">Professional video creation tools accessible from any device.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Manage everything</h3>
                <p className="text-gray-300">Comprehensive video management and analytics dashboard.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <Share2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Share and collaborate</h3>
                <p className="text-gray-300">Seamless sharing and collaboration tools for teams.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Track performance</h3>
                <p className="text-gray-300">Detailed analytics and performance tracking for all your videos.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Deliver fast playback</h3>
                <p className="text-gray-300">Lightning-fast video delivery with global CDN infrastructure.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A video solution perfect for everyone</h2>
            <p className="text-xl text-gray-600">
              Whether you're just getting started or managing enterprise-level video needs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Upload in minutes</h3>
                  <p className="text-gray-600">Drag and drop your videos for instant upload and processing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Customize your player</h3>
                  <p className="text-gray-600">Brand your video player to match your company's look and feel.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Share anywhere</h3>
                  <p className="text-gray-600">Embed videos on your website or share across social platforms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Track engagement</h3>
                  <p className="text-gray-600">
                    Get detailed insights on how your audience interacts with your content.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Collaborate seamlessly</h3>
                  <p className="text-gray-600">Work together with your team using built-in collaboration tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What customers are saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The video quality and streaming performance is exceptional. Our audience engagement has increased
                  significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Easy to use platform with powerful features. The analytics help us understand our audience better."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-gray-500">Content Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional video hosting solution that scales with our business needs. Highly recommended."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">AI that takes your videos to the next level</h2>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to create, edit, and optimize your video content
                automatically.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Automatic video enhancement and optimization</span>
                </li>
                <li className="flex items-center">
                  <Edit className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Smart editing suggestions and auto-cuts</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>AI-powered captions and translations</span>
                </li>
              </ul>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                Explore AI features
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                <div className="aspect-video bg-gray-700 rounded flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">AI Processing...</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Enhancement</span>
                    <span className="text-cyan-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise security and scale</h2>
            <p className="text-xl text-gray-600">
              Built for organizations that need the highest levels of security and performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-600">Enterprise-grade security standards and compliance</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Privacy</h3>
              <p className="text-gray-600">Granular privacy controls and access management</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
              <p className="text-gray-600">Lightning-fast delivery worldwide</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Management</h3>
              <p className="text-gray-600">Advanced user roles and permissions</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Detailed insights and reporting</p>
            </div>
            <div className="text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">API Integration</h3>
              <p className="text-gray-600">Seamless integration with your workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Video Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
            <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
              <div className="text-center">
                <Play className="w-24 h-24 text-white mx-auto mb-4" />
                <p className="text-white text-lg">Watch our platform in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join a thriving community of the world's greatest storytellers</h2>
            <p className="text-xl text-gray-300">
              Connect with creators, share your work, and get inspired by amazing content from around the globe
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-800 rounded-lg relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">{i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Explore community
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Discover the latest from Vimeo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Video marketing trends for 2024</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the latest trends and strategies that will shape video marketing in the coming year.
                  </p>
                  <Button variant="outline">Read more</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Creating engaging video content</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the secrets to creating video content that captures attention and drives engagement.
                  </p>
                  <Button variant="outline">Read more</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get started for free</h2>
          <p className="text-xl mb-8">Join millions of creators who trust our platform for their video needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start free trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">vimeo</div>
              <p className="text-gray-300 mb-6">The world's leading video platform for creators and businesses.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Vimeo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
