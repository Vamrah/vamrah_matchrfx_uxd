export const dataproposalsQA = [
  {
    "qr_id": "A",
    "qr_level_1_group": "Group Life",
    "children": [
      // {
      //   "qr_id": "A1",
      //   "qr_level_2_group": "Pricing",
      //   "children": [
      //     {
      //       "qr_id": "A1a",
      //       "qr_text": "What is your setup fee?",
      //       "qr_type": "short answer",
      //       "qr_answer_options": [""],
      //       "qr_source": ["broker pricing docs"],
      //       "insurer_answers": {
      //         "Alpha Insurance": {
      //           "answer": "$500",
      //           "comment": "Includes initial consultations. Competitive rate."
      //         },
      //         "Beta Benefits": {
      //           "answer": "$450",
      //           "comment": "Discounts available for larger groups."
      //         },
      //         "Gamma Group": {
      //           "answer": "$400",
      //           "comment": "Waivable under certain conditions."
      //         },
      //         "Delta Coverage": {
      //           "answer": "$550",
      //           "comment": "Includes first-year admin support."
      //         }
      //       }
      //     },
      //     {
      //       "qr_id": "A1b",
      //       "qr_text": "What is your average PEPM?",
      //       "qr_type": "short answer",
      //       "qr_answer_options": [""],
      //       "qr_source": ["broker docs"],
      //       "insurer_answers": {
      //         "Alpha Insurance": {
      //           "answer": "$10",
      //           "comment": "Varies by group size and demographics."
      //         },
      //         "Beta Benefits": {
      //           "answer": "$9",
      //           "comment": "Flexible PEPM structure."
      //         },
      //         "Gamma Group": {
      //           "answer": "$8",
      //           "comment": "Rates are negotiable."
      //         },
      //         "Delta Coverage": {
      //           "answer": "$11",
      //           "comment": "Depends on selected plan."
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        "qr_id": "A2",
        "qr_level_2_group": "General",
        "children": [
          {
            "qr_id": "A2a",
            "qr_text": "Provide a description of the life insurance coverage being offered.",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["coverage documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Comprehensive coverage.",
                "comment": "Includes accidental death and dismemberment. Customizable."
              },
              "Beta Benefits": {
                "answer": "Base coverage with options.",
                "comment": "Flexible and affordable plans."
              },
              "Gamma Group": {
                "answer": "Standard coverage.",
                "comment": "Supplemental plans available."
              },
              "Delta Coverage": {
                "answer": "Extensive coverage.",
                "comment": "Options for critical illness and disability."
              }
            }
          },
          {
            "qr_id": "A2b",
            "qr_text": "Provide a description of the process for an employee submitting a claim.",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["claims documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Online or customer service.",
                "comment": "Submit via portal or customer service. Documentation required."
              },
              "Beta Benefits": {
                "answer": "App, website, or paper form.",
                "comment": "Includes guidance for required documents."
              },
              "Gamma Group": {
                "answer": "Online or mail.",
                "comment": "Forms provided during onboarding."
              },
              "Delta Coverage": {
                "answer": "Online, phone, or in-person.",
                "comment": "Documents vary by claim type."
              }
            }
          },
          {
            "qr_id": "A2c",
            "qr_text": "Provide a description of the validation process before a claim is approved for payment.",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["claims processing documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Document review, fraud check.",
                "comment": "Includes beneficiary verification. Takes 10 days."
              },
              "Beta Benefits": {
                "answer": "Multi-step review.",
                "comment": "Involves document and policy verification."
              },
              "Gamma Group": {
                "answer": "Cross-checks and eligibility confirmation.",
                "comment": "7-14 days for completion."
              },
              "Delta Coverage": {
                "answer": "Thorough checks and final approval.",
                "comment": "Involves audits and senior officer review."
              }
            }
          },
          {
            "qr_id": "A2d",
            "qr_text": "Provide a sample invoice.",
            "qr_type": "file upload",
            "qr_answer_options": ["Upload File"],
            "qr_source": ["invoice records"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "sample_invoice_alpha.pdf",
                "comment": "Standard invoice for group life insurance."
              },
              "Beta Benefits": {
                "answer": "sample_invoice_beta.pdf",
                "comment": "Breakdown of fees included."
              },
              "Gamma Group": {
                "answer": "sample_invoice_gamma.pdf",
                "comment": "Customizable invoice format."
              },
              "Delta Coverage": {
                "answer": "sample_invoice_delta.pdf",
                "comment": "Typical charges for a medium-sized group."
              }
            }
          },
          {
            "qr_id": "A2e",
            "qr_text": "Which of the following does your system provide? management reports regarding enrollments, claims, and benefits paid.",
            "qr_type": "multiple choice",
            "qr_answer_options": [
              "Enrollment Reports",
              "Claims Reports",
              "Benefits Paid Reports"
            ],
            "qr_source": ["system capabilities documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": ["All reports"],
                "comment": "Comprehensive reporting features."
              },
              "Beta Benefits": {
                "answer": ["Enrollment", "Claims"],
                "comment": "Adding benefits paid reports soon."
              },
              "Gamma Group": {
                "answer": ["Claims", "Benefits Paid"],
                "comment": "Enrollment reports via third-party."
              },
              "Delta Coverage": {
                "answer": ["All reports"],
                "comment": "On-demand reports via online portal."
              }
            }
          },
          {
            "qr_id": "A2f",
            "qr_text": "Provide screenshots or other material demonstrating the customer app/portal/website as described in the scope.",
            "qr_type": "file upload",
            "qr_answer_options": ["Upload File"],
            "qr_source": ["customer portal documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "alpha_portal_screenshots.zip",
                "comment": "Screenshots of customer portal."
              },
              "Beta Benefits": {
                "answer": "beta_portal_demo.mp4",
                "comment": "Video walkthrough of customer app."
              },
              "Gamma Group": {
                "answer": "gamma_app_screenshots.pdf",
                "comment": "PDF with app interface images."
              },
              "Delta Coverage": {
                "answer": "delta_portal_overview.pptx",
                "comment": "PowerPoint with detailed website views."
              }
            }
          },
          {
            "qr_id": "A2g",
            "qr_text": "Provide information regarding the call center, including staffing, call volume, call handling triage, and other information to assess the call center’s customer service response.",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["call center reports"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "24/7, 50 agents, 2000 calls/day.",
                "comment": "Triage by urgency, focus on first-call resolution."
              },
              "Beta Benefits": {
                "answer": "30 agents, 1500 calls/day.",
                "comment": "Automated triage and priority routing."
              },
              "Gamma Group": {
                "answer": "20 agents, 1000 calls/day.",
                "comment": "Categorized by issue type."
              },
              "Delta Coverage": {
                "answer": "40 agents, 1800 calls/day.",
                "comment": "AI-driven triage for quick resolutions."
              }
            }
          },
          {
            "qr_id": "A2h",
            "qr_text": "Provide sample benefits coverage information to be distributed to employees advising of the benefits.",
            "qr_type": "file upload",
            "qr_answer_options": ["Upload File"],
            "qr_source": ["benefits documentation"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "alpha_benefits_guide.pdf",
                "comment": "Includes all necessary details for employees."
              },
              "Beta Benefits": {
                "answer": "beta_benefits_summary.docx",
                "comment": "Concise summary in an easy-to-read format."
              },
              "Gamma Group": {
                "answer": "gamma_employee_benefits.pdf",
                "comment": "Tailored document for employee coverage."
              },
              "Delta Coverage": {
                "answer": "delta_coverage_overview.ppt",
                "comment": "PowerPoint overview of employee benefits."
              }
            }
          }
        ]
      }
    ]
  },  
  // {
  //   "qr_id": "B",
  //   "qr_level_1_group": "Group Vision",
  //   "children": [
  //     {
  //       "qr_id": "B1",
  //       "qr_level_2_group": "Pricing",
  //       "children": [
  //         {
  //           "qr_id": "B1a",
  //           "qr_text": "What is your setup fee?",
  //           "qr_type": "short answer",
  //           "qr_answer_options": [""],
  //           "qr_source": ["broker docs"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "$300",
  //               "comment": "Includes initial training sessions."
  //             },
  //             "Beta Benefits": {
  //               "answer": "$350",
  //               "comment": "Setup fee can be reduced for multi-year contracts."
  //             },
  //             "Gamma Group": {
  //               "answer": "$250",
  //               "comment": "We offer competitive setup fees."
  //             },
  //             "Delta Coverage": {
  //               "answer": "$400",
  //               "comment": "Fee covers initial setup and first-year support."
  //             }
  //           }
  //         },
  //         {
  //           "qr_id": "B1b",
  //           "qr_text": "Is your fee basis PEPM?",
  //           "qr_type": "yes/no",
  //           "qr_answer_options": ["Yes", "No"],
  //           "qr_source": ["RFP1234"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "Yes",
  //               "comment": "Yes, our fee is based on PEPM."
  //             },
  //             "Beta Benefits": {
  //               "answer": "No",
  //               "comment": "No, we use an alternative fee structure."
  //             },
  //             "Gamma Group": {
  //               "answer": "Yes",
  //               "comment": "Yes, with flexibility for larger groups."
  //             },
  //             "Delta Coverage": {
  //               "answer": "Yes",
  //               "comment": "Yes, our PEPM is designed to be cost-effective."
  //             }
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "qr_id": "B2",
  //       "qr_level_2_group": "Coverage",
  //       "children": [
  //         {
  //           "qr_id": "B2a",
  //           "qr_text": "Are replacement lenses covered?",
  //           "qr_type": "multiple choice",
  //           "qr_answer_options": ["Yes", "No", "Partially"],
  //           "qr_source": ["RFP1234"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "Yes",
  //               "comment": "Yes, once every two years."
  //             },
  //             "Beta Benefits": {
  //               "answer": "Partially",
  //               "comment": "Partially, with a copayment."
  //             },
  //             "Gamma Group": {
  //               "answer": "Yes",
  //               "comment": "Yes, under specific conditions."
  //             },
  //             "Delta Coverage": {
  //               "answer": "No",
  //               "comment": "No, replacement lenses are not covered."
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   "qr_id": "C",
  //   "qr_level_1_group": "Group Dental",
  //   "children": [
  //     {
  //       "qr_id": "C1",
  //       "qr_level_2_group": "Pricing",
  //       "children": [
  //         {
  //           "qr_id": "C1a",
  //           "qr_text": "What is your setup fee?",
  //           "qr_type": "short answer",
  //           "qr_answer_options": [""],
  //           "qr_source": ["client_submission.pdf"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "$400",
  //               "comment": "Includes first-year maintenance."
  //             },
  //             "Beta Benefits": {
  //               "answer": "$350",
  //               "comment": "Negotiable based on group size."
  //             },
  //             "Gamma Group": {
  //               "answer": "$300",
  //               "comment": "Waived for contracts over 2 years."
  //             },
  //             "Delta Coverage": {
  //               "answer": "$450",
  //               "comment": "Standard fee, includes setup and training."
  //             }
  //           }
  //         },
  //         {
  //           "qr_id": "C1b",
  //           "qr_text": "What is your average PEPM?",
  //           "qr_type": "short answer",
  //           "qr_answer_options": [""],
  //           "qr_source": ["client_submission.pdf"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "$12",
  //               "comment": "Based on coverage options selected."
  //             },
  //             "Beta Benefits": {
  //               "answer": "$11",
  //               "comment": "Flexible rates available."
  //             },
  //             "Gamma Group": {
  //               "answer": "$10",
  //               "comment": "Competitive rates for large groups."
  //             },
  //             "Delta Coverage": {
  //               "answer": "$13",
  //               "comment": "Standard PEPM rate, customizable."
  //             }
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "qr_id": "C2",
  //       "qr_level_2_group": "Eligibility",
  //       "children": [
  //         {
  //           "qr_id": "C2a",
  //           "qr_text": "How many family members are eligible for coverage?",
  //           "qr_type": "multiple choice",
  //           "qr_answer_options": ["1-2", "3-4", "5 or more"],
  //           "qr_source": ["RFP1234"],
  //           "insurer_answers": {
  //             "Alpha Insurance": {
  //               "answer": "3-4",
  //               "comment": "Up to 4 family members covered."
  //             },
  //             "Beta Benefits": {
  //               "answer": "5 or more",
  //               "comment": "Coverage for 5 or more available."
  //             },
  //             "Gamma Group": {
  //               "answer": "3-4",
  //               "comment": "Standard coverage includes 3-4 members."
  //             },
  //             "Delta Coverage": {
  //               "answer": "1-2",
  //               "comment": "1-2 family members included, additional coverage available."
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
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
            "qr_text": "What is the first year your company offered STD administration?",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["company_history.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "1995",
                "comment": "Pioneered in-house STD administration."
              },
              "Beta Benefits": {
                "answer": "2000",
                "comment": "Started as part of a broader disability management program."
              },
              "Gamma Group": {
                "answer": "1998",
                "comment": "Implemented after a successful pilot program."
              },
              "Delta Coverage": {
                "answer": "1992",
                "comment": "Among the first to offer comprehensive STD services."
              }
            }
          },
          {
            "qr_id": "E1b",
            "qr_text": "What is the first year your company insured STD?",
            "qr_type": "short answer",
            "qr_answer_options": [""],
            "qr_source": ["insurance_records.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "1997",
                "comment": "Began offering insured STD after two years of self-administration."
              },
              "Beta Benefits": {
                "answer": "2001",
                "comment": "Expanded to insured STD following strong demand."
              },
              "Gamma Group": {
                "answer": "1999",
                "comment": "Launched after establishing a robust risk management framework."
              },
              "Delta Coverage": {
                "answer": "1993",
                "comment": "Integrated insured STD with other disability products."
              }
            }
          },
          {
            "qr_id": "E1c",
            "qr_text": "Provide access to appropriate claim data for claim audits at least once every 3 years with proper releases (self-insured business)",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["claim_audit_policy.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Data access provided as per contractual agreements."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Audits supported with full data access and compliance."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Ensures transparency and regulatory compliance."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Audit access granted with proper authorizations."
              }
            }
          },
          {
            "qr_id": "E1d",
            "qr_text": "Does your system provide access to online data reports?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["system_capabilities.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Comprehensive online reporting available."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Real-time data reporting through client portal."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Accessible through our secure online platform."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Includes customizable reporting tools."
              }
            }
          },
          {
            "qr_id": "E1e",
            "qr_text": "Does your system provide advice to pay reports?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["payment_advice.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Integrated advice to pay functionality."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Includes detailed payment advice reports."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Available as part of our claims management system."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Supports all major payment processing workflows."
              }
            }
          },
          {
            "qr_id": "E1f",
            "qr_text": "How often do you provide face-to-face client meetings? Annually, Quarterly, Monthly",
            "qr_type": "multi-select",
            "qr_answer_options": ["Annually", "Quarterly", "Monthly"],
            "qr_source": ["client_service_agreement.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": ["Annually", "Quarterly"],
                "comment": "Flexible meeting schedule based on client needs."
              },
              "Beta Benefits": {
                "answer": ["Quarterly"],
                "comment": "Standard practice includes quarterly reviews."
              },
              "Gamma Group": {
                "answer": ["Annually"],
                "comment": "Annual meetings with additional as-needed consultations."
              },
              "Delta Coverage": {
                "answer": ["Quarterly", "Monthly"],
                "comment": "Frequent meetings ensure proactive service."
              }
            }
          },
          {
            "qr_id": "E1g",
            "qr_text": "Provide warehouse employer-specific job descriptions.",
            "qr_type": "file upload",
            "qr_answer_options": ["Upload File"],
            "qr_source": ["job_descriptions.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "warehouse_job_descriptions_alpha.pdf",
                "comment": "Includes a range of roles specific to warehouse environments."
              },
              "Beta Benefits": {
                "answer": "warehouse_job_descriptions_beta.pdf",
                "comment": "Detailed descriptions tailored to employer needs."
              },
              "Gamma Group": {
                "answer": "warehouse_job_descriptions_gamma.pdf",
                "comment": "Comprehensive and customizable job descriptions."
              },
              "Delta Coverage": {
                "answer": "warehouse_job_descriptions_delta.pdf",
                "comment": "Wide variety of roles covered, specific to warehouses."
              }
            }
          },
          {
            "qr_id": "E1h",
            "qr_text": "Do you provide notification to employer by push email of new STD claim within 24 hours of intake?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["notification_procedures.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Immediate notifications sent within 24 hours."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Automated push notifications ensure timely updates."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Notifications are part of our standard procedure."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Ensures employers are promptly informed."
              }
            }
          },
          {
            "qr_id": "E1i",
            "qr_text": "Do you provide notification to employer by push email on all claim status changes?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["notification_procedures.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Push emails sent for all status changes."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Ensures employers are updated on all changes."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Real-time updates on claim statuses."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Part of our comprehensive communication strategy."
              }
            }
          },
          {
            "qr_id": "E1j",
            "qr_text": "Use of clinical duration guidelines.",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["clinical_guidelines.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Standard practice.",
                "comment": "Utilize industry-standard guidelines for determining duration."
              },
              "Beta Benefits": {
                "answer": "Guidelines integrated.",
                "comment": "Used to ensure appropriate claim durations."
              },
              "Gamma Group": {
                "answer": "Follow established guidelines.",
                "comment": "Ensures consistency and accuracy in claim processing."
              },
              "Delta Coverage": {
                "answer": "Mandatory use.",
                "comment": "Clinical guidelines are strictly adhered to."
              }
            }
          },
          {
            "qr_id": "E1k",
            "qr_text": "Which in-house medical professional resources do you offer? Nurses, Physicians, Voc Rehab",
            "qr_type": "multi-select",
            "qr_answer_options": ["Nurses", "Physicians", "Voc Rehab"],
            "qr_source": ["medical_resources.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": ["Nurses", "Physicians"],
                "comment": "Our team includes experienced nurses and physicians."
              },
              "Beta Benefits": {
                "answer": ["Voc Rehab", "Nurses"],
                "comment": "Focus on rehabilitation and nursing support."
              },
              "Gamma Group": {
                "answer": ["Physicians", "Voc Rehab"],
                "comment": "Specialized in vocational rehabilitation and medical advice."
              },
              "Delta Coverage": {
                "answer": ["Nurses", "Physicians", "Voc Rehab"],
                "comment": "Comprehensive in-house medical team."
              }
            }
          },
          {
            "qr_id": "E1l",
            "qr_text": "Which contracted medical professionals do you utilize that are not employees of your organization? Contracted physicians, nurses",
            "qr_type": "multi-select",
            "qr_answer_options": ["Contracted Physicians", "Contracted Nurses"],
            "qr_source": ["contracted_professionals.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": ["Contracted Physicians"],
                "comment": "We contract physicians for specialized assessments."
              },
              "Beta Benefits": {
                "answer": ["Contracted Nurses"],
                "comment": "Use contracted nurses for supplemental support."
              },
              "Gamma Group": {
                "answer": ["Contracted Physicians", "Contracted Nurses"],
                "comment": "Engage both for comprehensive coverage."
              },
              "Delta Coverage": {
                "answer": ["Contracted Physicians", "Contracted Nurses"],
                "comment": "We rely on both to enhance our in-house capabilities."
              }
            }
          },
          {
            "qr_id": "E1m",
            "qr_text": "Do you accept electronic eligibility feed including set up and testing?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["eligibility_feed.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Full support for electronic feeds, including setup and testing."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "We offer seamless integration for eligibility feeds."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Includes robust setup and thorough testing."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Electronic feeds are standard practice for us."
              }
            }
          }
        ]
      }
    ]
  },
  {
    "qr_id": "D",
    "qr_level_1_group": "Info Sec",
    "children": [
      {
        "qr_id": "D1",
        "qr_level_2_group": "Policies",
        "children": [
          {
            "qr_id": "D1a",
            "qr_text": "Do you have a documented information security policy?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["info_sec_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Comprehensive policy in place."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Regularly updated to reflect latest standards."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Aligned with ISO 27001 standards."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Reviewed annually."
              }
            }
          },
          {
            "qr_id": "D1b",
            "qr_text": "How do you collect, use, and share customer data?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["privacy_policy.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Collected via secure forms.",
                "comment": "Used for service provision, shared with authorized partners only."
              },
              "Beta Benefits": {
                "answer": "Data collected through apps.",
                "comment": "Used for personalization; shared for compliance purposes."
              },
              "Gamma Group": {
                "answer": "Collected during enrollment.",
                "comment": "Used for policy management, shared under strict agreements."
              },
              "Delta Coverage": {
                "answer": "Collected online and offline.",
                "comment": "Used for customer support, shared only with consent."
              }
            }
          },
          {
            "qr_id": "D1c",
            "qr_text": "What choices do you give customers about how their data is used?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["privacy_policy.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Opt-in/Opt-out options.",
                "comment": "Customers can manage preferences via portal."
              },
              "Beta Benefits": {
                "answer": "Consent management tools.",
                "comment": "Choices provided at data collection points."
              },
              "Gamma Group": {
                "answer": "Preference settings available.",
                "comment": "Customers can update preferences anytime."
              },
              "Delta Coverage": {
                "answer": "Detailed privacy settings.",
                "comment": "Choices communicated during onboarding."
              }
            }
          },
          {
            "qr_id": "D1d",
            "qr_text": "How do you develop and implement privacy policies and procedures?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["privacy_policy.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Developed by privacy team.",
                "comment": "Reviewed annually and updated as needed."
              },
              "Beta Benefits": {
                "answer": "Collaborative approach.",
                "comment": "Involves legal, compliance, and IT teams."
              },
              "Gamma Group": {
                "answer": "Based on legal requirements.",
                "comment": "Implemented with regular training."
              },
              "Delta Coverage": {
                "answer": "Policy framework in place.",
                "comment": "Continuous improvement based on feedback."
              }
            }
          },
          {
            "qr_id": "D1e",
            "qr_text": "How do you manage customer data consent?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["consent_management.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Managed via consent portal.",
                "comment": "Customers can view and modify consents anytime."
              },
              "Beta Benefits": {
                "answer": "Automated consent management.",
                "comment": "Integrates with CRM for tracking."
              },
              "Gamma Group": {
                "answer": "Centralized consent database.",
                "comment": "Auditable and secure."
              },
              "Delta Coverage": {
                "answer": "Consents collected digitally.",
                "comment": "Stored securely and easily accessible."
              }
            }
          }
        ]
      },
      {
        "qr_id": "D2",
        "qr_level_2_group": "Controls",
        "children": [
          {
            "qr_id": "D2a",
            "qr_text": "What types of access controls are implemented?",
            "qr_type": "multi-select",
            "qr_answer_options": ["Role-based", "Multi-factor Authentication", "Biometric", "Password"],
            "qr_source": ["info_sec_docs.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": ["Role-based", "Multi-factor Authentication"],
                "comment": "Using role-based control with MFA."
              },
              "Beta Benefits": {
                "answer": ["Biometric", "Password"],
                "comment": "Strong passwords with biometric authentication."
              },
              "Gamma Group": {
                "answer": ["Role-based", "Password"],
                "comment": "Standard access controls in place."
              },
              "Delta Coverage": {
                "answer": ["Multi-factor Authentication", "Biometric"],
                "comment": "High security through MFA and biometrics."
              }
            }
          },
          {
            "qr_id": "D2b",
            "qr_text": "How do you protect customer data from unauthorized access, use, disclosure, modification, or destruction?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["data_protection.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Encryption and firewalls.",
                "comment": "24/7 monitoring with threat detection."
              },
              "Beta Benefits": {
                "answer": "Layered security approach.",
                "comment": "Regular audits and vulnerability assessments."
              },
              "Gamma Group": {
                "answer": "Access controls and encryption.",
                "comment": "Data encrypted in transit and at rest."
              },
              "Delta Coverage": {
                "answer": "Multi-layer security.",
                "comment": "Includes encryption, MFA, and regular audits."
              }
            }
          },
          {
            "qr_id": "D2c",
            "qr_text": "How do you detect and respond to privacy incidents?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["incident_response.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Real-time monitoring.",
                "comment": "Incidents are logged and investigated immediately."
              },
              "Beta Benefits": {
                "answer": "Incident response team.",
                "comment": "Includes investigation, notification, and remediation."
              },
              "Gamma Group": {
                "answer": "Automated alerts.",
                "comment": "Followed by a structured incident response process."
              },
              "Delta Coverage": {
                "answer": "Comprehensive response plan.",
                "comment": "Includes detection, containment, and reporting."
              }
            }
          },
          {
            "qr_id": "D2d",
            "qr_text": "Do you have a dedicated privacy team?",
            "qr_type": "yes/no",
            "qr_answer_options": ["Yes", "No"],
            "qr_source": ["privacy_team.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes",
                "comment": "Team responsible for privacy and data protection."
              },
              "Beta Benefits": {
                "answer": "Yes",
                "comment": "Works closely with IT and legal teams."
              },
              "Gamma Group": {
                "answer": "Yes",
                "comment": "Handles policy development and incident management."
              },
              "Delta Coverage": {
                "answer": "Yes",
                "comment": "Focused on compliance and customer data protection."
              }
            }
          },
          {
            "qr_id": "D2e",
            "qr_text": "What tools and technologies do you use to support privacy management?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["tools_technologies.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Data Loss Prevention (DLP) tools.",
                "comment": "Also use encryption and access management solutions."
              },
              "Beta Benefits": {
                "answer": "Privacy management software.",
                "comment": "Integrated with incident response systems."
              },
              "Gamma Group": {
                "answer": "Data masking and encryption.",
                "comment": "Supports GDPR and CCPA compliance."
              },
              "Delta Coverage": {
                "answer": "Advanced security tools.",
                "comment": "Including DLP, encryption, and IAM solutions."
              }
            }
          },
          {
            "qr_id": "D2f",
            "qr_text": "How do you conduct privacy risk assessments?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["risk_assessment.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Regular assessments.",
                "comment": "Includes identification, analysis, and mitigation."
              },
              "Beta Benefits": {
                "answer": "Annual reviews.",
                "comment": "Risk-based approach with continuous monitoring."
              },
              "Gamma Group": {
                "answer": "Risk assessment framework.",
                "comment": "Updated regularly to address new threats."
              },
              "Delta Coverage": {
                "answer": "Comprehensive risk assessments.",
                "comment": "Conducted by internal and external experts."
              }
            }
          },
          {
            "qr_id": "D2g",
            "qr_text": "How do you measure the effectiveness of your privacy program?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["privacy_program.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Regular audits and reviews.",
                "comment": "Metrics include incident response time and compliance rates."
              },
              "Beta Benefits": {
                "answer": "Performance metrics.",
                "comment": "Focus on audit findings and remediation."
              },
              "Gamma Group": {
                "answer": "Continuous monitoring.",
                "comment": "Measures compliance with privacy laws."
              },
              "Delta Coverage": {
                "answer": "Annual assessments.",
                "comment": "Includes external audits and internal reviews."
              }
            }
          },
          {
            "qr_id": "D2h",
            "qr_text": "Do you have a third-party auditor review your privacy program? If so, what are the findings of the most recent audit?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["audit_report.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Yes, no major findings.",
                "comment": "Audit conducted by a leading firm, minor recommendations implemented."
              },
              "Beta Benefits": {
                "answer": "Yes, minor findings.",
                "comment": "Audit resulted in updates to certain practices."
              },
              "Gamma Group": {
                "answer": "Yes, compliance confirmed.",
                "comment": "Findings show strong compliance with standards."
              },
              "Delta Coverage": {
                "answer": "Yes, recommendations made.",
                "comment": "Improvements implemented based on audit feedback."
              }
            }
          },
          {
            "qr_id": "D2i",
            "qr_text": "How do you handle the collection, use, and sharing of customer data in the cloud?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["cloud_data_management.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Secure cloud platforms.",
                "comment": "Data encrypted and access controlled."
              },
              "Beta Benefits": {
                "answer": "Cloud-specific policies.",
                "comment": "Regular audits ensure data protection."
              },
              "Gamma Group": {
                "answer": "Compliance with cloud security standards.",
                "comment": "Data is encrypted in transit and at rest."
              },
              "Delta Coverage": {
                "answer": "Strict cloud data policies.",
                "comment": "Access controls and encryption in place."
              }
            }
          },
          {
            "qr_id": "D2j",
            "qr_text": "How do you protect customer data in the cloud from unauthorized access, use, disclosure, modification, or destruction?",
            "qr_type": "long answer",
            "qr_answer_options": [""],
            "qr_source": ["cloud_data_protection.pdf"],
            "insurer_answers": {
              "Alpha Insurance": {
                "answer": "Encryption and access controls.",
                "comment": "Advanced cloud security practices implemented."
              },
              "Beta Benefits": {
                "answer": "Multi-layer security.",
                "comment": "Includes encryption, monitoring, and regular audits."
              },
              "Gamma Group": {
                "answer": "Cloud-native security tools.",
                "comment": "Ensures compliance with relevant standards."
              },
              "Delta Coverage": {
                "answer": "Robust cloud security measures.",
                "comment": "Protects against unauthorized access and data breaches."
              }
            }
          }
        ]
      }
    ]
  }
];
