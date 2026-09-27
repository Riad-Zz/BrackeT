import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils" // Adjusted to standard utils import if needed

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex flex-col gap-4", // Added flex-col and gap-4 to space the list from the content
        className
      )}
      {...props}
    />
  )
}

// Removed the solid background block. Now it acts purely as a flex container for the pills.
const tabsListVariants = cva(
  "group/tabs-list flex w-full flex-wrap items-center gap-2.5", 
  {
    variants: {
      variant: {
        default: "", 
        line: "border-b border-white/10 pb-px", // Optional bottom border if you use the line variant
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Base Layout: Fully rounded pills, generous padding, gap for icons
        "relative inline-flex items-center cursor-pointer justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200",
        
        // Focus & Disabled States
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        
        // Inactive State: Dark glass look matching the image
        "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1] hover:text-gray-200 border border-white/5 hover:border-white/10",
        
        // Active State: Solid white background, dark text (Handles both base-ui data-[selected] and your data-active)
        "data-[selected]:bg-white data-[selected]:text-black data-[selected]:border-white data-[selected]:shadow-sm",
        "data-active:bg-white data-active:text-black data-active:border-white",
        
        // SVG Icon Styling: Properly sizes inline icons
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-colors",
        
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }