export const dataqrlibrary = [
    {
      "qr_id": "A",
      "qr_level_1_group": "Group Life",
      "children": [
        {
          "qr_id": "A1",
          "qr_level_2_group": "Pricing",
          "children": [
            {
              "qr_id": "A1a",
              "qr_text": "What is your setup fee?",
              "qr_type": "short answer",
              "qr_answer_options": [""],
              "qr_source": ["broker pricing docs"]
            },
            {
              "qr_id": "A1b",
              "qr_text": "What is your average PEPM?",
              "qr_type": "short answer",
              "qr_answer_options": [""],
              "qr_source": ["broker docs"]
            }
          ]
        }
      ]
    },
    {
      "qr_id": "B",
      "qr_level_1_group": "Group Vision",
      "children": [
        {
          "qr_id": "B1",
          "qr_level_2_group": "Pricing",
          "children": [
            {
              "qr_id": "B1a",
              "qr_text": "What is your setup fee?",
              "qr_type": "short answer",
              "qr_answer_options": [""],
              "qr_source": ["broker docs"]
            },
            {
              "qr_id": "B1b",
              "qr_text": "Is your fee basis PEPM?",
              "qr_type": "yes/no",
              "qr_answer_options": ["Yes", "No"],
              "qr_source": ["RFP1234"]
            }
          ]
        },
        {
          "qr_id": "B2",
          "qr_level_2_group": "Coverage",
          "children": [
            {
              "qr_id": "B2a",
              "qr_text": "Are replacement lenses covered?",
              "qr_type": "multiple choice",
              "qr_answer_options": ["Yes", "No", "Partially"],
              "qr_source": ["RFP1234"]
            }
          ]
        }
      ]
    },
    {
      "qr_id": "C",
      "qr_level_1_group": "Group Dental",
      "children": [
        {
          "qr_id": "C1",
          "qr_level_2_group": "Pricing",
          "children": [
            {
              "qr_id": "C1a",
              "qr_text": "What is your setup fee?",
              "qr_type": "short answer",
              "qr_answer_options": [""],
              "qr_source": ["client_submission.pdf"]
            },
            {
              "qr_id": "C1b",
              "qr_text": "What is your average PEPM?",
              "qr_type": "short answer",
              "qr_answer_options": [""],
              "qr_source": ["client_submission.pdf"]
            }
          ]
        },
        {
          "qr_id": "C2",
          "qr_level_2_group": "Eligibility",
          "children": [
            {
              "qr_id": "C2a",
              "qr_text": "How many family members are eligible for coverage?",
              "qr_type": "multiple choice",
              "qr_answer_options": ["1-2", "3-4", "5 or more"],
              "qr_source": ["RFP1234"]
            }
          ]
        }
      ]
    }
  ];  
