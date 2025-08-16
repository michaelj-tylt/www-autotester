'use client';
import { PageLayout } from '@/shared/page-layout';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from '@/shared/hero-landing';
// import { DemoRequestContent } from '@/shared/demo-request';
import { FaWindows, FaApple } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si';
import theme from '@/shared/themes/autotester';

export default function HomePage() {
  return (
    <PageLayout 
      homeUrl="/"
      auroraColors={["#10B981", "#059669", "#0F172A"]}
      pixelColors="#10B981,#34D399,#059669"
      theme={theme}
      appName="AutoTester"
    >
        {/* Page 1: Hero */}
        <div 
          className="min-h-screen w-full flex items-center justify-center relative text-white snap-start"
        >
          <Section isHero={true}>
            <Hero 
              primaryText="AI that takes tests and courses for you."
              secondaryText="Tylt AutoTester handles online exams, certification courses, and compliance training automatically."
              description=""
              audience="professionals"
            />
          </Section>
        </div>

        {/* Page 2: Download */}
        <div id="download" className="min-h-screen w-full flex items-center justify-center relative text-white snap-start">
          <Section>
            {/* Text section - TOP ON MOBILE, RIGHT ON DESKTOP */}
            <div className="flex flex-col lg:flex-row items-start justify-start">
              <div className="flex-1 lg:order-2 text-left mb-8 lg:mb-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Main headline with gradient */}
                  <h1 className="section-heading">
                    <span className="section-gradient-primary">
                      Download
                    </span>
                    <br />
                    <span className="section-gradient-secondary">
                      Tylt AutoTester
                    </span>
                  </h1>
                  
                  {/* Subtitle with elegant styling */}
                  <div className="relative">
                    <p className="section-subheading">
                      Get Started Today
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl mt-4">
                      Docker Desktop required.
                    </p>
                    {/* Subtle accent line */}
                    <div className={`absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                  </div>
                </div>
              </div>

              {/* Download options section - BOTTOM ON MOBILE, LEFT ON DESKTOP */}
              <div className="flex-1 lg:order-1 lg:pr-12 w-full">
                <div className="relative">
                  {/* Subtle glow effect behind download options - hidden on mobile */}
                  <div className={`hidden sm:block absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl p-0 sm:p-6 sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
                    {/* Platform download options */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Windows */}
                      <div id="download-windows" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaWindows size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Windows</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* macOS */}
                      <div id="download-macos" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaApple size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Mac Silicon</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Linux */}
                      <div id="download-linux" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <SiLinux size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Linux</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Release date message */}
                    <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 text-center">
                        <span className={`${theme.classes.primary} font-medium`}>Release Date:</span> Monday, August 18th
                        <br />
                        Binaries for Windows, Mac, and Linux will be available for download.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 3: Problems */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    The Problem with
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Online Training & Exams
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    Mandatory training, certification exams, and compliance courses consume massive amounts of time that could be spent on actual work.
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Problems section */}
            <div className="flex-1">
              <div className="relative">
                {/* Subtle glow effect behind problems */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                  <div className="space-y-6">
                    {/* Problem 1 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Time-Consuming Mandatory Training</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Hours spent watching videos, reading modules, and clicking through courses that could be automated while you focus on real work.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 2 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Repetitive Certification Requirements</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">The same compliance training every year, the same certification exams with minor updates. You already know this material.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 3 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Career Development Bottlenecks</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Want that AWS certification or professional development course? Great - prepare to spend weeks grinding through content you could learn faster elsewhere.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 4 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Opportunity Cost</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Every hour spent on mandatory training is an hour not spent on projects that actually advance your career or create value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Page 4: Solution */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Tylt AutoTester: AI-Powered
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Exam & Course Automation
                  </span>
                </h2>
                <p className="section-subheading  max-w-4xl">
                  Tylt AutoTester can actually READ course content, watch videos, take notes, and complete exams using a real browser - just like you would, but while you sleep.
                </p>
              </div>
              
              {/* Feature cards grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Learns Like You Do</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">AutoTester can read content, watch videos, take notes, and retain information just like a human student. It actually learns the material, not just clicks through.</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Set It and Forget It</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Just tell AutoTester what course or exam to complete. It handles login, navigation, content review, and submission while you work on what matters.</p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Comprehensive Reporting</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Get detailed summaries of what was learned, questions answered correctly, and certification earned. You&apos;ll know the material without spending the time.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 5: Code Example */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Real Exam Automation
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    in Plain English
                  </span>
                </h2>
              </div>
              
              {/* Code comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before AutoTester */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>Before Tylt AutoTester</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">1. Block 3 hours in calendar</p>
                    <p className="text-zinc-300">2. Log into training platform</p>
                    <p className="text-zinc-300">3. Watch 47 video modules</p>
                    <p className="text-zinc-300">4. Take quiz after each module</p>
                    <p className="text-zinc-300">5. Complete final exam</p>
                    <p className="text-zinc-300">6. Print certificate</p>
                    <p className="text-zinc-300">7. Upload to HR system... 😴</p>
                  </div>
                </div>
                
                {/* After AutoTester */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>After Tylt AutoTester</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">Complete my AWS certification course</p>
                    <p className="text-zinc-300">Take all quizzes and pass the final exam</p>
                    <p className="text-zinc-300">Email me a summary of what was covered</p>
                    <p className="text-zinc-300">Save the certificate to my computer</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom text */}
              <div className="text-left">
                <p className="section-subheading  max-w-4xl">
                  Tylt AutoTester handles the rest - logging in, navigating courses, understanding content, and completing assessments automatically.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 6: Pricing */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    Simple, Transparent
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Pricing
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    Our pricing is easy - start free, then pay as you scale
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Pricing section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* For Everyone */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>For Everyone</h3>
                      <div className={`text-2xl font-bold ${theme.classes.primary}`}>
                        Initial month: <span className={`${theme.classes.primary}`}>$0/mo</span>
                      </div>
                      <div className="text-xl font-semibold">
                        After: <span className="text-white">$25/mo</span>
                      </div>
                      <div className="text-base text-zinc-300">
                        + Pay for model usage. Most tests are less than a penny
                      </div>
                      <div className="mt-4">
                        <a 
                          href="#download"
                          className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>Enterprise</h3>
                      <div className={`text-xl font-semibold ${theme.classes.primary}`}>
                        Custom Seat Pricing
                      </div>
                      <div className="text-base text-zinc-300">
                        Tailored pricing for teams and organizations
                      </div>
                      <div className="space-y-2">
                        <div className="text-base text-zinc-400">✓ Volume discounts available</div>
                        <div className="text-base text-zinc-400">✓ On-premises deployment</div>
                        <div className="text-base text-zinc-400">✓ Priority support</div>
                        <div className="text-base text-zinc-400">✓ Custom integrations</div>
                      </div>
                      <div className="text-right">
                        <a 
                          href="mailto:hello@gotylt.com?subject=Enterprise%20Pricing%20Inquiry"
                          className={`${theme.classes.primary} hover:${theme.classes.primaryHover} transition-colors text-sm`}
                        >
                          Contact Sales →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <Footer />
          </Section>
        </div>
    </PageLayout>
  );
}