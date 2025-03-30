# CDFI Financial Literacy Excel Module

This directory contains Python scripts that generate a comprehensive Excel-based financial literacy toolkit for users seeking financing from CDFIs (Community Development Financial Institutions). The toolkit is designed to be user-friendly for individuals without a finance background.

## Excel Toolkit Features

The generated Excel workbook includes multiple interactive tools:

1. **Loan Terminology Guide** - Explanations of common loan terms and concepts
2. **Loan Amortization Calculator** - Calculate monthly payments and view payment schedules
3. **Loan Affordability Analyzer** - Determine how much financing you can afford
4. **Business Budget Template** - Create and manage a business budget 
5. **Cash Flow Forecasting Tool** - Project your business's cash flow for 12 months
6. **CDFI Comparison Tool** - Compare financing options from different lenders

Each tool includes detailed instructions, visual aids, and educational content to help users make informed financial decisions.

## Files Included

- `generate_excel_toolkit.py`: Main script to run for generating the Excel toolkit
- `financial_literacy_excel_generator.py`: Core functionality for creating the workbook
- `financial_literacy_excel_calculators.py`: Implementation of loan calculators
- `financial_literacy_excel_budget.py`: Business budget template implementation
- `financial_literacy_excel_cashflow.py`: Cash flow forecasting tool implementation
- `financial_literacy_excel_comparison.py`: CDFI comparison tool implementation

## Requirements

- Python 3.6+
- openpyxl library (for Excel generation)
- pandas library (for data manipulation)

## How to Generate the Excel Toolkit

1. Navigate to this directory in your terminal:
   ```
   cd src/resources
   ```

2. Install required dependencies if not already installed:
   ```
   pip install openpyxl pandas
   ```

3. Run the generator script:
   ```
   python generate_excel_toolkit.py
   ```

4. The Excel toolkit will be created in the `excel_tools_output` directory with a timestamp in the filename

## Using the Excel Toolkit

The toolkit is designed to be self-explanatory:

1. Open the generated Excel file
2. Start with the "Introduction" sheet to understand how to use the toolkit
3. Navigate to specific tools using the tabs at the bottom of the Excel window
4. Enter your information in the light green cells - these are the input cells
5. The results will appear in the light orange cells - these contain formulas
6. Charts and visualizations will update automatically based on your inputs

## Customization

To customize the toolkit for your organization:

1. Edit the `COMPANY_NAME` and color schemes in `financial_literacy_excel_generator.py`
2. Modify the content in any of the module files to update specific calculators or tools
3. Add additional worksheets or tools by creating new functions and updating the generator

## Client Access System

The toolkit references Clarity Impact Finance's secure client access system:

- New users require an invitation code (format: CIF-XXXXX) to register
- Invitation codes are valid for 30 days
- After registration, users log in with email/password
- The admin portal is accessible at `/admin`

## Integration with Website

The Excel toolkit can be offered as a downloadable resource on the Clarity Impact Finance website:

1. Upload the generated Excel file to your server
2. Create a download button or link in the Resources section
3. Consider requiring registration to access the toolkit
4. Provide tutorial videos or walkthroughs for maximum benefit

## Support

For questions or support with this toolkit, contact:
- Email: contact@clarityimpactfinance.com
- Website: www.clarityimpactfinance.com
