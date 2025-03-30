# Small Business Loan Underwriting Checklist Generator

This Python script generates a comprehensive Excel-based checklist for small business loan underwriting, designed specifically for CDFIs and mission-driven lenders.

## Overview

The Small Business Loan Underwriting Checklist is a tool to standardize and streamline the loan underwriting process for community development financial institutions and other lenders serving small businesses. This tool helps ensure:

- Consistent evaluation of all loan applications
- Comprehensive risk assessment
- Documentation of the underwriting process
- Compliance with lending policies and procedures
- Standardized decision-making

## Features

The generated Excel workbook includes the following sections:

1. **Borrower Information** - Capture key details about the applicant business
2. **Financial Analysis** - Track required financial documents and calculate important financial ratios
3. **Management Assessment** - Evaluate the business owners, guarantors, and management team
4. **Industry Analysis** - Assess industry-specific risks and market conditions
5. **Collateral Analysis** - Document collateral valuation and coverage
6. **Risk Assessment** - Identify and mitigate key risks
7. **Loan Structure** - Detail the proposed loan terms and conditions
8. **Compliance & Documentation** - Ensure all required documentation is collected
9. **Final Decision** - Record the approval process and final decision
10. **Loan Summary** - Executive summary with key loan information

The checklist includes built-in data validation, formatting, and dropdown menus to make it user-friendly and efficient.

## Requirements

To run this script, you need:

- Python 3.6 or higher
- pandas library: `pip install pandas`
- openpyxl library: `pip install openpyxl`

## Usage

1. Ensure you have all required dependencies installed
2. Run the script using Python:

```bash
python small_business_loan_underwriting_checklist.py
```

This will generate an Excel file named `Small_Business_Loan_Underwriting_Checklist.xlsx` in the same directory.

To specify a different output filename:

```python
from small_business_loan_underwriting_checklist import create_underwriting_checklist

create_underwriting_checklist('CustomName.xlsx')
```

## Customization

The checklist is designed to be customizable to fit your organization's specific underwriting requirements:

- Add or remove items in each section directly in the Excel file
- Modify dropdown options by updating the data validation settings
- Add custom sections or formulas as needed
- Adjust the formatting to match your organization's branding

## Integration with Loan Management Systems

For organizations using loan management software, this checklist can be:

1. Used as a standalone tool for documenting the underwriting process
2. Mapped to your loan management system's data fields
3. Used as a template for developing digital forms in your system

## Benefits for CDFIs

- **Time Savings**: Streamlines the collection and analysis of loan application materials
- **Consistency**: Ensures all applications are evaluated using the same criteria
- **Training**: Provides a valuable tool for training new lending staff
- **Documentation**: Creates a clear record of the underwriting process for regulators and auditors
- **Risk Management**: Improves identification and mitigation of potential risks

## Contact

For questions, customizations, or additional guidance on implementing this tool in your lending workflow, contact:

Email: contact@clarityimpactfinance.com

## License

This tool is provided as a resource for community development financial institutions and mission-driven lenders. You are free to use and modify it for your organization's internal use. 