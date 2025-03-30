# Financial Literacy Guide Generator

This directory contains Python scripts that generate comprehensive financial literacy guides for small businesses in Word format. These guides are designed to help businesses qualify for and manage CDFI financing.

## Files Included

- `generate_financial_guides.py`: The main script to run for generating guides
- `financial_literacy_guide_generator.py`: Core functionality for creating guide documents
- `financial_literacy_sections.py`: Content for all guide sections
- `small_business_loan_checklist.py`: Script for generating loan checklists

## Requirements

- Python 3.6+
- python-docx library (automatically installed if missing)
- docxcompose library (automatically installed if missing)

## How to Generate Guides

1. Navigate to this directory in your terminal:
   ```
   cd src/resources
   ```

2. Run the generator script:
   ```
   python generate_financial_guides.py
   ```

3. The guides will be created in the `guides_output` directory:
   - One complete comprehensive guide
   - Individual section guides that can be downloaded separately

## Customization

To customize the guides:

1. Edit the `COMPANY_NAME` and branding colors in `financial_literacy_guide_generator.py`
2. Modify the content in `financial_literacy_sections.py` to update specific sections
3. Add additional resources, worksheets, or templates as needed

## Using the Guides on the Website

The generated Word documents can be added to the Resources section of the Clarity Impact Finance website for users to download.

Recommended approach:
1. Upload the files to your server
2. Create download links in the Resources component
3. Organize the guides by category or topic

## Extending the Guides

To add new sections or content types:
1. Edit the `get_additional_sections()` function in `financial_literacy_sections.py`
2. Follow the existing content structure patterns
3. Regenerate the guides using the generator script

## Support

For questions or issues with these scripts, please contact the development team.
