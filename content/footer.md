# Interactive Hover Footer

## Visual Design
**Animated Text Hover Effect:** A stunning SVG-based text animation that reveals colorful gradients (yellow, red, cyan, purple, green) as visitors move their mouse over the "prarambhx." text. The effect creates a radial gradient mask that follows the cursor, creating an engaging, premium interaction.

**Background Gradient:** Radial gradient backdrop with deep blue tones (#0F0F11 to #3ca2fa) creating an aerospace-tech aesthetic.

**Layout:** Modern footer with 4-column grid (brand, links, resources, contact) that collapses responsively on mobile.

---

# Brand Section

## Logo & Name
**Display:** Heart icon (♥) in cyan (#3ca2fa) + "prarambhx." in white, bold font

## Brand Description
PrarambhX is India's premier drone technology and research organization, specializing in advanced flight controllers, autonomous systems, and comprehensive training programs for the next generation of aerial innovators.

---

# Footer Link Sections

## Company
**Section Heading:** About PrarambhX

**Links:**
- Our Story
- Vision & Mission
- Meet the Team
- Careers (with pulse indicator)
- Partners

## Products & Services
**Section Heading:** What We Build

**Links:**
- Custom Flight Controllers
- Drone Platforms
- Research Projects
- Training Programs
- Consulting Services

## Resources
**Section Heading:** Learn & Explore

**Links:**
- Courses & Workshops
- Documentation
- Blog & Insights
- Publications
- Open Source Projects

## Contact Information
**Section Heading:** Get in Touch

**Contact Details:**
- 📧 **Email:** info@prarambhx.com
- 📞 **Phone:** +91 98765 43210
- 📍 **Location:** Bangalore, Karnataka, India

**Business Hours:**
Mon–Fri, 9:00 AM – 6:00 PM IST

---

# Hover Text Effect

## Large Background Text
**Text:** "prarambhx."
**Position:** Bottom of footer, large scale (30rem height)
**Visibility:** Hidden on mobile, visible on desktop (lg breakpoint)
**Animation:** 
- Stroke dash animation on load (4 second duration)
- Cyan stroke outline (#3ca2fa)
- Gradient reveal on hover with radial mask following cursor
- Smooth color transitions

---

# Social Media Links

## Follow Us
Stay connected for research updates, project announcements, and technical insights.

**Social Platforms:**
- **LinkedIn** - Professional updates and hiring
- **Twitter** - Quick updates and industry news
- **Instagram** - Behind-the-scenes, workshops, drone builds
- **YouTube** - Tutorial videos, flight tests, lectures
- **GitHub** - Open source projects and code repositories

**Icon Style:** Lucide icons with cyan hover effect (#3ca2fa)

---

# Footer Bottom Section

## Copyright
© 2026 PrarambhX Technologies Pvt. Ltd. All rights reserved.

## Legal Links
- Privacy Policy
- Terms of Service
- Cookie Policy
- Refund Policy
- DGCA Compliance

**Style:** Horizontal list with gray text, cyan hover effect

---

# Design Specifications

## Color Palette
- **Primary Brand:** #3ca2fa (Cyan-blue)
- **Background:** #0F0F11 (Deep dark)
- **Text Primary:** #FFFFFF (White)
- **Text Secondary:** #9CA3AF (Gray-400)
- **Hover Gradient:** Yellow → Red → Cyan → Purple → Green

## Typography
- **Brand Name:** 3xl, bold, white
- **Section Headings:** lg, semibold, white
- **Links:** sm, regular, gray → cyan on hover
- **Large Text Effect:** 7xl, bold, Helvetica

## Spacing
- **Container Padding:** p-14 (56px)
- **Grid Gap:** 12 (mobile) → 16 (desktop)
- **Section Spacing:** mb-6 (24px)

## Responsive Behavior
- **Mobile (<768px):** Single column stack, hide large text effect
- **Tablet (768px-1024px):** 2-column grid
- **Desktop (>1024px):** 4-column grid, show large text effect

---

# Interactive Features

## Hover Effects
1. **Link Hover:** Text color changes from gray to cyan (#3ca2fa)
2. **Social Icon Hover:** Icon color animates to cyan
3. **Large Text Hover:** 
   - Radial gradient mask appears
   - Colorful gradient reveals following cursor
   - Smooth 0.5s transition

## Pulse Animation
- **Live Chat link:** Red dot pulse animation indicating availability
- **Background:** Subtle radial gradient animation

---

# Component Integration Notes

**Component Files:**
- `components/ui/hover-footer.tsx` - Main footer component with TextHoverEffect
- Requires `motion` library (Framer Motion fork)
- Uses Lucide React icons

**Dependencies:**
- motion
- lucide-react
- @/lib/utils (cn function)

**Usage:**
```tsx
import HoverFooter from "@/components/ui/hover-footer";

// In layout or page
<HoverFooter />
```

---

# Newsletter Section (Optional Enhancement)

## Email Signup
**Heading:** Stay Updated on Innovation

**Description:** Get monthly updates on new courses, research breakthroughs, drone technology insights, and industry news.

**Form Elements:**
- Email input with placeholder: "your@email.com"
- Subscribe button with cyan background
- Success message: "Thanks for subscribing!"

---

# Call-to-Action Variants

## Primary CTA
Ready to engineer the future? Get in touch today.

## Secondary CTA
Explore our training programs and start building tomorrow's drones.

## Tertiary CTA
Join our research community and push the boundaries of aerial robotics.
