"""
Debug script for the Excel generator.
"""

import traceback
import sys
import os

def debug_generator():
    try:
        # Create a simple wrapper around the financial_literacy_workbook creation
        from financial_literacy_excel_generator import create_financial_literacy_workbook
        
        # Create output directory if it doesn't exist
        output_dir = "excel_tools_output"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        print("Creating workbook...")
        wb = create_financial_literacy_workbook()
        
        print("Saving workbook...")
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_file = os.path.join(output_dir, f"CDFI_Financial_Toolkit_{timestamp}.xlsx")
        wb.save(output_file)
        
        print(f"Excel workbook created successfully: {output_file}")
        return 0
    except Exception as e:
        print(f"ERROR: {str(e)}")
        traceback.print_exc()
        return 1

if __name__ == "__main__":
    sys.exit(debug_generator())
