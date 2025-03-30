"""
Financial Literacy Guide Additional Sections

This script contains the content for the remaining sections of the financial literacy guide.
It's imported by the main financial_literacy_guide_generator.py script.
"""

def get_additional_sections():
    """Return a dictionary with all additional guide sections and their content."""
    
    additional_sections = {
        "Business Banking Essentials": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Proper banking setup is the foundation of good financial management for small businesses."
                },
                {
                    "type": "subheading",
                    "text": "Selecting the Right Business Bank Accounts"
                },
                {
                    "type": "paragraph",
                    "text": "Not all business bank accounts are created equal. Consider these factors when choosing yours:"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Fee structure and minimum balance requirements",
                        "Transaction limits and associated costs",
                        "Availability of branches and ATMs",
                        "Online and mobile banking features",
                        "Integration with accounting software",
                        "Additional services (merchant services, payroll processing, etc.)"
                    ]
                },
                {
                    "type": "subheading",
                    "text": "Separating Personal and Business Finances"
                },
                {
                    "type": "paragraph",
                    "text": "Commingling personal and business finances is one of the most common mistakes small business owners make. This practice creates several problems:"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Makes tax preparation more difficult and time-consuming",
                        "Creates inaccurate financial statements that hamper decision-making",
                        "Increases risk of IRS audits",
                        "Weakens legal liability protection (especially for LLCs and corporations)",
                        "Makes your business less loan-ready"
                    ]
                },
                {
                    "type": "callout",
                    "title": "The Cost of Commingling",
                    "text": "On average, business owners who mix personal and business finances spend 5 additional hours per month on bookkeeping and pay $1,000-$5,000 more in accounting fees annually."
                }
            ],
            "action_steps": [
                "Research and compare business banking options in your area",
                "Open separate accounts for operations, taxes, and savings",
                "Set up automated transfers for tax obligations",
                "Review and minimize bank fees and service charges"
            ],
            "success_story": {
                "title": "Banking Structure Leads to Business Insights",
                "text": "Jason's construction company used a single business checking account for all operations. After setting up separate accounts for payroll, taxes, and project expenses, he discovered that certain project types were significantly more profitable than others—information that was previously hidden in his consolidated account."
            },
            "warning_signs": [
                "Using personal accounts for business transactions",
                "Frequent overdrafts or insufficient funds fees",
                "High transaction fees cutting into profits",
                "Difficulty tracking business expenses due to mixed accounts"
            ],
            "resources": [
                "Business Banking Account Comparison Worksheet",
                "Bank Fee Audit Template",
                "Setting Up Your Business Banking System Guide"
            ]
        },
        
        "Credit Building for Small Businesses": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Strong business credit opens doors to financing opportunities and better terms for your business."
                },
                {
                    "type": "subheading",
                    "text": "How Business Credit Scores Work"
                },
                {
                    "type": "paragraph",
                    "text": "Unlike personal credit scores, business credit scores are:"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Typically scored on a scale of 0-100 (not 300-850)",
                        "Publicly available to anyone willing to pay for access",
                        "Generated by multiple bureaus with different methodologies (Dun & Bradstreet, Experian, Equifax, FICO SBSS)",
                        "Based on payment history, credit utilization, company size, industry risk, and public records"
                    ]
                },
                {
                    "type": "subheading",
                    "text": "Steps to Establish and Improve Business Credit"
                },
                {
                    "type": "table",
                    "headers": ["Step", "Timeline", "Impact"],
                    "rows": [
                        ["Incorporate or form an LLC", "1-2 weeks", "Creates legal separation between personal and business"],
                        ["Get an EIN from the IRS", "Immediate (online)", "Required for business credit files"],
                        ["Open business bank accounts", "1 week", "Establishes financial foundation"],
                        ["Obtain a D-U-N-S Number", "30 days", "Required for D&B credit file"],
                        ["Set up vendor credit lines", "1-3 months", "Initial trade lines reporting to bureaus"],
                        ["Apply for business credit card", "3-6 months after above steps", "Revolving credit access"],
                        ["Monitor and manage credit", "Ongoing", "Maintain positive history"]
                    ]
                }
            ],
            "action_steps": [
                "Check your current business credit reports from all major bureaus",
                "Create a plan to establish missing elements (EIN, D-U-N-S, etc.)",
                "Set up accounts with suppliers that report to credit bureaus",
                "Establish 5-7 trade lines that report to business credit bureaus",
                "Set calendar reminders to pay all bills before due dates"
            ],
            "warning_signs": [
                "Paying business bills late (even a few days)",
                "High credit utilization (over 30% of available credit)",
                "Tax liens or judgments against your business",
                "Too many credit inquiries in a short period"
            ],
            "resources": [
                "Business Credit Building Roadmap",
                "List of Vendors that Report to Business Credit Bureaus",
                "Credit Bureau Dispute Letter Templates"
            ]
        },
        
        "Financial Management Best Practices": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Implementing financial management best practices allows you to make informed decisions, anticipate challenges, and identify opportunities."
                },
                {
                    "type": "subheading",
                    "text": "Developing Effective Bookkeeping Systems"
                },
                {
                    "type": "paragraph",
                    "text": "A well-organized bookkeeping system is the backbone of financial management."
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Choose the right accounting method (cash vs. accrual)",
                        "Select appropriate software for your business size and complexity",
                        "Set up a logical, consistent chart of accounts",
                        "Establish regular bookkeeping routines (daily, weekly, monthly)",
                        "Document procedures for handling transactions"
                    ]
                },
                {
                    "type": "subheading",
                    "text": "Cash Flow Management Techniques"
                },
                {
                    "type": "paragraph",
                    "text": "Cash flow management is about timing—ensuring you have money when you need it."
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Create and regularly update cash flow projections",
                        "Establish clear credit and collection policies",
                        "Negotiate favorable payment terms with vendors",
                        "Build a cash reserve for unexpected expenses",
                        "Monitor accounts receivable aging and follow up promptly"
                    ]
                }
            ],
            "action_steps": [
                "Conduct a financial systems audit to identify gaps",
                "Set up a consistent monthly financial review process",
                "Create a cash flow projection for the next 12 months",
                "Review and update pricing strategy quarterly",
                "Implement an accounts receivable follow-up system"
            ],
            "success_story": {
                "title": "From Reactive to Proactive",
                "text": "After implementing weekly cash flow reviews and monthly financial analysis, Elena's retail shop was able to identify a seasonal slump early enough to run a targeted promotion that increased sales by 15% during what had previously been her slowest quarter."
            },
            "warning_signs": [
                "Bookkeeping that's consistently weeks or months behind",
                "Unpredictable cash flow surprises",
                "Pricing that doesn't reflect true costs",
                "Declining gross margins over time"
            ]
        }
    }
    
    # Add remaining sections following the same pattern
    financial_planning = {
        "Financial Planning and Forecasting": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Financial planning transforms your business from reactive to proactive, allowing you to anticipate challenges and opportunities."
                },
                {
                    "type": "subheading",
                    "text": "Creating Realistic Financial Projections"
                },
                {
                    "type": "paragraph",
                    "text": "Financial projections help you set goals, make plans, and measure progress."
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Start with historical data as your baseline",
                        "Research industry benchmarks for comparison",
                        "Create multiple scenarios (conservative, moderate, optimistic)",
                        "Include detailed assumptions for each projection",
                        "Update projections regularly based on actual results"
                    ]
                }
            ],
            "action_steps": [
                "Create a 12-month budget with monthly targets",
                "Develop three-year financial projections with annual updates",
                "Establish a tax planning meeting with your accountant",
                "Create a savings plan for building 3-6 months of operating expenses"
            ]
        }
    }
    additional_sections.update(financial_planning)
    
    funding = {
        "Funding Your Business": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Understanding the full range of financing options helps you select the right funding solution for your business needs."
                },
                {
                    "type": "subheading",
                    "text": "Understanding Different Financing Options"
                },
                {
                    "type": "table",
                    "headers": ["Financing Type", "Best Used For", "Typical Requirements"],
                    "rows": [
                        ["Term Loans", "Equipment, expansion, refinancing", "2+ years in business, good credit, profitability"],
                        ["Lines of Credit", "Working capital, seasonal needs", "1+ year in business, stable revenues"],
                        ["SBA Loans", "Major investments, acquisitions", "2+ years in business, good credit, collateral"],
                        ["CDFI Loans", "Underserved businesses, startups", "Varies by program, often more flexible"],
                        ["Equipment Financing", "Specific equipment purchases", "Down payment, equipment as collateral"],
                        ["Invoice Factoring", "Immediate cash flow needs", "Creditworthy customers, B2B business model"]
                    ]
                }
            ],
            "action_steps": [
                "Determine your funding needs with specific amounts and timing",
                "Research CDFI loan products available in your area",
                "Prepare a loan readiness checklist based on typical requirements",
                "Create a funding roadmap that aligns with business growth stages"
            ]
        }
    }
    additional_sections.update(funding)
    
    risk_management = {
        "Financial Risk Management": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Every business faces financial risks. Identifying and preparing for them is essential for long-term sustainability."
                },
                {
                    "type": "subheading",
                    "text": "Identifying Financial Vulnerabilities"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Customer concentration (dependence on few customers)",
                        "Supplier concentration or supply chain disruptions",
                        "Seasonal fluctuations and cash flow gaps",
                        "Fixed costs and operational leverage",
                        "Currency or interest rate fluctuations",
                        "Regulatory changes affecting operations"
                    ]
                }
            ],
            "action_steps": [
                "Conduct a financial vulnerability assessment",
                "Review insurance coverage annually with an agent",
                "Establish a debt management and reduction plan",
                "Create contingency plans for economic downturns"
            ]
        }
    }
    additional_sections.update(risk_management)
    
    growth = {
        "Growth and Scaling Finances": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Growth creates new financial complexities that require evolving systems and expertise."
                },
                {
                    "type": "subheading",
                    "text": "Financial Considerations When Expanding"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Working capital needs often increase before revenue",
                        "New locations or channels may have different cost structures",
                        "Systems that worked at smaller scale may break down",
                        "Management bandwidth becomes stretched",
                        "Tax and compliance requirements become more complex",
                        "Financing options and costs shift"
                    ]
                }
            ],
            "action_steps": [
                "Create a detailed growth budget with staged investments",
                "Identify key financial indicators to monitor during expansion",
                "Assess when to bring in professional financial help",
                "Research technology solutions to scale financial operations"
            ]
        }
    }
    additional_sections.update(growth)
    
    decision_making = {
        "Financial Decision-Making Framework": {
            "content": [
                {
                    "type": "paragraph",
                    "text": "Systematic approaches to financial decisions lead to better outcomes and fewer costly mistakes."
                },
                {
                    "type": "subheading",
                    "text": "Evaluating Investment Opportunities"
                },
                {
                    "type": "bullet_list",
                    "items": [
                        "Payback period: How quickly will the investment return its cost?",
                        "Return on investment (ROI): What percentage return can be expected?",
                        "Net present value (NPV): Is the investment worth more than its cost?",
                        "Strategic alignment: Does it advance your business goals?",
                        "Opportunity cost: What else could you do with these resources?",
                        "Risk assessment: What could go wrong and how likely is it?"
                    ]
                }
            ],
            "action_steps": [
                "Create a standard evaluation template for all major investments",
                "Implement a decision-making hierarchy based on financial impact",
                "Document decisions and outcomes to improve future choices",
                "Develop a list of common financial pitfalls and how to avoid them"
            ]
        }
    }
    additional_sections.update(decision_making)
    
    return additional_sections

if __name__ == "__main__":
    # Testing
    sections = get_additional_sections()
    print(f"Generated {len(sections)} additional sections for the financial literacy guide")
    for title in sections.keys():
        print(f"- {title}")
