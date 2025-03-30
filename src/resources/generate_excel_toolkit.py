"""
CDFI Financial Literacy Excel Toolkit Generator

This script generates the Excel-based financial literacy toolkit with all components.
"""

import os
import sys
import importlib.util
import traceback
from datetime import datetime

def check_dependencies():
    """Check if all required Python dependencies are installed."""
    required_packages = ['openpyxl', 'pandas']
    missing_packages = []
    
    for package in required_packages:
        spec = importlib.util.find_spec(package)
        if spec is None:
            missing_packages.append(package)
    
    if missing_packages:
        print("\n⚠️ Missing dependencies detected:")
        for pkg in missing_packages:
            print(f"  - {pkg}")
        print("\nPlease install the missing dependencies with:")
        print(f"pip install {' '.join(missing_packages)}")
        return False
    
    return True

def check_module_files():
    """Check if all required module files exist."""
    required_files = [
        'financial_literacy_excel_generator.py',
        'financial_literacy_excel_calculators.py',
        'financial_literacy_excel_budget.py',
        'financial_literacy_excel_cashflow.py',
        'financial_literacy_excel_comparison.py'
    ]
    
    missing_files = []
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print("\n⚠️ Missing module files detected:")
        for file in missing_files:
            print(f"  - {file}")
        print("\nPlease ensure all required module files are in the same directory as this script.")
        return False
    
    return True

def generate_excel_toolkit():
    """Generate the Excel toolkit by importing and running the main module."""
    print("\n🔧 Generating CDFI Financial Literacy Excel Toolkit...")
    
    # Ensure we're in the correct directory context
    current_dir = os.path.dirname(os.path.abspath(__file__))
    if current_dir not in sys.path:
        sys.path.append(current_dir)
    
    try:
        # Import the main generator module
        from financial_literacy_excel_generator import main
        
        # Run the generator
        result = main()
        
        if result:
            print("\n✅ Excel toolkit generated successfully!")
            return True
        else:
            print("\n❌ Failed to generate Excel toolkit.")
            return False
            
    except ImportError as e:
        print(f"\n❌ Import error: {str(e)}")
        traceback.print_exc()
        return False
    except Exception as e:
        print(f"\n❌ Unexpected error: {str(e)}")
        traceback.print_exc()
        return False

def main():
    """Main function to run the toolkit generator."""
    print("=" * 80)
    print("🔆 CDFI Financial Literacy Excel Toolkit Generator 🔆")
    print("=" * 80)
    
    # Check dependencies and module files
    if not check_dependencies() or not check_module_files():
        print("\n❌ Prerequisites not met. Exiting.")
        return 1
    
    # Generate the Excel toolkit
    if generate_excel_toolkit():
        print("\nThe toolkit includes:")
        print("  - Loan Terminology Guide")
        print("  - Loan Amortization Calculator")
        print("  - Loan Affordability Analyzer")
        print("  - Business Budget Template")
        print("  - Cash Flow Forecasting Tool")
        print("  - CDFI Comparison Tool")
        
        print("\n📝 Each tool includes instructions, explanations, and visual aids.")
        print("📊 All calculators use Excel formulas for easy customization.")
        
        # Success message with next steps
        print("\n🏁 Next Steps:")
        print("1. Open the generated Excel file in the 'excel_tools_output' directory")
        print("2. Start with the Introduction sheet for an overview")
        print("3. Navigate to specific tools using the tabs at the bottom")
        
        return 0
    else:
        return 1

if __name__ == "__main__":
    sys.exit(main())
