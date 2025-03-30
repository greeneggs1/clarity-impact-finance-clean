#!/usr/bin/env python3
"""
Financial Literacy Guide Generator Script

This script serves as a simple command-line interface for generating the financial
literacy guides for small businesses. It creates both the complete guide and
individual section guides in Word format.

Usage:
    python generate_financial_guides.py [output_directory]
    
    If no output directory is specified, guides will be created in './guides_output'
"""

import os
import sys
import subprocess
import importlib.util

def check_dependencies():
    """Check if required dependencies are installed."""
    try:
        from docx import Document
        print("✓ python-docx is installed")
    except ImportError:
        print("Installing python-docx...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "python-docx"])
        print("✓ python-docx installed successfully")
    
    try:
        from docxcompose.composer import Composer
        print("✓ docxcompose is installed")
    except ImportError:
        print("Installing docxcompose (for combining documents)...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "docxcompose"])
        print("✓ docxcompose installed successfully")

def main():
    """Main function to run the generator."""
    print("======================================")
    print("Clarity Impact Finance")
    print("Financial Literacy Guide Generator")
    print("======================================")
    
    # Check for dependencies
    print("\nChecking dependencies...")
    check_dependencies()
    
    # Determine output directory
    if len(sys.argv) > 1:
        output_dir = sys.argv[1]
    else:
        output_dir = "guides_output"
    
    print(f"\nGuides will be saved to: {os.path.abspath(output_dir)}")
    
    # Import the guide generator module
    from financial_literacy_guide_generator import main as generate_guides
    
    # Generate the guides
    print("\nGenerating guides...")
    generate_guides()
    
    print("\n======================================")
    print("Guide generation complete!")
    print("======================================")
    print(f"\nYou can find the guides in: {os.path.abspath(output_dir)}")
    print("\nThe complete guide and individual section guides have been created as Word documents.")
    print("You can now use these guides on the Resources section of the Clarity Impact Finance website.")

if __name__ == "__main__":
    main()
