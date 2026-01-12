import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Mock blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Trader Trap: Why Sourcing 'Manufacturer-Grade Quality' Means Partnering with an Expert",
    excerpt: "Don't get caught in the 'trader trap.' Learn the real difference between standard export plastics and true 'manufacturer-grade quality.' Discover how our polymer expertise guarantees a more durable, reliable, and profitable product for your business.",
    date: "September 15, 2024",
    category: "Manufacturing Excellence",
    content: `
      <h2>Blog Post:</h2>
      
      <p>In the world of global sourcing, "quality" is the most important—and most overused—word you'll find.</p>
      
      <p>Every exporter, every trader, and every online catalogue promises it. But what does it really mean? For many B2B importers, "quality" is a gamble. You see a picture, you agree on a price, and you hope for the best, only to be disappointed by inconsistent shipments, high defect rates, and brittle products that tarnish your brand's reputation.</p>
      
      <p>This is what we call the "Trader Trap"—partnering with a company that only moves boxes, rather than one that truly understands the product inside.</p>
      
      <p>If you want to build a reliable, long-term business, you need to stop sourcing from traders and start partnering with experts. You need to demand Manufacturer-Grade Quality.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>What Does "Manufacturer-Grade Quality" Actually Mean? Demystifying the Buzzword.</h2>
      
      <p>As a company with a 30-year family legacy in polymer manufacturing, we can tell you that "manufacturer-grade quality" is not just a marketing term. It's a verifiable standard that impacts everything from product durability to your company's bottom line.</p>
      
      <p>For distributors and retailers, the difference between a generic product and a manufacturer-grade one is the difference between short-term sales and long-term brand reputation. True manufacturer-grade quality isn't just about aesthetics; it's built on three core, scientific principles.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h3>1. It Starts with the Science: The Foundation in the Polymer Itself</h3>
      
      <p>This is the most critical factor, often invisible in the final product but fundamental to its performance. A trader sees "plastic." We see polymer science.</p>
      
      <div class="bg-gray-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">100% Virgin Polymers:</h4>
        <p>For products that demand maximum strength, color vibrancy, and a flawless finish (like premium furniture or food-contact items), using 100% virgin polymer is non-negotiable. It provides the highest possible molecular integrity, ensuring consistent performance and a premium feel.</p>
      </div>
      
      <div class="bg-gray-50 border-l-4 border-green-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">High-Grade Recycled Polymers:</h4>
        <p>This is where our expertise becomes your greatest asset. "High-grade" means the material has been sourced, cleaned, and re-processed with such precision that it retains incredible strength and performance. It's not just about being "green"—it's about offering exceptional value without compromising on durability.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h3>2. It's in the Process: The Precision of Engineering & Finish</h3>
      
      <p>How a product is made is just as important as what it's made from. Manufacturer-grade quality is visibly and tangibly evident in the engineering.</p>
      
      <div class="bg-gray-50 border-l-4 border-purple-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Mould Precision:</h4>
        <p>This translates to no rough edges, no weak seams, and perfect uniformity from the first item to the ten-thousandth. This level of consistency is crucial for your brand's perceived quality.</p>
      </div>
      
      <div class="bg-gray-50 border-l-4 border-purple-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Structural Integrity:</h4>
        <p>The product is designed from the ground up to handle real-world stress. A manufacturer-grade chair has reinforced support in critical areas; a bucket has a handle engineered not to snap under a full load.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h3>3. It's About Performance: Verifiable Durability & Safety</h3>
      
      <p>This is the final test. A low-quality item might look good straight out of the box, but it will fail in the real world. Manufacturer-grade means it's built to last and safe to use.</p>
      
      <div class="bg-gray-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">UV Resistance:</h4>
        <p>The color won't fade, and the material won't become brittle after six months in the sun.</p>
      </div>
      
      <div class="bg-gray-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Load Bearing:</h4>
        <p>The product is rigorously tested to withstand the weight and stress it was designed for, not just to meet a minimum standard.</p>
      </div>
      
      <div class="bg-gray-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Material Safety:</h4>
        <p>The plastics are certified non-toxic and, where applicable, food-safe, providing peace of mind for you and your customers.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Our Unique Advantage: The "Manufacturer's DNA"</h2>
      
      <p>At Noble Homeware, we don't just sell plastic homewares. We grew up making the polymers they're made from. This is our core differentiator.</p>
      
      <p>When you partner with us, you are bypassing the "Trader Trap." You are gaining direct access to decades of manufacturing expertise embedded in our company's DNA.</p>
      
      <p>When we inspect a product for your order, we're not just looking at the surface. We are seeing its entire history—from the chemical composition of the granules to the temperature of the mould it was formed in.</p>
      
      <p>We can spot an inferior polymer blend that will lead to premature cracking. We can identify a poor cooling process that will result in a 10% breakage rate during shipping. This intrinsic knowledge is what we build into every product we source and ship.</p>
      
      <p>This "manufacturer's DNA" is our promise to you. It's how we ensure that every single item, whether it's a premium virgin polymer chair or a high-value recycled tub, meets a verifiable standard of excellence.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Don't Just Source a Product. Partner with an Expert.</h2>
      
      <p>Ready to build a more reliable, profitable, and high-quality supply chain? Move beyond vague promises and invest in verifiable quality.</p>
      
      <p>Contact the specialists at Noble Homeware today. Let's discuss how our manufacturer-grade approach can strengthen your product lineup and protect your brand.</p>
    `,
    author: "Manufacturing Team",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Stop Paying the 'Trader Tax': How Our Direct-from-Source Model Maximizes Your Margins",
    excerpt: "Don't let hidden markups eat your profits. Learn how Noble Homeware's 'direct-from-source' pricing for B2B plastic homewares cuts out the middlemen, giving you a powerful, sustainable cost advantage.",
    date: "August 5, 2024",
    category: "Pricing Strategy",
    content: `
      <h2>Blog Post:</h2>
      
      <p>In B2B importing, your profit margin is everything. You know the final retail price your market can handle, so your entire business hinges on securing the best possible landed cost.</p>
      
      <p>And yet, so often, pricing is a "black box." You get quotes from multiple traders, and they're all over the place. You're left to wonder: How much of this price is the actual product, and how much is just… markup?</p>
      
      <p>This hidden, layered cost is what we call the "Trader Tax"—the premium you pay for inefficiency. It's the price of a bloated supply chain, and it's silently eating your margins.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>The Problem: The Typical, Bloated Export Supply Chain</h2>
      
      <p>For most B2B buyers, the sourcing chain looks something like this:</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <p class="font-semibold text-gray-900">Factory —> Manufacturer's Distributor —–> Regional Exporter (Trader) —–> You</p>
      </div>
      
      <p>At every single arrow, a new margin is added. The trader you're speaking with has to pay their markup on top of the distributor's markup. They have no control over the base cost, so their only option is to add their percentage and pass the inflation on to you.</p>
      
      <p>This model is inefficient, opaque, and expensive. There is a better way.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>The Noble Homeware Advantage: A Straighter Line to the Source</h2>
      
      <p>Our business model was designed to destroy the "Trader Tax."</p>
      
      <p>We are not a typical exporter. Our family's 30-year legacy is in polymer manufacturing—we are the experts who have been supplying the raw, high-grade recycled materials to other plastic good manufacturers for decades.</p>
      
      <p>This "manufacturer's DNA" fundamentally changes the equation. We have deep, generational relationships at the source. We understand the true cost of raw materials, energy, and production in a way no simple trader ever could.</p>
      
      <p>Our supply chain is cleaner and more direct:</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p class="font-semibold text-gray-900">Raw Material Expertise ——> Our Manufacturing Partners —–> You</p>
      </div>
      
      <p>By cutting out the layers of middlemen, we eliminate their markups. This isn't a "limited-time discount"—it's a permanent, structural pricing advantage built into our very business model.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>What Does a "Direct-from-Source" Advantage Mean for You?</h2>
      
      <p>This model translates directly into tangible, bottom-line benefits for your business:</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Highly Competitive B2B Pricing:</h4>
        <p>The most obvious benefit. By eliminating the "Trader Tax," our quotes are more competitive, giving you more room for profit on every container you import.</p>
      </div>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Unbeatable Value:</h4>
        <p>This is the critical difference. Because we are experts in quality, we don't use our cost advantage to sell you a cheaper, inferior product. We use it to sell you a superior, manufacturer-grade product at a price that simple traders can't touch.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Price Stability & Transparency:</h4>
        <p>When you work with a trader, any market shift in raw material costs is amplified by their markup. Our pricing is more stable. Because we are so close to the source, we can better predict cost fluctuations and have transparent conversations with our partners about the why behind a price.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Stop Paying for Inefficiency</h2>
      
      <p>Your B2B partner should be an asset, not just a cost. They should be adding value, not just a markup.</p>
      
      <p>When you partner with Noble Homeware, you're not just buying plastic homewares. You are investing in a smarter, more efficient, and more profitable supply chain. You are leveraging our family's manufacturing legacy to gain a direct-from-source pricing advantage.</p>
    `,
    author: "Pricing Team",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Stop Juggling Suppliers. How Our 'Complete Sourcing Solution' Simplifies Your Business",
    excerpt: "Tired of managing multiple suppliers, freight forwarders, and designers? Discover how Noble Homeware's 'complete sourcing solution'—from 250+ products to full white-label manufacturing and logistics—streamlines your supply chain.",
    date: "June 20, 2024",
    category: "Sourcing Strategy",
    content: `
      <h2>Blog Post:</h2>
      
      <p>Let's be honest: sourcing internationally is a complex, fragmented, and often frustrating job.</p>
      
      <p>Your business may need plastic furniture, kitchenware, and bathroom accessories. That's three different suppliers. You need to verify the quality of all three. You need to coordinate three separate production timelines, three quality assurance checks, and three different sets of paperwork.</p>
      
      <p>Then, you need a freight forwarder to consolidate all of it.</p>
      
      <p>You spend 90% of your time managing logistics and only 10% growing your business.</p>
      
      <p>This is the chaos of a fragmented supply chain. What if you could eliminate it with a single partnership? What if you had one partner who could handle it all?</p>
      
      <p>That is what we mean by a "Complete Sourcing Solution." It's not just a sales pitch; it's a fundamentally smarter, more efficient, and more profitable way to do business.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>What is a "Complete Sourcing Solution?"</h2>
      
      <p>A complete sourcing solution means your partner operates as an extension of your own company—an expert procurement office, design studio, and logistics team, all in one.</p>
      
      <p>It's built on three pillars that must work together seamlessly:</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold text-gray-900 mb-2">Product Breadth: A vast, multi-category portfolio.</p>
      </div>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p class="font-semibold text-gray-900 mb-2">Product Depth: The ability to customize and create new products.</p>
      </div>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
        <p class="font-semibold text-gray-900 mb-2">Flawless Execution: End-to-end logistics and quality assurance.</p>
      </div>
      
      <p>Here is how we deliver on all three.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>1. The Portfolio: Your One-Stop Shop (Over 250+ Products)</h2>
      
      <p>Why manage five suppliers when you only need one?</p>
      
      <p>The foundation of our solution is our extensive product portfolio. With over 250 high-quality products across 7 major categories—including Furniture, Kitchenware, Bathroom & Cleaning, Garden, Kids World, and Industrial Storage—we are your one-stop shop.</p>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Consolidate Your Containers:</h4>
        <p>Mix and match product categories in a single order. Stop paying for half-empty containers of just chairs or just buckets.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Simplify Your Invoicing:</h4>
        <p>One partner, one order, one invoice, one point of contact.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Ensure Brand Consistency:</h4>
        <p>Get a consistent level of manufacturer-grade quality across your entire product range.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>2. The Customization: Your Brand, Our Manufacturing (White-Label)</h2>
      
      <p>This is where we separate ourselves from simple traders. What happens when you need a product in a custom color? Or want to put your brand's logo on it?</p>
      
      <p>A typical trader has to go ask their factory, who may or may not be able to do it.</p>
      
      <p>We, on the other hand, are manufacturing experts. Our "Complete Sourcing Solution" includes a complete White-Label & Custom Manufacturing Service.</p>
      
      <p>We are your R&D and design partner. Whether you want to put your brand on our existing products or work with our team to design a new, proprietary item for your market, we have the expertise to make it happen. You don't need to find a separate design firm and a separate factory. You just need us.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>3. The Execution: Your Team on the Ground in India</h2>
      
      <p>Sourcing products is only half the battle. Getting them to your port, correct and on time, is the other half.</p>
      
      <p>Our solution includes a dedicated, professional logistics team that manages the entire process.</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Rigorous Q.A.:</h4>
        <p>Our "manufacturer's DNA" means we conduct multi-stage quality checks, inspecting everything from polymer blends to structural integrity.</p>
      </div>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Secure Packaging:</h4>
        <p>We use export-grade materials and custom packaging solutions to ensure your products arrive safe and shelf-ready.</p>
      </div>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Flawless Documentation:</h4>
        <p>We manage all customs paperwork, bills of lading, and compliance documents so you don't have to.</p>
      </div>
      
      <p>We handle the complexity so you can focus on the one thing that matters: selling your products.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Stop Sourcing. Start Partnering.</h2>
      
      <p>Your job is to grow your brand. Our job is to provide you with the high-quality products to do it, without the headache.</p>
      
      <p>By combining an extensive portfolio, deep customization capabilities, and flawless logistics, we offer a single, reliable, and powerful partnership.</p>
      
      <p>Ready to simplify your supply chain? Contact Noble Homeware today and let's build your complete sourcing solution.</p>
    `,
    author: "Sourcing Team",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "Beyond the Checklist: What Our 'Manufacturer DNA' Quality Assurance Really Means",
    excerpt: "Tired of defective shipments? A trader's Q.A. is just a visual guess. See how Noble Homeware's 'Manufacturer DNA' Q.A. inspects plastic homewares from the molecule up, protecting your profits.",
    date: "May 10, 2024",
    category: "Quality Assurance",
    content: `
      <h2>Blog Post:</h2>
      
      <p>It's the moment of truth for every importer. A 40-foot container arrives, the seal is broken, and you get that small pit in your stomach. Will this shipment be perfect? Or will 10% of the goods be cracked, brittle, or the wrong color?</p>
      
      <p>For most B2B buyers, this is a gamble. Why? Because you're relying on what we call "Trader Q.A."</p>
      
      <p>"Trader Q.A." is a visual checklist. Someone at a factory, with no real technical background, walks down a line and glances at the products. Is it the right shape? Yes. Is it the right color? Yes. Is it visibly broken? No.</p>
      
      <p>Check, check, check.</p>
      
      <p>The problem is, this superficial check misses 99% of what actually causes a product to fail. It can't spot a brittle chair that will snap in a month. It can't identify a food container made from a non-food-safe polymer.</p>
      
      <p>It's a guess. And it's a guess you're paying for.</p>
      
      <p>Now, let's talk about "Manufacturer DNA" Quality Assurance. This is what we do. It's not a checklist; it's an interrogation.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Our Advantage: We Don't Just See the Product. We See the Process.</h2>
      
      <p>Our family's 30-year legacy in polymer manufacturing gives us an advantage our competitors simply cannot have. We don't just see a plastic chair; we see the raw granules it was made from, the temperature of the mould, and the speed of the cooling process.</p>
      
      <p>Our Q.A. process is rigorous because our knowledge is deep. Here's what we see that others miss:</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>1. We Inspect the Polymer First</h2>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <p class="font-semibold text-gray-900">A Trader Sees: A blue granule.</p>
      </div>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p class="font-semibold text-gray-900">We See: A recycled polymer blend with a low-melt flow index and potential contamination. We know before it's even moulded that this material will result in a brittle, weak product. We reject the raw material itself, not just the finished goods.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>2. We Analyze the "Invisible" Flaws</h2>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <p class="font-semibold text-gray-900">A Trader Sees: A shiny, finished tub.</p>
      </div>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p class="font-semibold text-gray-900">We See: "Sink marks" from improper cooling pressure. We see "flow lines" from an injection temperature that was too low. We know these aren't just "cosmetic" issues—they are stress points that will become cracks the first time a customer uses the product.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>3. We Understand Structural Integrity</h2>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <p class="font-semibold text-gray-900">A Trader Sees: A plastic stool.</p>
      </div>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p class="font-semibold text-gray-900">We See: A design where the support ribs are too thin for the intended load. We know from decades of experience that this design will fail. We work with our manufacturing partners to re-tool and reinforce the design before it ever becomes your problem.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>What Does "Manufacturer DNA" Q.A. Mean for Your Business?</h2>
      
      <p>This is not just about getting "better" products. This is about protecting your entire business.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Drastically Lower Defect Rates:</h4>
        <p>By catching flaws at the raw material and design stage, we ensure your defect rate is near zero. You sell what you pay for.</p>
      </div>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Higher Profitability:</h4>
        <p>Every defective item you can't sell is pure-profit-loss. Our Q.A. process directly protects your bottom line.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Total Brand Protection:</h4>
        <p>When your customer buys a product with your name on it, it has to work. Our Q.A. ensures you're building a reputation for reliability, not returns.</p>
      </div>
      
      <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Peace of Mind:</h4>
        <p>Stop the "container gamble." When you get a shipment from Noble Homeware, you can open the doors with confidence, knowing it was inspected by a team with a manufacturer's obsession for quality.</p>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Don't just check a box. Guarantee your quality.</h2>
      
      <p>Ready to partner with an expert who sees what others miss? Contact Noble Homeware and let our "Manufacturer DNA" work for you.</p>
    `,
    author: "QA Team",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Importer's Nightmare: Why We Treat Logistics as Our Final Quality Check",
    excerpt: "Stop the anxiety of international shipping. Noble Homeware's 'Seamless Global Logistics' means we act as your dedicated operations team, managing all documentation, packaging, and on-time delivery.",
    date: "March 25, 2024",
    category: "Global Logistics",
    content: `
      <h2>Blog Post:</h2>
      
      <p>You've done it. You've researched, vetted your partner, negotiated a price, and placed a significant order. Your money has been wired.</p>
      
      <p>And now, the 30-day "black box" of anxiety begins.</p>
      
      <p>Where is your shipment? Is it on the water? Is the paperwork correct? Will it get held up in customs for three weeks over a mis-typed HS code? Did they package it correctly, or will you open the container to find a pallet of cracked, unsellable goods?</p>
      
      <p>This is the importer's nightmare. It's where most export partnerships fail.</p>
      
      <p>For many exporters, the job is "done" once the sale is made. Logistics is just "shipping"—an afterthought to be handed off to the cheapest third-party forwarder.</p>
      
      <p>At Noble Homeware, we believe something different. We believe that logistics isn't just shipping. It is the final, most critical stage of our quality assurance process.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>The "Manufacturer's Mindset" vs. "Trader Logistics"</h2>
      
      <p>A simple trader coordinates. They make a few calls and hope for the best.</p>
      
      <p>A partner with a "manufacturer's DNA" manages. We are obsessed with process, precision, and systems. We built our family's 30-year legacy on getting details right. We apply that exact same obsessive mindset to logistics.</p>
      
      <p>We don't just "hand off" your order. We act as your dedicated operations team on the ground in India.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>What "Seamless Logistics" Actually Looks Like</h2>
      
      <p>"Seamless" isn't a buzzword. It's a process. It's a series of crucial, non-negotiable steps that we manage in-house.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>1. Secure, Export-Grade Packaging</h2>
      
      <p>Our quality assurance doesn't stop at the factory door. We know plastics. We know a poorly stacked pallet will cause flexing and breakage. We know a thin box will be crushed in transit. Our team ensures every order is packaged in high-grade, export-strength materials, specifically designed to withstand the rigors of a trans-oceanic journey.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Key Packaging Features:</h4>
        <ul class="list-disc list-inside text-gray-700">
          <li>High-grade export-strength materials</li>
          <li>Proper stacking and weight distribution</li>
          <li>Custom packaging solutions for product protection</li>
          <li>Moisture and impact resistance</li>
        </ul>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>2. Flawless, "Get-it-Right-the-First-Time" Documentation</h2>
      
      <p>This is where 90% of costly delays happen. A single error on a Bill of Lading, Certificate of Origin, or commercial invoice can stop your container dead at the port. Our dedicated export team manages all customs compliance and documentation with a manufacturer's precision. We don't just fill out forms; we ensure they are 100% accurate, compliant, and prepared for a smooth, fast customs clearance.</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Documentation Excellence:</h4>
        <ul class="list-disc list-inside text-gray-700">
          <li>100% accurate Bills of Lading</li>
          <li>Proper Certificates of Origin</li>
          <li>Compliant commercial invoices</li>
          <li>HS code verification and optimization</li>
          <li>Customs clearance preparation</li>
        </ul>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>3. End-to-End, Proactive Management</h2>
      
      <p>We are your single point of contact. From the moment your container is sealed at our facility to the moment it arrives at your designated port, we are actively managing its journey. We work with premium, reliable shipping lines and provide you with clear, proactive updates. You'll never have to wonder where your order is.</p>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
        <h4 class="font-semibold text-gray-900 mb-2">Proactive Management Features:</h4>
        <ul class="list-disc list-inside text-gray-700">
          <li>Single point of contact</li>
          <li>Premium shipping line partnerships</li>
          <li>Real-time tracking and updates</li>
          <li>Proactive issue resolution</li>
          <li>Clear communication throughout the journey</li>
        </ul>
      </div>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Your Job is to Grow. Ours is to Get it There.</h2>
      
      <p>Your focus should be on selling your products, not on chasing container numbers or fighting with customs brokers.</p>
      
      <p>When you partner with Noble Homeware, you are buying more than just high-quality plastic homewares. You are buying peace of mind. You are buying a process. You are trusting a team that is just as obsessed with the details of a packing list as we are with the molecular structure of a polymer.</p>
      
      <hr class="my-8 border-gray-200" />
      
      <h2>Don't gamble with your supply chain.</h2>
      
      <p>Partner with Noble Homeware and experience what truly seamless, on-time global logistics feels like.</p>
    `,
    author: "Logistics Team",
    readTime: "8 min read"
  }
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: slugify(post.title),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const isNumericId = /^\d+$/.test(params.id);
  const post = isNumericId
    ? blogPosts.find((p) => p.id === parseInt(params.id))
    : blogPosts.find((p) => slugify(p.title) === params.id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const isNumericId = /^\d+$/.test(params.id);
  const post = isNumericId
    ? blogPosts.find((p) => p.id === parseInt(params.id))
    : blogPosts.find((p) => slugify(p.title) === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar isSticky={false} />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-600 text-sm mb-8">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
