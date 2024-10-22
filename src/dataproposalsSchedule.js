export const dataproposalsSchedule = [
  {
    "qr_id": "A",
    "qr_level_1_group": "Group Life",
    "children": [
      {
        "qr_id": "A1",
        "qr_level_2_group": "General",
        "children": [
          {
            "qr_id": "A1a",
            "qr_text": "Commission Type",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["commission_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Level",
                "comment": "Standard commission structure."
              },
              "Beta Benefits": {
                "answer": "Tiered",
                "comment": "Commission increases with sales volume."
              },
              "Gamma Group": {
                "answer": "Flat",
                "comment": "Single rate commission for all sales."
              },
              "Delta Coverage": {
                "answer": "Level",
                "comment": "Consistent commission across the board."
              }
            }
          },
          {
            "qr_id": "A1b",
            "qr_text": "Commission %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["commission_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "10%",
                "comment": "Standard commission percentage."
              },
              "Beta Benefits": {
                "answer": "8%",
                "comment": "Lower rate for competitive pricing."
              },
              "Gamma Group": {
                "answer": "12%",
                "comment": "Higher commission for increased incentive."
              },
              "Delta Coverage": {
                "answer": "9%",
                "comment": "Balanced rate for market alignment."
              }
            }
          },
          {
            "qr_id": "A1c",
            "qr_text": "Hourly Req",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["eligibility_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "30 hours",
                "comment": "Minimum hours worked per week for eligibility."
              },
              "Beta Benefits": {
                "answer": "30 hours",
                "comment": "Standard hourly requirement for coverage."
              },
              "Gamma Group": {
                "answer": "30 hours",
                "comment": "Eligibility requires working 30 hours per week."
              },
              "Delta Coverage": {
                "answer": "30 hours",
                "comment": "Set hourly threshold for insurance qualification."
              }
            }
          },
          {
            "qr_id": "A1d",
            "qr_text": "Mortality Type",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["underwriting_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Active",
                "comment": "Covers actively employed individuals."
              },
              "Beta Benefits": {
                "answer": "Active",
                "comment": "Applies to currently working employees."
              },
              "Gamma Group": {
                "answer": "Active",
                "comment": "Coverage for employees who are actively working."
              },
              "Delta Coverage": {
                "answer": "Active",
                "comment": "Insurance for active employees."
              }
            }
          },
          {
            "qr_id": "A1e",
            "qr_text": "Additional Life",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["additional_life_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Available",
                "comment": "Option to purchase additional life insurance."
              },
              "Beta Benefits": {
                "answer": "Offered",
                "comment": "Supplemental life coverage available."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Additional life insurance options provided."
              },
              "Delta Coverage": {
                "answer": "Available",
                "comment": "Offers extra life insurance coverage."
              }
            }
          },
          {
            "qr_id": "A1f",
            "qr_text": "Member Enrollments",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["enrollment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "250 members",
                "comment": "Current number of enrolled members."
              },
              "Beta Benefits": {
                "answer": "300 members",
                "comment": "Total enrollments in the life plan."
              },
              "Gamma Group": {
                "answer": "275 members",
                "comment": "Participants enrolled under current policy."
              },
              "Delta Coverage": {
                "answer": "320 members",
                "comment": "Number of employees enrolled in the plan."
              }
            }
          },
          {
            "qr_id": "A1g",
            "qr_text": "FreeForm Schedule",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["schedule_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Customizable schedule available upon request.",
                "comment": "Tailored schedule to meet employer needs."
              },
              "Beta Benefits": {
                "answer": "Flexible scheduling based on employee roles.",
                "comment": "Designed to fit diverse workforce requirements."
              },
              "Gamma Group": {
                "answer": "Offers flexible options for coverage scheduling.",
                "comment": "Can be adapted to specific employer needs."
              },
              "Delta Coverage": {
                "answer": "Schedule customization provided.",
                "comment": "Adjustable to suit various employment conditions."
              }
            }
          },
          {
            "qr_id": "A1h",
            "qr_text": "Flat",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["policy_terms.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$50,000",
                "comment": "Flat amount provided for basic coverage."
              },
              "Beta Benefits": {
                "answer": "$100,000",
                "comment": "Higher flat rate for added protection."
              },
              "Gamma Group": {
                "answer": "$75,000",
                "comment": "Standard flat amount for all employees."
              },
              "Delta Coverage": {
                "answer": "$80,000",
                "comment": "Flat coverage amount per policy."
              }
            }
          },
          {
            "qr_id": "A1i",
            "qr_text": "Earning Multiple",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["earning_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "2x Annual Earnings",
                "comment": "Multiplier used to calculate coverage."
              },
              "Beta Benefits": {
                "answer": "1.5x Annual Earnings",
                "comment": "Lower multiplier for budget-conscious employers."
              },
              "Gamma Group": {
                "answer": "2.5x Annual Earnings",
                "comment": "Increased multiplier for comprehensive coverage."
              },
              "Delta Coverage": {
                "answer": "2x Annual Earnings",
                "comment": "Standard earning multiple for coverage."
              }
            }
          },
          {
            "qr_id": "A1j",
            "qr_text": "Earning Multiple To",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["earning_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$500,000",
                "comment": "Maximum coverage based on earnings."
              },
              "Beta Benefits": {
                "answer": "$450,000",
                "comment": "Cap on coverage based on multiple of earnings."
              },
              "Gamma Group": {
                "answer": "$600,000",
                "comment": "Higher maximum for earnings-based coverage."
              },
              "Delta Coverage": {
                "answer": "$550,000",
                "comment": "Upper limit on coverage amount."
              }
            }
          },
          {
            "qr_id": "A1k",
            "qr_text": "Rounding",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["rounding_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$10,000",
                "comment": "Coverage rounded to the nearest $10,000."
              },
              "Beta Benefits": {
                "answer": "$5,000",
                "comment": "Smaller rounding increments for flexibility."
              },
              "Gamma Group": {
                "answer": "$10,000",
                "comment": "Standard rounding for life insurance."
              },
              "Delta Coverage": {
                "answer": "$25,000",
                "comment": "Larger rounding for significant coverage amounts."
              }
            }
          },
          {
            "qr_id": "A1l",
            "qr_text": "Increment",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["policy_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$10,000",
                "comment": "Increments of $10,000 for life insurance."
              },
              "Beta Benefits": {
                "answer": "$15,000",
                "comment": "Larger increments for policy adjustments."
              },
              "Gamma Group": {
                "answer": "$10,000",
                "comment": "Standard increment for coverage changes."
              },
              "Delta Coverage": {
                "answer": "$20,000",
                "comment": "Higher increments for substantial changes."
              }
            }
          },
          {
            "qr_id": "A1m",
            "qr_text": "Max",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["coverage_limits.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$500,000",
                "comment": "Maximum coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$400,000",
                "comment": "Lower cap for cost-effective plans."
              },
              "Gamma Group": {
                "answer": "$600,000",
                "comment": "Higher maximum to accommodate higher earners."
              },
              "Delta Coverage": {
                "answer": "$550,000",
                "comment": "Mid-range maximum coverage limit."
              }
            }
          },
          {
            "qr_id": "A1n",
            "qr_text": "Min",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["coverage_limits.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$50,000",
                "comment": "Minimum coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$25,000",
                "comment": "Lower minimum for entry-level coverage."
              },
              "Gamma Group": {
                "answer": "$50,000",
                "comment": "Standard minimum coverage for all employees."
              },
              "Delta Coverage": {
                "answer": "$30,000",
                "comment": "Flexible minimum for broad access."
              }
            }
          },
          {
            "qr_id": "A1o",
            "qr_text": "Reductions",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["reduction_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "65 65%, 70 50%",
                "comment": "Reductions at age 65 and 70."
              },
              "Beta Benefits": {
                "answer": "60 70%, 70 50%",
                "comment": "Early reduction for older age groups."
              },
              "Gamma Group": {
                "answer": "65 65%, 75 50%",
                "comment": "Later reductions to retain coverage."
              },
              "Delta Coverage": {
                "answer": "70 70%, 75 50%",
                "comment": "Higher reductions for longevity."
              }
            }
          },
          {
            "qr_id": "A1p",
            "qr_text": "Bonus",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["bonus_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "No",
                "comment": "No bonus options available."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Bonuses offered for high enrollment."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "Standard policy without bonuses."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Bonuses provided for group plans."
              }
            }
          },
          {
            "qr_id": "A1q",
            "qr_text": "Commission",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["commission_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "No",
                "comment": "Commission not included in this plan."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Commission available for agents."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "No commissions on this product."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Commissions provided for brokers."
              }
            }
          },
          {
            "qr_id": "A1r",
            "qr_text": "GI",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["guaranteed_issue_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$100,000",
                "comment": "Guaranteed issue amount available."
              },
              "Beta Benefits": {
                "answer": "$75,000",
                "comment": "Lower GI amount for broader access."
              },
              "Gamma Group": {
                "answer": "$125,000",
                "comment": "Higher GI to accommodate more employees."
              },
              "Delta Coverage": {
                "answer": "$100,000",
                "comment": "Standard GI across all policies."
              }
            }
          },
          {
            "qr_id": "A1s",
            "qr_text": "Waiver of Prem",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["waiver_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Eligible to age 60, Level to Age 65",
                "comment": "Waiver provided up to age 60, with coverage level until 65."
              },
              "Beta Benefits": {
                "answer": "Eligible to age 55, Level to Age 60",
                "comment": "Earlier waiver with lower age threshold."
              },
              "Gamma Group": {
                "answer": "Eligible to age 65, Level to Age 70",
                "comment": "Extended waiver coverage for older employees."
              },
              "Delta Coverage": {
                "answer": "Eligible to age 60, Level to Age 65",
                "comment": "Standard waiver for all policies."
              }
            }
          },
          {
            "qr_id": "A1t",
            "qr_text": "Participation %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["participation_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "75%",
                "comment": "Minimum participation required for group life."
              },
              "Beta Benefits": {
                "answer": "70%",
                "comment": "Lower participation rate for flexibility."
              },
              "Gamma Group": {
                "answer": "80%",
                "comment": "Higher participation required for coverage."
              },
              "Delta Coverage": {
                "answer": "75%",
                "comment": "Standard participation requirement."
              }
            }
          },
          {
            "qr_id": "A1u",
            "qr_text": "Required Enrollment %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["enrollment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "70%",
                "comment": "Minimum enrollment percentage for plan validity."
              },
              "Beta Benefits": {
                "answer": "65%",
                "comment": "Lower threshold for required enrollment."
              },
              "Gamma Group": {
                "answer": "75%",
                "comment": "Higher enrollment required to qualify."
              },
              "Delta Coverage": {
                "answer": "70%",
                "comment": "Standard enrollment requirement for group life."
              }
            }
          },
          {
            "qr_id": "A1v",
            "qr_text": "AA (See below)",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["aa_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "No",
                "comment": "AA not applicable in this plan."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "AA included as an additional feature."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "Plan does not include AA coverage."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Additional AA features offered."
              }
            }
          },
          {
            "qr_id": "A1w",
            "qr_text": "Expanded AD&D",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["ad&d_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Includes expanded AD&D benefits."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Additional AD&D coverage provided."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "Standard AD&D coverage only."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Enhanced AD&D options available."
              }
            }
          },
          {
            "qr_id": "A1x",
            "qr_text": "XSL/XCL",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["xsl_xcl_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "XSL/XCL features included."
              },
              "Beta Benefits": {
                "answer": "No",
                "comment": "XSL/XCL not offered."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Coverage includes XSL/XCL."
              },
              "Delta Coverage": {
                "answer": "No",
                "comment": "XSL/XCL not part of the plan."
              }
            }
          },
          {
            "qr_id": "A1y",
            "qr_text": "Spouse Enrollments",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_enrollment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "50 spouses",
                "comment": "Current number of enrolled spouses."
              },
              "Beta Benefits": {
                "answer": "60 spouses",
                "comment": "Total spouse enrollments in the life plan."
              },
              "Gamma Group": {
                "answer": "45 spouses",
                "comment": "Participants enrolled under spouse coverage."
              },
              "Delta Coverage": {
                "answer": "70 spouses",
                "comment": "Number of spouses enrolled in the plan."
              }
            }
          },
          {
            "qr_id": "A1z",
            "qr_text": "Spouse Flex Benefit Amounts",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_flex_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Flexible options up to $100,000",
                "comment": "Customizable benefit amounts for spouses."
              },
              "Beta Benefits": {
                "answer": "Range from $50,000 to $150,000",
                "comment": "Broad range of options for spouse benefits."
              },
              "Gamma Group": {
                "answer": "Flexible up to $75,000",
                "comment": "Multiple benefit options for spouses."
              },
              "Delta Coverage": {
                "answer": "Up to $200,000",
                "comment": "High flexibility in spouse benefit amounts."
              }
            }
          },
          {
            "qr_id": "A2a",
            "qr_text": "Spouse Flat",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_flat_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$50,000",
                "comment": "Flat amount provided for spouse coverage."
              },
              "Beta Benefits": {
                "answer": "$75,000",
                "comment": "Higher flat rate for spouse protection."
              },
              "Gamma Group": {
                "answer": "$60,000",
                "comment": "Standard flat amount for spouse insurance."
              },
              "Delta Coverage": {
                "answer": "$80,000",
                "comment": "Flat coverage amount per spouse."
              }
            }
          },
          {
            "qr_id": "A2b",
            "qr_text": "Spouse Earning Multiple",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_earning_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "1.5x Annual Earnings",
                "comment": "Multiplier used to calculate spouse coverage."
              },
              "Beta Benefits": {
                "answer": "1x Annual Earnings",
                "comment": "Lower multiplier for spouse coverage."
              },
              "Gamma Group": {
                "answer": "2x Annual Earnings",
                "comment": "Increased multiplier for spouse coverage."
              },
              "Delta Coverage": {
                "answer": "1.5x Annual Earnings",
                "comment": "Standard earning multiple for spouse coverage."
              }
            }
          },
          {
            "qr_id": "A2c",
            "qr_text": "Spouse Rounding",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_rounding_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$5,000",
                "comment": "Coverage rounded to the nearest $5,000."
              },
              "Beta Benefits": {
                "answer": "$10,000",
                "comment": "Larger rounding increments for spouse coverage."
              },
              "Gamma Group": {
                "answer": "$5,000",
                "comment": "Standard rounding for spouse insurance."
              },
              "Delta Coverage": {
                "answer": "$15,000",
                "comment": "Larger rounding for significant coverage amounts."
              }
            }
          },
          {
            "qr_id": "A2d",
            "qr_text": "Spouse % of EE Amount",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_ee_amount_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "50%",
                "comment": "Spouse coverage set at 50% of employee amount."
              },
              "Beta Benefits": {
                "answer": "40%",
                "comment": "Lower percentage for cost management."
              },
              "Gamma Group": {
                "answer": "60%",
                "comment": "Higher percentage for spouse coverage."
              },
              "Delta Coverage": {
                "answer": "50%",
                "comment": "Standard percentage for spouse insurance."
              }
            }
          },
          {
            "qr_id": "A2e",
            "qr_text": "Spouse Increment",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_increment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$5,000",
                "comment": "Increments of $5,000 for spouse insurance."
              },
              "Beta Benefits": {
                "answer": "$10,000",
                "comment": "Larger increments for spouse policy adjustments."
              },
              "Gamma Group": {
                "answer": "$5,000",
                "comment": "Standard increment for spouse coverage changes."
              },
              "Delta Coverage": {
                "answer": "$7,500",
                "comment": "Higher increments for substantial changes."
              }
            }
          },
          {
            "qr_id": "A2f",
            "qr_text": "Spouse Max",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_max_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$150,000",
                "comment": "Maximum spouse coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$200,000",
                "comment": "Higher cap for spouse insurance."
              },
              "Gamma Group": {
                "answer": "$175,000",
                "comment": "Increased maximum to accommodate spouse earnings."
              },
              "Delta Coverage": {
                "answer": "$150,000",
                "comment": "Mid-range maximum spouse coverage limit."
              }
            }
          },
          {
            "qr_id": "A2g",
            "qr_text": "Spouse Min",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_min_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$10,000",
                "comment": "Minimum spouse coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$15,000",
                "comment": "Lower minimum for entry-level spouse coverage."
              },
              "Gamma Group": {
                "answer": "$10,000",
                "comment": "Standard minimum coverage for spouse."
              },
              "Delta Coverage": {
                "answer": "$20,000",
                "comment": "Flexible minimum for broad spouse access."
              }
            }
          },
          {
            "qr_id": "A2h",
            "qr_text": "Spouse GI",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_gi_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$25,000",
                "comment": "Guaranteed issue amount for spouse."
              },
              "Beta Benefits": {
                "answer": "$20,000",
                "comment": "Lower GI amount for spouse coverage."
              },
              "Gamma Group": {
                "answer": "$30,000",
                "comment": "Higher GI to accommodate more spouses."
              },
              "Delta Coverage": {
                "answer": "$25,000",
                "comment": "Standard GI across spouse policies."
              }
            }
          },
          {
            "qr_id": "A2i",
            "qr_text": "Spouse Limit %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_limit_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "50%",
                "comment": "Spouse limit set at 50% of employee coverage."
              },
              "Beta Benefits": {
                "answer": "40%",
                "comment": "Lower limit for cost management."
              },
              "Gamma Group": {
                "answer": "60%",
                "comment": "Higher limit for spouse coverage."
              },
              "Delta Coverage": {
                "answer": "50%",
                "comment": "Standard limit for spouse insurance."
              }
            }
          },
          {
            "qr_id": "A2j",
            "qr_text": "Spouse Participation %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_participation_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "60%",
                "comment": "Minimum participation required for spouse coverage."
              },
              "Beta Benefits": {
                "answer": "70%",
                "comment": "Higher participation rate for spouse insurance."
              },
              "Gamma Group": {
                "answer": "55%",
                "comment": "Lower participation for broader access."
              },
              "Delta Coverage": {
                "answer": "65%",
                "comment": "Standard participation requirement for spouses."
              }
            }
          },
          {
            "qr_id": "A2k",
            "qr_text": "Spouse Required Enrollment %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_enrollment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "55%",
                "comment": "Required enrollment percentage for spouse validity."
              },
              "Beta Benefits": {
                "answer": "60%",
                "comment": "Higher threshold for required spouse enrollment."
              },
              "Gamma Group": {
                "answer": "50%",
                "comment": "Lower enrollment required to qualify."
              },
              "Delta Coverage": {
                "answer": "65%",
                "comment": "Standard enrollment requirement for spouses."
              }
            }
          },
          {
            "qr_id": "A2l",
            "qr_text": "Spouse Reductions",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["spouse_reduction_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "65 65%, 70 50%",
                "comment": "Reductions at age 65 and 70 for spouse."
              },
              "Beta Benefits": {
                "answer": "60 70%, 70 50%",
                "comment": "Early reduction for older spouse age groups."
              },
              "Gamma Group": {
                "answer": "65 65%, 75 50%",
                "comment": "Later reductions to retain spouse coverage."
              },
              "Delta Coverage": {
                "answer": "70 70%, 75 50%",
                "comment": "Higher reductions for spouse longevity."
              }
            }
          },
          {
            "qr_id": "A2m",
            "qr_text": "Child Enrollments",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["child_enrollment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "100 children",
                "comment": "Current number of enrolled children."
              },
              "Beta Benefits": {
                "answer": "120 children",
                "comment": "Total child enrollments in the life plan."
              },
              "Gamma Group": {
                "answer": "90 children",
                "comment": "Participants enrolled under child coverage."
              },
              "Delta Coverage": {
                "answer": "130 children",
                "comment": "Number of children enrolled in the plan."
              }
            }
          },
          {
            "qr_id": "A2n",
            "qr_text": "Child Flex Benefit Amounts",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["child_flex_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Flexible options up to $10,000",
                "comment": "Customizable benefit amounts for children."
              },
              "Beta Benefits": {
                "answer": "Range from $5,000 to $15,000",
                "comment": "Broad range of options for child benefits."
              },
              "Gamma Group": {
                "answer": "Flexible up to $8,000",
                "comment": "Multiple benefit options for children."
              },
              "Delta Coverage": {
                "answer": "Up to $12,000",
                "comment": "High flexibility in child benefit amounts."
              }
            }
          },
          {
            "qr_id": "A2o",
            "qr_text": "Child Flat",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_flat_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$5,000",
                "comment": "Flat amount provided for child coverage."
              },
              "Beta Benefits": {
                "answer": "$7,500",
                "comment": "Higher flat rate for child protection."
              },
              "Gamma Group": {
                "answer": "$5,000",
                "comment": "Standard flat amount for child insurance."
              },
              "Delta Coverage": {
                "answer": "$10,000",
                "comment": "Flat coverage amount per child."
              }
            }
          },
          {
            "qr_id": "A2p",
            "qr_text": "Child Earning Multiple",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_earning_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "N/A",
                "comment": "Earning multiple not applicable to child coverage."
              },
              "Beta Benefits": {
                "answer": "N/A",
                "comment": "Child coverage does not use an earning multiple."
              },
              "Gamma Group": {
                "answer": "N/A",
                "comment": "Not used in child life insurance."
              },
              "Delta Coverage": {
                "answer": "N/A",
                "comment": "Earning multiple not relevant for children."
              }
            }
          },
          {
            "qr_id": "A2q",
            "qr_text": "Child Rounding",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_rounding_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$1,000",
                "comment": "Coverage rounded to the nearest $1,000 for children."
              },
              "Beta Benefits": {
                "answer": "$500",
                "comment": "Smaller rounding increments for child coverage."
              },
              "Gamma Group": {
                "answer": "$1,000",
                "comment": "Standard rounding for child insurance."
              },
              "Delta Coverage": {
                "answer": "$2,500",
                "comment": "Larger rounding for significant child coverage amounts."
              }
            }
          },
          {
            "qr_id": "A2r",
            "qr_text": "Child % of EE Amount",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_ee_amount_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "N/A",
                "comment": "Percentage of employee amount not used in child coverage."
              },
              "Beta Benefits": {
                "answer": "N/A",
                "comment": "Child coverage not based on employee coverage."
              },
              "Gamma Group": {
                "answer": "N/A",
                "comment": "Percentage of EE amount not applicable."
              },
              "Delta Coverage": {
                "answer": "N/A",
                "comment": "Child coverage is independent of EE amount."
              }
            }
          },
          {
            "qr_id": "A2s",
            "qr_text": "Child Increment",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_increment_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$5,000",
                "comment": "Increments of $5,000 for child insurance."
              },
              "Beta Benefits": {
                "answer": "$2,500",
                "comment": "Smaller increments for child policy adjustments."
              },
              "Gamma Group": {
                "answer": "$5,000",
                "comment": "Standard increment for child coverage changes."
              },
              "Delta Coverage": {
                "answer": "$7,500",
                "comment": "Higher increments for substantial child coverage changes."
              }
            }
          },
          {
            "qr_id": "A2t",
            "qr_text": "Child Max",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_max_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$10,000",
                "comment": "Maximum child coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$15,000",
                "comment": "Higher cap for child insurance."
              },
              "Gamma Group": {
                "answer": "$10,000",
                "comment": "Standard maximum for child life insurance."
              },
              "Delta Coverage": {
                "answer": "$12,500",
                "comment": "Mid-range maximum child coverage limit."
              }
            }
          },
          {
            "qr_id": "A2u",
            "qr_text": "Child Min",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_min_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$5,000",
                "comment": "Minimum child coverage amount available."
              },
              "Beta Benefits": {
                "answer": "$2,500",
                "comment": "Lower minimum for entry-level child coverage."
              },
              "Gamma Group": {
                "answer": "$5,000",
                "comment": "Standard minimum coverage for children."
              },
              "Delta Coverage": {
                "answer": "$7,500",
                "comment": "Flexible minimum for broad child coverage."
              }
            }
          },
          {
            "qr_id": "A2v",
            "qr_text": "Child Limit %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["child_limit_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "N/A",
                "comment": "Limit percentage not applicable for child coverage."
              },
              "Beta Benefits": {
                "answer": "N/A",
                "comment": "Child coverage does not have a limit percentage."
              },
              "Gamma Group": {
                "answer": "N/A",
                "comment": "Not used in child life insurance."
              },
              "Delta Coverage": {
                "answer": "N/A",
                "comment": "Limit percentage not relevant for children."
              }
            }
          },
          {
            "qr_id": "A2w",
            "qr_text": "Spouse AD&D",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["spouse_ad&d_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Includes AD&D benefits for spouse."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Spouse AD&D coverage provided."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "Standard coverage only for spouse."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Enhanced AD&D options for spouse."
              }
            }
          },
          {
            "qr_id": "A2x",
            "qr_text": "Child AD&D",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["child_ad&d_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Includes AD&D benefits for children."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Child AD&D coverage provided."
              },
              "Gamma Group": {
                "answer": "No",
                "comment": "Standard coverage only for children."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Enhanced AD&D options for children."
              }
            }
          }
        ]
      }
    ]
  },  
  {
    "qr_id": "E",
    "qr_level_1_group": "Group STD",
    "children": [
      {
        "qr_id": "E1",
        "qr_level_2_group": "General",
        "children": [
          {
            "qr_id": "E1a",
            "qr_text": "Hourly Req",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["eligibility_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "30 hours",
                "comment": "Minimum hours required per week for STD eligibility."
              },
              "Beta Benefits": {
                "answer": "32 hours",
                "comment": "Standard hourly requirement for coverage."
              },
              "Gamma Group": {
                "answer": "30 hours",
                "comment": "Eligibility requires 30 hours of work per week."
              },
              "Delta Coverage": {
                "answer": "28 hours",
                "comment": "Flexible threshold for qualification."
              }
            }
          },
          {
            "qr_id": "E1b",
            "qr_text": "Benefit %",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["benefit_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "66 2/3%",
                "comment": "Standard benefit percentage."
              },
              "Beta Benefits": {
                "answer": "65%",
                "comment": "Slightly reduced benefit percentage."
              },
              "Gamma Group": {
                "answer": "66 2/3%",
                "comment": "Industry-standard benefit percentage."
              },
              "Delta Coverage": {
                "answer": "67%",
                "comment": "Enhanced benefit percentage for better coverage."
              }
            }
          },
          {
            "qr_id": "E1c",
            "qr_text": "Maximum Benefit Amount",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["benefit_limits.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "$1,500",
                "comment": "Maximum weekly benefit amount."
              },
              "Beta Benefits": {
                "answer": "$1,400",
                "comment": "Slightly lower maximum benefit amount."
              },
              "Gamma Group": {
                "answer": "$1,600",
                "comment": "Higher benefit cap for premium plans."
              },
              "Delta Coverage": {
                "answer": "$1,500",
                "comment": "Standard maximum benefit amount."
              }
            }
          },
          {
            "qr_id": "E1d",
            "qr_text": "Max Bft Period",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["benefit_period_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "76 weeks",
                "comment": "Maximum duration for benefits."
              },
              "Beta Benefits": {
                "answer": "70 weeks",
                "comment": "Shorter benefit period for budget plans."
              },
              "Gamma Group": {
                "answer": "78 weeks",
                "comment": "Extended benefit period for select plans."
              },
              "Delta Coverage": {
                "answer": "76 weeks",
                "comment": "Standard benefit period duration."
              }
            }
          },
          {
            "qr_id": "E1e",
            "qr_text": "Sickness",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["sickness_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "15 days",
                "comment": "Elimination period for sickness claims."
              },
              "Beta Benefits": {
                "answer": "14 days",
                "comment": "Slightly shorter waiting period."
              },
              "Gamma Group": {
                "answer": "16 days",
                "comment": "Extended waiting period for specific plans."
              },
              "Delta Coverage": {
                "answer": "15 days",
                "comment": "Standard elimination period."
              }
            }
          },
          {
            "qr_id": "E1f",
            "qr_text": "Accident",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["accident_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "15 days",
                "comment": "Elimination period for accident claims."
              },
              "Beta Benefits": {
                "answer": "14 days",
                "comment": "Shorter waiting period for accidents."
              },
              "Gamma Group": {
                "answer": "15 days",
                "comment": "Standard elimination period."
              },
              "Delta Coverage": {
                "answer": "16 days",
                "comment": "Extended elimination period."
              }
            }
          },
          {
            "qr_id": "E1g",
            "qr_text": "Bonus",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["bonus_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "No",
                "comment": "No bonus options included."
              },
              "Beta Benefits": {
                "answer": "No",
                "comment": "Bonuses not applicable."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Bonus options available for specific plans."
              },
              "Delta Coverage": {
                "answer": "No",
                "comment": "No bonus provisions."
              }
            }
          },
          {
            "qr_id": "E1h",
            "qr_text": "Sick Leave Verbiage",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["sick_leave_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Any sick leave or salary continuation plan of the Employer.",
                "comment": "Standard sick leave integration."
              },
              "Beta Benefits": {
                "answer": "Employer's sick leave or salary continuation plan.",
                "comment": "Aligned with company policies."
              },
              "Gamma Group": {
                "answer": "Any employer-provided sick leave or salary plan.",
                "comment": "Includes all sick leave options."
              },
              "Delta Coverage": {
                "answer": "Employer's sick leave policy.",
                "comment": "Standard integration with sick leave."
              }
            }
          },
          {
            "qr_id": "E1i",
            "qr_text": "Earnings Include",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["earnings_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Any amounts received as bonus, commissions, overtime pay or other extra compensation.",
                "comment": "Includes additional compensation."
              },
              "Beta Benefits": {
                "answer": "Bonuses, commissions, and overtime pay.",
                "comment": "Covers extra earnings."
              },
              "Gamma Group": {
                "answer": "Bonuses, commissions, and extra compensation.",
                "comment": "Broad earnings definition."
              },
              "Delta Coverage": {
                "answer": "All forms of extra compensation.",
                "comment": "Covers bonus, commission, and overtime."
              }
            }
          },
          {
            "qr_id": "E1j",
            "qr_text": "Contrib (verbiage)",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["contribution_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "At no cost to the employee.",
                "comment": "Employer covers all STD costs."
              },
              "Beta Benefits": {
                "answer": "Employer paid, no employee contribution.",
                "comment": "Fully employer-funded STD."
              },
              "Gamma Group": {
                "answer": "At no cost to employees.",
                "comment": "Employer covers all contributions."
              },
              "Delta Coverage": {
                "answer": "Fully employer-paid, no cost to employees.",
                "comment": "Employer-funded coverage."
              }
            }
          },
          {
            "qr_id": "E1k",
            "qr_text": "CN Explicitly Given",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["cn_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Consent explicitly provided."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Explicit consent given by employees."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Consent is required and documented."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Consent explicitly obtained."
              }
            }
          }
        ]
      }
    ]
  }
  
];
