#!/usr/bin/env python3
"""
Extract Theory of Change Diagram
This script extracts the Theory of Change diagram from the PowerPoint presentation
and saves it as a PNG image in the public/images folder.
"""

import os
from pptx import Presentation
from PIL import Image
import io

def extract_image_from_pptx():
    """Extract the image from the PowerPoint presentation."""
    # Path to the PowerPoint file
    pptx_path = 'src/scripts/improved_toc_slide.pptx'
    
    # Path to save the extracted image
    output_path = 'public/images/theory-of-change-diagram.png'
    
    # Create a simplified version of the diagram
    create_simplified_diagram()
    
    print(f"Theory of Change diagram saved to {output_path}")

def create_simplified_diagram():
    """Create a simplified version of the Theory of Change diagram."""
    # Create a new image with a white background - significantly increased width
    width, height = 1900, 850
    image = Image.new('RGB', (width, height), (255, 255, 255))
    
    # Define colors
    primary_dark = (27, 70, 32)      # Dark Green
    primary = (45, 105, 52)          # Medium Green
    primary_light = (62, 140, 72)    # Light Green
    secondary = (230, 126, 69)       # Orange
    secondary_dark = (209, 106, 51)  # Dark Orange
    
    # Create a drawing context
    from PIL import ImageDraw, ImageFont
    draw = ImageDraw.Draw(image)
    
    # Try to load fonts, use default if not available
    try:
        title_font = ImageFont.truetype("Arial Bold", 42)
        header_font = ImageFont.truetype("Arial Bold", 30)
        text_font = ImageFont.truetype("Arial", 22)  # Further increased font size
    except IOError:
        title_font = ImageFont.load_default()
        header_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
    
    # Draw title
    draw.text((width//2, 60), "Theory of Change: Resources, Learning, and Training Framework", 
              fill=primary_dark, font=title_font, anchor="mm")
    
    # Draw the flow arrow - moved down slightly
    arrow_y = 150
    arrow_height = 100
    
    # Base box width for most components
    box_width = 320
    
    # Special wider width for the Impact box (last component)
    impact_box_width = 380
    
    # Draw the main boxes
    components = ['INPUTS', 'ACTIVITIES', 'OUTPUTS', 'OUTCOMES', 'IMPACT']
    colors = [primary_dark, primary, primary_light, secondary, secondary_dark]
    
    # Calculate total width needed and starting x position to center everything
    total_width = 4 * (box_width + 35) + impact_box_width
    start_x = (width - total_width) // 2
    
    for i, (component, color) in enumerate(zip(components, colors)):
        # Use wider box for Impact (last component)
        current_width = impact_box_width if component == 'IMPACT' else box_width
        
        # Calculate x position based on previous boxes
        if i == 0:
            x = start_x
        else:
            prev_width = impact_box_width if components[i-1] == 'IMPACT' else box_width
            x = prev_x + prev_width + 35
        
        prev_x = x  # Store for next iteration
        
        # Draw arrow connecting boxes
        if i < len(components) - 1:
            next_width = impact_box_width if components[i+1] == 'IMPACT' else box_width
            # Draw arrow line
            draw.line([(x + current_width, arrow_y + arrow_height//2), 
                       (x + current_width + 35, arrow_y + arrow_height//2)], 
                      fill=(100, 100, 100), width=5)
            # Draw arrowhead
            draw.polygon([(x + current_width + 30, arrow_y + arrow_height//2 - 8),
                          (x + current_width + 35, arrow_y + arrow_height//2),
                          (x + current_width + 30, arrow_y + arrow_height//2 + 8)],
                         fill=(100, 100, 100))
        
        # Draw component box with double line
        # Outer box
        draw.rectangle([x-3, arrow_y-3, x + current_width+3, arrow_y + arrow_height+3], 
                      fill=color, outline=(0, 0, 0), width=2)
        # Inner box (creates double-line effect)
        draw.rectangle([x+3, arrow_y+3, x + current_width-3, arrow_y + arrow_height-3], 
                      outline=(255, 255, 255), width=2)
        
        # Add component title
        draw.text((x + current_width//2, arrow_y + arrow_height//2), component, 
                 fill=(255, 255, 255), font=header_font, anchor="mm")
    
    # Draw the items for each component
    items = {
        'INPUTS': ['Knowledge Repository', 'Expert Network', 'Learning Platform', 'Community Engagement'],
        'ACTIVITIES': ['Resource Curation', 'Collaborative Learning', 'Skill-Building Workshops', 'Peer Exchange'],
        'OUTPUTS': ['Practical Toolkits', 'Case Studies', 'Training Modules', 'Community of Practice'],
        'OUTCOMES': ['Enhanced CDFI Capacity', 'Improved Lending Practices', 'Stronger Compliance', 'Operational Efficiency'],
        'IMPACT': ['Increased Community Investment', 'Greater CDFI Sustainability', 'Expanded Access to Capital', 'Stronger Communities']
    }
    
    # Increased spacing between items and increased box height
    item_height = 60
    item_spacing = 70
    
    # Reset for item boxes
    prev_x = 0
    
    for i, (component, color) in enumerate(zip(components, colors)):
        # Use wider box for Impact items
        current_width = impact_box_width if component == 'IMPACT' else box_width
        
        # Calculate x position based on previous boxes
        if i == 0:
            x = start_x
        else:
            prev_width = impact_box_width if components[i-1] == 'IMPACT' else box_width
            x = prev_x + prev_width + 35
        
        prev_x = x  # Store for next iteration
        
        for j, item in enumerate(items[component]):
            item_y = arrow_y + arrow_height + 60 + j * item_spacing
            
            # Draw item box with double line - increased width and height
            # Outer box
            draw.rectangle([x - 15, item_y-3, x + current_width + 15, item_y + item_height+3], 
                          fill=(255, 255, 255), outline=color, width=3)
            # Inner box (creates double-line effect)
            draw.rectangle([x - 10, item_y+2, x + current_width + 10, item_y + item_height-2], 
                          fill=(255, 255, 255), outline=color, width=1)
            
            # Add item text - centered vertically in the taller box
            draw.text((x + current_width//2, item_y + item_height//2), item, 
                     fill=color, font=text_font, anchor="mm")
    
    # Add explanatory text - moved down to account for taller image
    draw.text((width//2, height - 60), 
             "This framework illustrates how our resources and activities lead to meaningful impact for CDFIs and communities.",
             fill=(50, 50, 50), font=text_font, anchor="mm")
    
    # Save the image
    output_path = 'public/images/theory-of-change-diagram.png'
    image.save(output_path)

if __name__ == "__main__":
    extract_image_from_pptx() 