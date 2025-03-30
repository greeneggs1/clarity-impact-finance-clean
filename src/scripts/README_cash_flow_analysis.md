# Cash Flow Analysis for Small Business Lending

A comprehensive Python tool for analyzing small business cash flow, designed specifically for CDFI lending and small business loan underwriting.

## Overview

This tool provides a detailed analysis framework for evaluating the financial health of small businesses, with a focus on their ability to service debt. It includes:

- **Uniform Credit Analysis (UCA) Cash Flow**: A standardized approach to calculating cash flow from operations with adjustments for working capital changes.
- **EBITDA Analysis**: Complete calculation of Earnings Before Interest, Taxes, Depreciation, and Amortization, with relevant margins and ratios.
- **Debt Service Coverage Ratio (DSCR)**: Critical metrics for evaluating a business's ability to meet debt obligations.
- **Financial Ratios**: Comprehensive set of profitability, liquidity, and efficiency ratios.

## Excel Integration

The tool is designed with Excel compatibility as a core feature:

1. **Import from Excel**: Load financial data directly from Excel spreadsheets
2. **Export to Excel**: Generate formatted Excel workbooks with multiple worksheets
3. **Excel Templates**: Includes sample templates for standardized financial input
4. **Visualizations**: Creates charts and graphs that are embedded in the Excel output
5. **Formatted Output**: Professional formatting with color-coding, conditional formatting, and proper number formats

## Requirements

- Python 3.7+
- pandas
- numpy
- matplotlib
- openpyxl

Install required packages:

```bash
pip install pandas numpy matplotlib openpyxl
```

## Usage

### Basic Usage

```python
from small_business_cash_flow_analysis import SmallBusinessCashFlowAnalyzer

# Create analyzer instance
analyzer = SmallBusinessCashFlowAnalyzer()

# Option 1: Load data from Excel
analyzer.load_from_excel('company_financials.xlsx')

# Option 2: Use sample data for testing
analyzer.create_sample_data(years=3)

# Run all analysis components
analyzer.run_full_analysis()

# Export results to Excel
analyzer.export_to_excel('cash_flow_analysis_results.xlsx')
```

### Example Excel Structure

The script expects the input Excel file to have the following structure:

#### Income Statement Sheet
| Account | 2023 | 2024 | 2025 |
|---------|------|------|------|
| Revenue | 500,000 | 550,000 | 605,000 |
| Cost of Goods Sold | 300,000 | 330,000 | 363,000 |
| Gross Profit | 200,000 | 220,000 | 242,000 |
| Operating Expenses | 120,000 | 125,000 | 130,000 |
| Depreciation | 15,000 | 16,000 | 17,000 |
| Amortization | 5,000 | 5,000 | 5,000 |
| EBIT | 60,000 | 74,000 | 90,000 |
| Interest Expense | 8,000 | 7,500 | 7,000 |
| Income Before Taxes | 52,000 | 66,500 | 83,000 |
| Income Taxes | 15,600 | 19,950 | 24,900 |
| Net Income | 36,400 | 46,550 | 58,100 |

#### Balance Sheet Sheet
| Account | 2023 | 2024 | 2025 |
|---------|------|------|------|
| Cash | 45,000 | 55,000 | 75,000 |
| Accounts Receivable | 60,000 | 65,000 | 70,000 |
| Inventory | 75,000 | 80,000 | 85,000 |
| Other Current Assets | 10,000 | 11,000 | 12,000 |
| Total Current Assets | 190,000 | 211,000 | 242,000 |
| Property, Plant & Equipment | 250,000 | 270,000 | 290,000 |
| Accumulated Depreciation | -65,000 | -81,000 | -98,000 |
| Net PP&E | 185,000 | 189,000 | 192,000 |
| ... | ... | ... | ... |

## Output Excel Workbook

The generated Excel file includes these worksheets:

1. **Summary**: Key metrics, insights, and lending recommendations
2. **UCA Cash Flow**: Detailed UCA cash flow calculation
3. **EBITDA Analysis**: Complete EBITDA breakdown with margins
4. **Debt Service Coverage**: DSCR and debt metrics
5. **Financial Ratios**: All calculated financial ratios

## For CDFIs and Small Business Lenders

This tool was designed specifically for community development financial institutions and small business lenders to:

- Standardize underwriting processes
- Reduce manual calculation errors
- Provide consistent analysis across different loan applications
- Generate professional reports for loan committees
- Track financial trends across multiple periods

## Customization

The tool can be customized for your organization's specific lending criteria:

- Adjust DSCR thresholds for loan approval
- Modify ratio calculations based on industry standards
- Implement specific UCA cash flow adjustments
- Add industry comparison benchmarks

## Developed by Clarity Impact Finance

This resource is provided by Clarity Impact Finance as part of our commitment to strengthening CDFIs and mission-driven lenders. For more information or custom implementations, please contact us at info@clarityimpactfinance.com. 