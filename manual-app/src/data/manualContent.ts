import { ChapterItem } from '../types/manual';

export const chaptersData: ChapterItem[] = [
  {
    "id": "chapter-1",
    "chapterNumber": 1,
    "title": "Introduction",
    "startPage": 4,
    "endPage": 8,
    "description": "General information, 24/7 global support contacts, terms and abbreviations glossary, installation standards, and comprehensive safety procedures for marine antenna installation.",
    "iconName": "BookOpen",
    "sections": [
      {
        "id": "section-1-1",
        "title": "General information",
        "sectionNumber": "1.1",
        "pageNumber": 4,
        "content": [
          "Technical personnel should refer to this document when installing or repairing antenna and coaxial cable systems for use with Veripos positioning systems.",
          "Veripos equipment is designed to operate in harsh marine environments. However, improper installation of antennas and cables can lead to poor performance, equipment damage, or complete failure of the positioning system.",
          "This manual covers best practices for antenna placement, cable selection, cable routing, termination, and weatherproofing to ensure optimal reliability and compliance with marine standards."
        ]
      },
      {
        "id": "section-1-2",
        "title": "Veripos Support",
        "sectionNumber": "1.2",
        "pageNumber": 4,
        "content": [
          "Veripos provides 24/7 global technical support to assist with installation, troubleshooting, and operational inquiries.",
          "When contacting Veripos Support, please provide the vessel name, user ID, system serial number, software version, and a detailed description of the issue."
        ],
        "tables": [
          {
            "id": "table-support-contacts",
            "caption": "Veripos Global Support Contact Information",
            "headers": [
              "Support Channel",
              "Contact Details",
              "Availability"
            ],
            "rows": [
              [
                "Helpdesk Telephone",
                "+44 (0) 1224 527104",
                "24/7 / 365 days"
              ],
              [
                "Helpdesk Email",
                "helpdesk@veripos.com",
                "24/7 / 365 days"
              ],
              [
                "Duty Officer Mobile",
                "+44 (0) 7738 780827",
                "Urgent / Out of hours"
              ],
              [
                "Online Helpdesk Portal",
                "https://help.veripos.com",
                "Continuous access"
              ]
            ]
          }
        ]
      },
      {
        "id": "section-1-3",
        "title": "Terms and abbreviations",
        "sectionNumber": "1.3",
        "pageNumber": 5,
        "content": [
          "The following terms and abbreviations are used throughout this manual and across Veripos technical documentation."
        ],
        "tables": [
          {
            "id": "table-terms-abbreviations",
            "caption": "Terms and Abbreviations",
            "headers": [
              "Term / Abbreviation",
              "Definition"
            ],
            "rows": [
              [
                "ARP",
                "Antenna reference point"
              ],
              [
                "BDE",
                "Below deck equipment"
              ],
              [
                "BeiDou",
                "Chinese satellite navigation system"
              ],
              [
                "BER",
                "Bit error rate"
              ],
              [
                "BNC",
                "Bayonet Neill-Concelman (type of RF connector)"
              ],
              [
                "C/No",
                "Carrier-to-noise ratio"
              ],
              [
                "DGNSS",
                "Differential Global Navigation Satellite System"
              ],
              [
                "DGPS",
                "Differential Global Positioning System"
              ],
              [
                "DP",
                "Dynamic positioning"
              ],
              [
                "EGNOS",
                "European Geostationary Navigation Overlay Service"
              ],
              [
                "EIRP",
                "Equivalent isotropically radiated power"
              ],
              [
                "EMC",
                "Electromagnetic compatibility"
              ],
              [
                "EN",
                "European standard"
              ],
              [
                "GAGAN",
                "GPS Aided GEO Augmented Navigation"
              ],
              [
                "Galileo",
                "European satellite navigation system"
              ],
              [
                "GLONASS",
                "GLObal NAvigation Satellite System (Russian)"
              ],
              [
                "GNSS",
                "Global Navigation Satellite System"
              ],
              [
                "GPS",
                "Global Positioning System (USA)"
              ],
              [
                "GSO",
                "Geosynchronous orbit"
              ],
              [
                "HF",
                "High frequency"
              ],
              [
                "IALA",
                "International Association of Marine Aids to Navigation and Lighthouse Authorities"
              ],
              [
                "IEC",
                "International Electrotechnical Commission"
              ],
              [
                "IER",
                "Initial equipment requirements"
              ],
              [
                "IMO",
                "International Maritime Organization"
              ],
              [
                "IP",
                "Ingress protection"
              ],
              [
                "L-band",
                "Frequency band 1 to 2 GHz"
              ],
              [
                "LNA",
                "Low-noise amplifier"
              ],
              [
                "MF",
                "Medium frequency"
              ],
              [
                "MSAS",
                "Multi-functional Satellite Augmentation System"
              ],
              [
                "NMEA",
                "National Marine Electronics Association"
              ],
              [
                "N-Type",
                "Neill-Concelman (type of RF connector)"
              ],
              [
                "PPE",
                "Personal protective equipment"
              ],
              [
                "PPP",
                "Precise Point Positioning"
              ],
              [
                "PTW",
                "Permit to work"
              ],
              [
                "QZSS",
                "Quasi-Zenith Satellite System"
              ],
              [
                "RF",
                "Radio frequency"
              ],
              [
                "RG",
                "Radio Guide (cable standard)"
              ],
              [
                "RHCP",
                "Right-hand circular polarization"
              ],
              [
                "ROV",
                "Remotely operated vehicle"
              ],
              [
                "SBAS",
                "Satellite-based augmentation system"
              ],
              [
                "SMA",
                "SubMiniature version A (type of RF connector)"
              ],
              [
                "SNR",
                "Signal-to-noise ratio"
              ],
              [
                "TDR",
                "Time domain reflectometer"
              ],
              [
                "TNC",
                "Threaded Neill-Concelman (type of RF connector)"
              ],
              [
                "VDC",
                "Volts direct current"
              ],
              [
                "VHF",
                "Very high frequency"
              ],
              [
                "VSAT",
                "Very small aperture terminal"
              ],
              [
                "VSWR",
                "Voltage standing wave ratio"
              ],
              [
                "WAAS",
                "Wide Area Augmentation System"
              ]
            ]
          }
        ]
      },
      {
        "id": "section-1-4",
        "title": "Installation standards",
        "sectionNumber": "1.4",
        "pageNumber": 7,
        "content": [
          "All equipment installations should conform to the following standards where applicable to ensure safety, structural integrity, and electromagnetic compatibility:",
          "\u2022 IEC 60092-352: Electrical installations in ships \u2013 Choice and installation of cables for low-voltage systems.",
          "\u2022 IEC 60529: Degrees of protection provided by enclosures (IP Code).",
          "\u2022 IEC 60945: Maritime navigation and radiocommunication equipment and systems \u2013 General requirements \u2013 Methods of testing and required test results.",
          "\u2022 IMO Resolution A.813(19): General requirements for electromagnetic compatibility (EMC) for all electrical and electronic ship's equipment.",
          "\u2022 NMEA 0400: Installation standard for marine electronic equipment."
        ]
      },
      {
        "id": "section-1-5",
        "title": "Safety",
        "sectionNumber": "1.5",
        "pageNumber": 8,
        "content": [
          "Safety is paramount during any antenna or cable installation on board marine vessels."
        ],
        "subsections": [
          {
            "id": "section-1-5-1",
            "title": "Policies and procedures",
            "sectionNumber": "1.5.1",
            "pageNumber": 8,
            "content": [
              "The following safety guidelines must be observed prior to starting any installation work:",
              "\u2022 Ensure that a valid Permit to Work (PTW) has been issued by the vessel's safety officer.",
              "\u2022 Perform a thorough Job Safety Analysis (JSA) / Toolbox Talk before commencing tasks.",
              "\u2022 Ensure all required Personal Protective Equipment (PPE) is worn, including hard hat, safety glasses, safety boots, high-visibility vest, and safety harness where required.",
              "\u2022 Verify that all high-power radio transmitters, radars, and satellite communication dishes in the vicinity are locked out and tagged out (LOTO) to prevent accidental radiation exposure."
            ],
            "callouts": [
              {
                "type": "warning",
                "title": "RADIO FREQUENCY (RF) HAZARD",
                "text": "High-power RF transmissions from marine radars, satellite dishes (VSAT, Inmarsat), and HF antennas produce dangerous non-ionizing electromagnetic radiation. Always ensure transmitters are powered off and tagged out before working near masts or antennas."
              }
            ]
          },
          {
            "id": "section-1-5-2",
            "title": "Working aloft",
            "sectionNumber": "1.5.2",
            "pageNumber": 8,
            "content": [
              "Working at heights involves significant risk of severe injury or death from falls.",
              "\u2022 Always use an approved full-body safety harness with dual shock-absorbing lanyards attached to rated anchor points.",
              "\u2022 Establish a safety drop zone beneath the work area on the deck below, with caution tape and signage to protect personnel from dropped objects.",
              "\u2022 Secure all hand tools, prep tools, and materials with tool lanyards or wrist tethers when working aloft.",
              "\u2022 Never work aloft alone. Maintain constant visual or two-way radio communication with a designated safety observer on deck."
            ]
          },
          {
            "id": "section-1-5-3",
            "title": "Mast and cable installation safety",
            "sectionNumber": "1.5.3",
            "pageNumber": 8,
            "content": [
              "\u2022 Check the structural integrity of masts, yardarms, and brackets prior to climbing or applying load.",
              "\u2022 Beware of sharp metal edges when pulling cables through bulkheads, cable transits, and conduit.",
              "\u2022 Follow vessel procedures for working over water if the antenna location overhangs the ship's side."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-2",
    "chapterNumber": 2,
    "title": "GNSS signals",
    "startPage": 9,
    "endPage": 10,
    "description": "GNSS constellation architectures (GPS, GLONASS, Galileo, BeiDou), broadcast frequencies, orbital configurations, and Veripos GNSS antennas.",
    "iconName": "Radio",
    "sections": [
      {
        "id": "section-2-1",
        "title": "GNSS satellites",
        "sectionNumber": "2.1",
        "pageNumber": 9,
        "content": [
          "GNSS satellites are grouped into constellations, with each constellation operated by a national or international authority. Veripos positioning systems utilize multi-constellation GNSS tracking (GPS, GLONASS, Galileo, and BeiDou) combined with precise orbit and clock corrections to achieve decimeter-to-centimeter level accuracy across the world's oceans."
        ],
        "subsections": [
          {
            "id": "section-2-1-1",
            "title": "GPS constellation",
            "sectionNumber": "2.1.1",
            "pageNumber": 9,
            "content": [
              "The Global Positioning System (GPS) is operated by the United States Space Force."
            ],
            "tables": [
              {
                "id": "table-gps-specs",
                "caption": "GPS Constellation Details",
                "headers": [
                  "Attribute",
                  "Details"
                ],
                "rows": [
                  [
                    "Configuration",
                    "31 operational satellites in 6 orbital planes"
                  ],
                  [
                    "Altitude",
                    "20,200 km (10,900 nautical miles)"
                  ],
                  [
                    "Orbital Inclination",
                    "55\u00b0"
                  ],
                  [
                    "Orbital Period",
                    "11 hours, 58 minutes"
                  ],
                  [
                    "Broadcast Frequencies",
                    "L1 (1575.42 MHz), L2 (1227.60 MHz), L5 (1176.45 MHz)"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-2-1-2",
            "title": "GLONASS constellation",
            "sectionNumber": "2.1.2",
            "pageNumber": 9,
            "content": [
              "GLONASS is operated by the Russian Federation and provides global satellite positioning coverage."
            ],
            "tables": [
              {
                "id": "table-glonass-specs",
                "caption": "GLONASS Constellation Details",
                "headers": [
                  "Attribute",
                  "Details"
                ],
                "rows": [
                  [
                    "Configuration",
                    "24 operational satellites in 3 orbital planes"
                  ],
                  [
                    "Altitude",
                    "19,100 km (10,300 nautical miles)"
                  ],
                  [
                    "Orbital Inclination",
                    "64.8\u00b0 (provides excellent high-latitude coverage)"
                  ],
                  [
                    "Orbital Period",
                    "11 hours, 15 minutes"
                  ],
                  [
                    "Broadcast Frequencies",
                    "G1 (1602.0 MHz + k \u00d7 562.5 kHz), G2 (1246.0 MHz + k \u00d7 437.5 kHz), G3 (1202.025 MHz)"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-2-1-3",
            "title": "Galileo constellation",
            "sectionNumber": "2.1.3",
            "pageNumber": 9,
            "content": [
              "Galileo is the European Union's civil global satellite navigation system."
            ],
            "tables": [
              {
                "id": "table-galileo-specs",
                "caption": "Galileo Constellation Details",
                "headers": [
                  "Attribute",
                  "Details"
                ],
                "rows": [
                  [
                    "Configuration",
                    "24 operational satellites + in-orbit spares in 3 orbital planes"
                  ],
                  [
                    "Altitude",
                    "23,222 km (12,539 nautical miles)"
                  ],
                  [
                    "Orbital Inclination",
                    "56\u00b0"
                  ],
                  [
                    "Orbital Period",
                    "14 hours, 5 minutes"
                  ],
                  [
                    "Broadcast Frequencies",
                    "E1 (1575.42 MHz), E5a (1176.45 MHz), E5b (1207.14 MHz), E6 (1278.75 MHz)"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-2-1-4",
            "title": "BeiDou constellation",
            "sectionNumber": "2.1.4",
            "pageNumber": 10,
            "content": [
              "BeiDou (BDS) is operated by China and features a hybrid constellation of MEO, GEO, and IGSO satellites."
            ],
            "tables": [
              {
                "id": "table-beidou-specs",
                "caption": "BeiDou Constellation Details",
                "headers": [
                  "Attribute",
                  "Details"
                ],
                "rows": [
                  [
                    "Configuration",
                    "27 MEO, 3 GEO, and 3 Inclined Geosynchronous (IGSO) satellites"
                  ],
                  [
                    "Altitude",
                    "21,528 km (MEO), 35,786 km (GEO / IGSO)"
                  ],
                  [
                    "Orbital Inclination",
                    "55\u00b0 (MEO / IGSO)"
                  ],
                  [
                    "Broadcast Frequencies",
                    "B1I (1561.098 MHz), B1C (1575.42 MHz), B2a (1176.45 MHz), B2b (1207.14 MHz), B3I (1268.52 MHz)"
                  ]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-2-2",
        "title": "Veripos GNSS antennas",
        "sectionNumber": "2.2",
        "pageNumber": 10,
        "content": [
          "Veripos supplies high-performance, marine-grade active GNSS antennas engineered for superior multipath rejection, phase centre stability, and high gain across all navigation bands.",
          "\u2022 Veripos V560: Combined GNSS and L-band antenna capable of tracking GPS, GLONASS, Galileo, BeiDou, and receiving Veripos L-band correction signals through a single coaxial cable.",
          "\u2022 Veripos V670: High-precision triple-frequency GNSS antenna designed for demanding offshore dynamic positioning and survey applications."
        ],
        "figures": [
          {
            "id": "fig-v560-gnss-antenna",
            "figureNumber": "Figure 2.1",
            "caption": "Veripos V560 Combined GNSS / L-band Antenna",
            "src": "/assets/figures/page_10_fig_1.png",
            "alt": "Veripos V560 GNSS Antenna",
            "pageRef": 10,
            "details": "Compact marine-grade radome with high-rejection ceramic patch array and integrated low-noise amplifier (LNA)."
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-3",
    "chapterNumber": 3,
    "title": "L-band signals",
    "startPage": 11,
    "endPage": 11,
    "description": "L-band geostationary augmentation satellites, Inmarsat broadcast slots, correction data delivery, and antenna line-of-sight requirements.",
    "iconName": "Satellite",
    "sections": [
      {
        "id": "section-3-1",
        "title": "L-band satellites",
        "sectionNumber": "3.1",
        "pageNumber": 11,
        "content": [
          "Five geostationary Inmarsat satellites positioned in geostationary orbit (approx. 35,786 km altitude) broadcast Veripos differential and PPP correction data globally between 75\u00b0N and 75\u00b0S latitudes.",
          "Because geostationary satellites remain in a fixed position relative to the equator, vessel antennas must maintain an unobstructed line-of-sight toward the satellite's orbital slot."
        ],
        "tables": [
          {
            "id": "table-inmarsat-satellites",
            "caption": "Inmarsat Geostationary Satellite Constellation",
            "headers": [
              "Satellite Identifier",
              "Orbital Longitude",
              "Primary Maritime Coverage Region"
            ],
            "rows": [
              [
                "AOR-W (Atlantic Ocean Region West)",
                "54.0\u00b0 W",
                "North & South America, Western Europe, Atlantic Ocean"
              ],
              [
                "AOR-E (Atlantic Ocean Region East)",
                "15.5\u00b0 W",
                "Europe, Africa, Eastern Americas, Atlantic Ocean"
              ],
              [
                "25E (Europe / Middle East)",
                "25.0\u00b0 E",
                "Europe, Mediterranean, Middle East, Africa, Western Asia"
              ],
              [
                "IOR (Indian Ocean Region)",
                "64.0\u00b0 E",
                "Indian Ocean, Middle East, East Africa, South Asia, W Australia"
              ],
              [
                "POR (Pacific Ocean Region)",
                "178.0\u00b0 E",
                "Pacific Ocean, East Asia, Australasia, North America West Coast"
              ]
            ]
          }
        ]
      },
      {
        "id": "section-3-2",
        "title": "Veripos L-band antennas",
        "sectionNumber": "3.2",
        "pageNumber": 11,
        "content": [
          "Veripos L-band signals operate in the 1525 to 1559 MHz frequency band. The Veripos V560 antenna receives both GNSS navigation frequencies and L-band correction signals simultaneously using an integrated internal diplexer and LNA.",
          "Mounting considerations for L-band reception require paying careful attention to vessel superstructure and equipment that might block the low-elevation look angle to the geostationary satellite when the vessel rolls or changes heading."
        ],
        "figures": [
          {
            "id": "fig-lband-antenna",
            "figureNumber": "Figure 3.1",
            "caption": "Veripos L-band Antenna Reception Pattern",
            "src": "/assets/figures/page_11_fig_2.png",
            "alt": "L-band antenna diagram",
            "pageRef": 11
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-4",
    "chapterNumber": 4,
    "title": "MF signals",
    "startPage": 12,
    "endPage": 12,
    "description": "Medium Frequency (MF) terrestrial IALA beacon transmissions, groundwave signal propagation characteristics, and Veripos V460 beacon whip antenna installation.",
    "iconName": "Wifi",
    "sections": [
      {
        "id": "section-4-1",
        "title": "MF transmission",
        "sectionNumber": "4.1",
        "pageNumber": 12,
        "content": [
          "Medium-frequency (MF) signals are broadcast from terrestrial-based radio beacons operated by national lighthouse and marine navigation authorities (IALA).",
          "MF transmissions operate in the frequency range from 283.5 kHz to 325.0 kHz. Unlike satellite signals, MF signals travel as groundwaves along the curvature of the Earth's surface over seawater, providing reliable coastal coverage up to 100\u2013300 nautical miles from the beacon transmitter.",
          "MF reception can be affected by atmospheric noise (lightning), local electrical noise from vessel generators, variable frequency drives (VFDs), and heavy industrial machinery."
        ]
      },
      {
        "id": "section-4-2",
        "title": "Veripos MF antennas",
        "sectionNumber": "4.2",
        "pageNumber": 12,
        "content": [
          "The Veripos V460 is an active MF beacon whip antenna designed to receive coastal differential corrections.",
          "Installation guidelines for the V460 MF antenna:",
          "\u2022 Mount the antenna vertically as high as practical above the vessel deck.",
          "\u2022 Ensure the antenna base bracket is firmly bonded to the vessel's hull ground / earth structure using heavy copper grounding braid.",
          "\u2022 Keep the MF whip well separated from vessel generators, power transformers, inverter drives, and high-power cables."
        ],
        "figures": [
          {
            "id": "fig-v460-mf-antenna",
            "figureNumber": "Figure 4.1",
            "caption": "Veripos V460 Active MF Beacon Whip Antenna",
            "src": "/assets/figures/page_12_fig_1.png",
            "alt": "Veripos V460 MF Antenna",
            "pageRef": 12
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-5",
    "chapterNumber": 5,
    "title": "Common installation problems",
    "startPage": 13,
    "endPage": 16,
    "description": "Deep dive into RF installation failure modes: signal masking, multipath reflections, vessel transmitter interference (Radar, VSAT, Inmarsat), and Quantum SNR diagnostic analysis.",
    "iconName": "AlertTriangle",
    "sections": [
      {
        "id": "section-5-1",
        "title": "Signal masking",
        "sectionNumber": "5.1",
        "pageNumber": 13,
        "content": [
          "Mounting antennas in locations where the vessel superstructure, cranes, exhausts, funnels, or satellite communication domes obstruct the line-of-sight to satellites causes signal masking.",
          "When a satellite signal is masked, the receiver loses carrier lock, reducing the number of tracked satellites and degrading satellite geometry (increasing PDOP / HDOP). In severe cases, masking of the L-band correction satellite results in loss of high-accuracy differential positioning.",
          "Antennas must be installed with an unobstructed 360\u00b0 hemispherical view of the sky down to an elevation angle of 5\u00b0 above the horizon."
        ],
        "figures": [
          {
            "id": "fig-signal-masking",
            "figureNumber": "Figure 5.1",
            "caption": "Signal Masking Caused by Superstructure Obstructions",
            "src": "/assets/figures/page_13_fig_1.png",
            "alt": "Signal masking diagram",
            "pageRef": 13,
            "details": "Diagram showing line-of-sight blockage when an antenna is mounted too close to large bulkheads or mast structures."
          }
        ]
      },
      {
        "id": "section-5-2",
        "title": "Signal multipath",
        "sectionNumber": "5.2",
        "pageNumber": 14,
        "content": [
          "Multipath signal reception occurs when a GNSS or L-band signal is received both directly from the satellite and indirectly after reflecting off metallic surfaces on the vessel (decks, bulkheads, helidecks, cranes) or the sea surface.",
          "Because the reflected signal travels a longer distance, it arrives with a slight time delay and phase shift, interfering with the direct signal and introducing errors in pseudorange and carrier phase measurements.",
          "To minimize multipath:",
          "\u2022 Mount the antenna higher than large horizontal metallic planes and reflective bulkheads.",
          "\u2022 Use antennas with high multipath rejection characteristics (such as the Veripos V560 with internal ground plane).",
          "\u2022 Avoid mounting antennas near curved or angled metal surfaces that act as RF reflectors."
        ],
        "figures": [
          {
            "id": "fig-multipath-diagram",
            "figureNumber": "Figure 5.2",
            "caption": "Direct vs Reflected Multipath Signal Propagation",
            "src": "/assets/figures/page_14_fig_1.png",
            "alt": "Signal multipath diagram",
            "pageRef": 14
          }
        ]
      },
      {
        "id": "section-5-3",
        "title": "Interference from transmitting vessel devices",
        "sectionNumber": "5.3",
        "pageNumber": 15,
        "content": [
          "Modern vessels carry numerous high-power RF transmitters that can emit out-of-band harmonics or direct energy into GNSS and L-band antenna passbands."
        ],
        "subsections": [
          {
            "id": "section-5-3-1",
            "title": "Common sources of interference",
            "sectionNumber": "5.3.1",
            "pageNumber": 15,
            "content": [
              "The most common sources of RF interference encountered in marine installations are:",
              "\u2022 Marine Radars: S-band (3 GHz) and X-band (9 GHz) pulse radars generate peak pulse powers of 10 kW to 50 kW. The radar sweep directly into an antenna can burn out the sensitive GaAs LNA front-end or cause severe pulse jamming.",
              "\u2022 Satellite Communications: Inmarsat-C, FleetBroadband, and VSAT terminals transmit at high EIRP levels in frequency bands close to L-band and GNSS frequencies.",
              "\u2022 VHF and UHF Radios: High-power voice and data transceivers (156\u2013174 MHz and 450\u2013470 MHz) emit intermodulation products and harmonics that degrade GNSS signal-to-noise ratios (SNR).",
              "\u2022 High-Frequency (HF) SSB Transmitters: Transmit powers up to 1 kW can induce dangerous RF currents into unshielded or poorly grounded coaxial cables."
            ]
          },
          {
            "id": "section-5-3-2",
            "title": "Identifying interference",
            "sectionNumber": "5.3.2",
            "pageNumber": 16,
            "content": [
              "Interference symptoms include sudden drops in satellite tracking count, erratic carrier-to-noise (C/No) fluctuations, periodic positioning loss synchronized with radar rotation, or total receiver unlock during radio voice transmissions.",
              "Quantum, a Veripos software application, provides real-time GNSS and L-band signal-to-noise ratio (SNR) spectrum analysis tools to diagnose interference sources and identify the interfering frequency bands."
            ],
            "figures": [
              {
                "id": "fig-quantum-snr",
                "figureNumber": "Figure 5.3",
                "caption": "Veripos Quantum SNR Signal Analysis Display",
                "src": "/assets/figures/page_16_fig_1.png",
                "alt": "Quantum SNR diagnostic display",
                "pageRef": 16
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-6",
    "chapterNumber": 6,
    "title": "Antenna installation guidance",
    "startPage": 17,
    "endPage": 19,
    "description": "Safe antenna spacing requirements, safe clearance matrix, GNSS/L-band/MF positioning rules, and marine-grade stainless steel bracket mounting.",
    "iconName": "Sliders",
    "sections": [
      {
        "id": "section-6-1",
        "title": "Antenna spacing requirements",
        "sectionNumber": "6.1",
        "pageNumber": 17,
        "content": [
          "To prevent RF saturation, LNA damage, and signal masking, antennas must be installed adhering to minimum separation distance criteria from transmitting equipment."
        ],
        "tables": [
          {
            "id": "table-safe-spacing",
            "caption": "Minimum Safe Antenna Separation Distances",
            "headers": [
              "Transmitter / Equipment Type",
              "Minimum Vertical Separation",
              "Minimum Horizontal Separation (Outside Beam)",
              "In-Beam Horizontal Separation"
            ],
            "rows": [
              [
                "Marine Radar (S-Band / X-Band)",
                "> 3 m (> 10 ft)",
                "> 10 m (> 33 ft)",
                "DO NOT MOUNT IN BEAM ZONE (\u00b115\u00b0)"
              ],
              [
                "Inmarsat / VSAT / FleetBroadband",
                "> 3 m (> 10 ft)",
                "> 5 m (> 16.5 ft)",
                "> 10 m (> 33 ft)"
              ],
              [
                "VHF / UHF Marine Transceiver",
                "> 1.5 m (> 5 ft)",
                "> 1.5 m (> 5 ft)",
                "Not applicable"
              ],
              [
                "HF SSB Whip Antenna",
                "> 5 m (> 16.5 ft)",
                "> 5 m (> 16.5 ft)",
                "Not applicable"
              ],
              [
                "Adjacent GNSS Antenna (Baseline)",
                "> 0.3 m (> 1.0 ft)",
                "> 0.5 m (> 1.6 ft)",
                "> 1.0 m (> 3.3 ft) for heading"
              ]
            ]
          }
        ],
        "figures": [
          {
            "id": "fig-antenna-spacing-diagram",
            "figureNumber": "Figure 6.1",
            "caption": "Antenna Safe Separation and Clear Sky Horizon Zones",
            "src": "/assets/figures/page_17_fig_1.png",
            "alt": "Antenna spacing diagram",
            "pageRef": 17
          }
        ]
      },
      {
        "id": "section-6-2",
        "title": "GNSS antenna installation",
        "sectionNumber": "6.2",
        "pageNumber": 17,
        "content": [
          "\u2022 Mount the antenna at the highest practical point on the vessel (masthead or dedicated radar arch) with an unobstructed view of the sky down to 5\u00b0 above the horizon in all directions.",
          "\u2022 Ensure the mounting pipe or mast is structurally rigid to prevent vibration and sway in heavy seas.",
          "\u2022 When installing dual GNSS antennas for heading determination, ensure a rigid physical baseline separation between antenna reference points (ARP) with no flexure."
        ]
      },
      {
        "id": "section-6-3",
        "title": "L-band antenna installation",
        "sectionNumber": "6.3",
        "pageNumber": 18,
        "content": [
          "\u2022 As with the GNSS antenna, install the L-band antenna with an unobstructed view toward the geostationary satellite arc across the entire expected vessel operational theatre.",
          "\u2022 In dynamic positioning vessels with redundant receivers, install primary and secondary L-band antennas on opposite sides of the vessel mast to prevent single-source mast masking during vessel turns."
        ],
        "figures": [
          {
            "id": "fig-redundant-antennas",
            "figureNumber": "Figure 6.2",
            "caption": "Redundant Antenna Placement on Vessel Mast Yardarms",
            "src": "/assets/figures/page_18_fig_1.png",
            "alt": "Redundant antenna placement",
            "pageRef": 18
          }
        ]
      },
      {
        "id": "section-6-4",
        "title": "MF antenna installation",
        "sectionNumber": "6.4",
        "pageNumber": 18,
        "content": [
          "\u2022 Mount the MF whip antenna clear of large metal surfaces and elevated above deck structures.",
          "\u2022 Ensure the bracket base is securely bonded to the ship's metallic ground with clean, unpainted contact surfaces."
        ]
      },
      {
        "id": "section-6-5",
        "title": "Antenna mounting brackets and fixings",
        "sectionNumber": "6.5",
        "pageNumber": 19,
        "content": [
          "The mounting brackets and fixings supplied by Veripos are manufactured from marine-grade 316 (A4) stainless steel to prevent galvanic corrosion.",
          "\u2022 Use supplied stainless steel U-bolts, lock washers, and nyloc nuts to secure the bracket to the mounting pole (nominal pipe diameter 38 mm to 50 mm / 1.5 inch to 2.0 inch).",
          "\u2022 Apply anti-seize compound (such as Tef-Gel) to all stainless steel threads prior to assembly to prevent galling.",
          "\u2022 Ensure the antenna is mounted plumb (vertical) with the connector facing downward."
        ],
        "figures": [
          {
            "id": "fig-mounting-bracket",
            "figureNumber": "Figure 6.3",
            "caption": "Veripos Marine Stainless Steel Antenna Mounting Bracket Assembly",
            "src": "/assets/figures/page_19_fig_1.png",
            "alt": "Mounting bracket assembly",
            "pageRef": 19
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-7",
    "chapterNumber": 7,
    "title": "Antenna installation examples",
    "startPage": 20,
    "endPage": 22,
    "description": "Visual analysis of real-world installations: 4 bad installation case studies with identified issues and 3 good practice case studies with verified layout diagrams.",
    "iconName": "Eye",
    "sections": [
      {
        "id": "section-7-1",
        "title": "Bad antenna installation examples",
        "sectionNumber": "7.1",
        "pageNumber": 20,
        "content": [
          "The following real-world examples illustrate poor installation practices that resulted in operational degradation, signal loss, or hardware failure."
        ],
        "subsections": [
          {
            "id": "section-7-1-1",
            "title": "Bad example 1: In Radar Scanner Beam",
            "sectionNumber": "7.1.1",
            "pageNumber": 20,
            "content": [
              "Issue: A GNSS antenna is installed directly on the yardarm beneath the rotating radar scanner.",
              "Impact: Radar pulses overloaded the LNA front-end, causing intermittent position dropouts and long-term receiver degradation.",
              "Corrective Action: Move the antenna to a dedicated raised stub mast located above the radar horizontal sweep plane."
            ],
            "figures": [
              {
                "id": "fig-bad-example-1",
                "figureNumber": "Figure 7.1",
                "caption": "Bad Example 1: Antenna Installed in Direct Radar Beam Zone",
                "src": "/assets/figures/page_20_fig_1.png",
                "alt": "Bad installation example 1",
                "pageRef": 20
              }
            ]
          },
          {
            "id": "section-7-1-2",
            "title": "Bad example 2: Masking by VSAT Dome",
            "sectionNumber": "7.1.2",
            "pageNumber": 20,
            "content": [
              "Issue: Antenna mounted in close proximity behind a large VSAT satellite communications dome.",
              "Impact: Severe physical signal masking of low-elevation GNSS and L-band satellites over a 60\u00b0 azimuth sector, accompanied by high-power transmitter desensitization.",
              "Corrective Action: Relocate antenna to the opposite side of the mast or onto a dedicated antenna platform."
            ],
            "figures": [
              {
                "id": "fig-bad-example-2",
                "figureNumber": "Figure 7.2",
                "caption": "Bad Example 2: Severe Masking Caused by Adjacent VSAT Dome",
                "src": "/assets/figures/page_20_fig_2.png",
                "alt": "Bad installation example 2",
                "pageRef": 20
              }
            ]
          },
          {
            "id": "section-7-1-3",
            "title": "Bad example 3: Rail Mount Behind Funnel & Crane",
            "sectionNumber": "7.1.3",
            "pageNumber": 21,
            "content": [
              "Issue: GNSS antenna mounted low on a deck handrail directly behind the vessel exhaust funnel and crane housing.",
              "Impact: Continuous multipath reflections from the crane boom and soot accumulation on the radome degrading RF reception.",
              "Corrective Action: Elevate antenna onto the main mast top platform."
            ],
            "figures": [
              {
                "id": "fig-bad-example-3",
                "figureNumber": "Figure 7.3",
                "caption": "Bad Example 3: Low Rail Mount Obstructed by Funnel and Crane",
                "src": "/assets/figures/page_21_fig_1.png",
                "alt": "Bad installation example 3",
                "pageRef": 21
              }
            ]
          },
          {
            "id": "section-7-1-4",
            "title": "Bad example 4: Clustered Antennas & Unsecured Cables",
            "sectionNumber": "7.1.4",
            "pageNumber": 21,
            "content": [
              "Issue: Multiple antennas mounted in a tight cluster less than 0.2 m apart with loose, unstrapped coaxial cables hanging in the wind.",
              "Impact: Severe mutual RF coupling and cable fatigue failure caused by wind vibration.",
              "Corrective Action: Stagger antennas at minimum 0.5 m spacing and clamp all cables securely to cable trays every 30 cm."
            ],
            "figures": [
              {
                "id": "fig-bad-example-4",
                "figureNumber": "Figure 7.4",
                "caption": "Bad Example 4: Clustered Antennas with Loose Cable Loops",
                "src": "/assets/figures/page_21_fig_2.png",
                "alt": "Bad installation example 4",
                "pageRef": 21
              }
            ]
          }
        ]
      },
      {
        "id": "section-7-2",
        "title": "Good antenna installation examples",
        "sectionNumber": "7.2",
        "pageNumber": 22,
        "content": [
          "The following examples demonstrate exemplary marine antenna installation practices."
        ],
        "subsections": [
          {
            "id": "section-7-2-1",
            "title": "Good example 1: Clean Masthead Tower Mount",
            "sectionNumber": "7.2.1",
            "pageNumber": 22,
            "content": [
              "Description: Antenna installed on a rigid stainless steel masthead pedestal extending well above all surrounding vessel equipment.",
              "Features: 360\u00b0 unobstructed sky view down to 5\u00b0 elevation, zero multipath reflective surfaces, and fully enclosed cable conduit."
            ],
            "figures": [
              {
                "id": "fig-good-example-1",
                "figureNumber": "Figure 7.5",
                "caption": "Good Example 1: Masthead Pedestal with Full 360\u00b0 Horizon View",
                "src": "/assets/figures/page_22_fig_1.png",
                "alt": "Good installation example 1",
                "pageRef": 22
              }
            ]
          },
          {
            "id": "section-7-2-2",
            "title": "Good example 2: Staggered Yardarm Mount with Drip Loops",
            "sectionNumber": "7.2.2",
            "pageNumber": 22,
            "content": [
              "Description: Dual antennas mounted on yardarm outriggers with 2.0 m baseline separation.",
              "Features: Stainless marine brackets, UV-resistant stainless banding, proper cable drip loops, and complete 3-layer weatherproofing."
            ],
            "figures": [
              {
                "id": "fig-good-example-2",
                "figureNumber": "Figure 7.6",
                "caption": "Good Example 2: Staggered Outrigger Mount with Drip Loops and Clamping",
                "src": "/assets/figures/page_22_fig_2.png",
                "alt": "Good installation example 2",
                "pageRef": 22
              }
            ]
          },
          {
            "id": "section-7-2-3",
            "title": "Good example 3: Dedicated Survey Tower",
            "sectionNumber": "7.2.3",
            "pageNumber": 22,
            "content": [
              "Description: Heavy-duty triangulated survey tower designed specifically for high-precision GNSS positioning.",
              "Features: Rigid anti-vibration mount, time domain tested cables, and grounding to hull."
            ],
            "figures": [
              {
                "id": "fig-good-example-3",
                "figureNumber": "Figure 7.7",
                "caption": "Good Example 3: Dedicated Triangulated Survey Tower",
                "src": "/assets/figures/page_22_fig_3.png",
                "alt": "Good installation example 3",
                "pageRef": 22
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-8",
    "chapterNumber": 8,
    "title": "Coaxial cable installation",
    "startPage": 23,
    "endPage": 37,
    "description": "Maximum allowable cable lengths, attenuation specifications, routing best practices, Roxtec transits, drip loops, step-by-step connector terminations (LMR400, LMR240, Heliax LDF4-50), and 3-layer weatherproofing.",
    "iconName": "Cable",
    "sections": [
      {
        "id": "section-8-1",
        "title": "Maximum recommended cable lengths",
        "sectionNumber": "8.1",
        "pageNumber": 23,
        "content": [
          "It is necessary to limit RF signal attenuation between the antenna LNA and the below deck receiver. The maximum allowable total cable loss for Veripos GNSS and L-band installations is 10 dB at 1.5 GHz (including connector insertion losses).",
          "Selecting a cable that exceeds maximum recommended length will result in degraded signal-to-noise ratio, increased tracking lock time, and increased susceptibility to RF interference."
        ],
        "tables": [
          {
            "id": "table-max-cable-lengths",
            "caption": "Maximum Recommended Coaxial Cable Lengths (10 dB Loss Limit at 1.5 GHz)",
            "headers": [
              "Cable Type",
              "Diameter",
              "Attenuation at 1.5 GHz",
              "Max Recommended Length (m)",
              "Max Recommended Length (ft)"
            ],
            "rows": [
              [
                "Belden RG-214",
                "10.8 mm (0.425 inch)",
                "37.0 dB/100m",
                "20 m",
                "65 ft"
              ],
              [
                "Times Microwave LMR-240",
                "6.1 mm (0.240 inch)",
                "32.4 dB/100m",
                "30 m",
                "100 ft"
              ],
              [
                "Times Microwave LMR-400",
                "10.3 mm (0.405 inch)",
                "16.8 dB/100m",
                "60 m",
                "200 ft"
              ],
              [
                "CommScope Andrew Heliax LDF4-50A",
                "16.0 mm (0.500 inch)",
                "8.8 dB/100m",
                "100 m",
                "330 ft"
              ]
            ]
          }
        ]
      },
      {
        "id": "section-8-2",
        "title": "Cable specifications",
        "sectionNumber": "8.2",
        "pageNumber": 23,
        "content": [
          "All coaxial cables used in Veripos marine installations must meet the following general specifications:",
          "\u2022 Characteristic Impedance: 50 \u00b1 2 Ohms.",
          "\u2022 Shielding Effectiveness: > 90 dB (double-shielded or solid copper corrugated outer conductor).",
          "\u2022 Outer Jacket: UV-resistant, marine grade, Low Smoke Zero Halogen (LSZH) or flame-retardant polyethylene.",
          "\u2022 Velocity of Propagation: 84% to 88% (foam dielectric)."
        ]
      },
      {
        "id": "section-8-3",
        "title": "Preparation",
        "sectionNumber": "8.3",
        "pageNumber": 24,
        "content": [
          "Before installing coaxial cable, follow these preparatory steps:",
          "\u2022 Measure and verify the proposed cable route from masthead to equipment rack, adding 2 to 3 meters for service loops and terminations.",
          "\u2022 Inspect the cable drum for visible shipping damage, crushed jackets, or kinks.",
          "\u2022 Perform a pre-installation continuity and insulation resistance test with a multimeter or TDR.",
          "\u2022 Ensure minimum bend radius limits are observed at all times during pulling."
        ],
        "callouts": [
          {
            "type": "warning",
            "title": "CABLE BENDING AND PULL TENSION",
            "text": "Exceeding the minimum dynamic bend radius or applying excessive pulling tension during cable pulling will deform the internal foam dielectric, alter cable characteristic impedance, and cause high return loss (VSWR)."
          }
        ]
      },
      {
        "id": "section-8-4",
        "title": "Cable routing",
        "sectionNumber": "8.4",
        "pageNumber": 25,
        "content": [
          "In most cases, the installation of coaxial cables is much easier when gravity helps the pull (i.e. pulling from masthead downward toward the equipment room).",
          "Key cable routing rules:",
          "\u2022 Cable Support: Support cables along vertical and horizontal runs using marine cable tray, stainless steel cable ties, or UV-resistant clips spaced every 300 mm to 450 mm (12 to 18 inches).",
          "\u2022 Avoid Sharp Edges: Use rubber grommets, nylon saddles, or protective spiral wrap where cables pass over structural steel flanges.",
          "\u2022 Transit Frames: Route cables through approved transit frames (e.g. Roxtec or MCT Brattberg) when penetrating watertight bulkheads or fire-rated decks.",
          "\u2022 Drip Loops: Always form a downward drip loop immediately prior to entering bulkhead glands or connectors to prevent rainwater from running into fittings.",
          "\u2022 Separation from Power Cables: Maintain at least 300 mm (12 inches) clearance from high-voltage AC cables and VFD power conduits."
        ],
        "callouts": [
          {
            "type": "note",
            "title": "PRE-EXISTING CABLE RE-USE",
            "text": "Not all cable faults are visible. Before reusing pre-existing vessel coaxial cables, thoroughly test continuity, DC resistance, insulation resistance (> 500 MOhm), and RF attenuation using a calibrated TDR / network analyzer."
          }
        ],
        "figures": [
          {
            "id": "fig-cable-routing-clamping",
            "figureNumber": "Figure 8.1",
            "caption": "Coaxial Cable Clamping and Roxtec Transit Frame Routing",
            "src": "/assets/figures/page_25_fig_1.png",
            "alt": "Cable routing diagram",
            "pageRef": 25
          }
        ]
      },
      {
        "id": "section-8-5",
        "title": "Cable tails",
        "sectionNumber": "8.5",
        "pageNumber": 27,
        "content": [
          "When the main cable run is completed with heavy corrugated cable (such as 1/2 inch Heliax LDF4-50A), do not connect the stiff main cable directly to the antenna.",
          "Vessel vibration and wind action will induce mechanical fatigue into the antenna connector, eventually snapping the connector pin or cracking the antenna radome base.",
          "Always install a flexible 1 to 2 meter jumper tail (using flexible LMR-240 or RG-214) between the antenna and the main cable termination box or junction connector."
        ],
        "figures": [
          {
            "id": "fig-cable-tail-assembly",
            "figureNumber": "Figure 8.2",
            "caption": "Flexible Cable Tail Connection to Antenna",
            "src": "/assets/figures/page_27_fig_1.png",
            "alt": "Cable tail assembly",
            "pageRef": 27
          }
        ]
      },
      {
        "id": "section-8-6",
        "title": "Cable termination",
        "sectionNumber": "8.6",
        "pageNumber": 28,
        "content": [
          "Proper connector installation is critical to RF performance and long-term weather tightness. Follow the exact manufacturer termination procedures for each cable and connector type."
        ],
        "subsections": [
          {
            "id": "section-8-6-1",
            "title": "LMR-400 \u2013 Times Microwave EZ-400-NMH-X N-Type male connector",
            "sectionNumber": "8.6.1",
            "pageNumber": 28,
            "content": [
              "The Times Microwave EZ-400-NMH-X is a high-performance non-solder crimp-style N-Type male connector engineered specifically for LMR-400 cable."
            ],
            "steps": [
              {
                "stepNumber": 1,
                "title": "Slide Components & Cut Square",
                "instruction": "Slide adhesive-lined heat shrink tubing and the crimp collar onto the cable. Cut the end of the cable square at 90\u00b0 using a sharp cable cutter or Stanley knife.",
                "figureSrc": "/assets/figures/page_29_fig_1.png",
                "figureCaption": "Step 1: Sliding heat shrink and crimp collar onto cable and squaring end."
              },
              {
                "stepNumber": 2,
                "title": "Strip Cable with Prep Tool",
                "instruction": "Insert cable into the CST-400 cable prep tool and rotate clockwise until cutting resistance diminishes. Strip outer jacket, braid, and dielectric to exact specified dimensions.",
                "figureSrc": "/assets/figures/page_29_fig_2.png",
                "figureCaption": "Step 2: Stripping cable using CST-400 preparation tool."
              },
              {
                "stepNumber": 3,
                "title": "Remove Residual Plastic & Deburr Conductor",
                "instruction": "Remove any residual plastic or dielectric adhesive from the center conductor. Deburr and chamfer the tip of the center conductor using a deburring tool or fine file.",
                "figureSrc": "/assets/figures/page_30_fig_1.png",
                "figureCaption": "Step 3: Deburring and cleaning center copper conductor."
              },
              {
                "stepNumber": 4,
                "title": "Flare Outer Braid",
                "instruction": "Gently flare the braided wire shield outward away from the dielectric core. Ensure no aluminum foil shield residue touches the center conductor.",
                "figureSrc": "/assets/figures/page_31_fig_1.png",
                "figureCaption": "Step 4: Flaring braid away from dielectric core."
              },
              {
                "stepNumber": 5,
                "title": "Insert Cable into Connector Body",
                "instruction": "Push the cable firmly into the connector body until the center conductor fully seats into the spring-finger contact and the dielectric sits flush against the internal stop.",
                "figureSrc": "/assets/figures/page_31_fig_2.png",
                "figureCaption": "Step 5: Inserting cable into connector body."
              },
              {
                "stepNumber": 6,
                "title": "Position Crimp Collar",
                "instruction": "Slide the crimp collar forward over the connector sleeve and the flared outer braid strands.",
                "figureSrc": "/assets/figures/page_31_fig_3.png",
                "figureCaption": "Step 6: Positioning crimp collar over braid."
              },
              {
                "stepNumber": 7,
                "title": "Crimp Collar with Hex Die",
                "instruction": "Position the CT-400 crimp tool (0.429 inch hex die) against the shoulder of the connector and cycle the tool until the ratchet mechanism releases.",
                "figureSrc": "/assets/figures/page_31_fig_4.png",
                "figureCaption": "Step 7: Crimping collar with 0.429 inch hex crimp die."
              },
              {
                "stepNumber": 8,
                "title": "Apply Heat Shrink Seal",
                "instruction": "Slide the adhesive-lined heat shrink over the connector rear and apply heat with a heat gun, heating from the center outward until adhesive sealant flows from both ends.",
                "figureSrc": "/assets/figures/page_31_fig_5.png",
                "figureCaption": "Step 8: Applying adhesive-lined heat shrink seal."
              }
            ]
          },
          {
            "id": "section-8-6-2",
            "title": "LMR-240 \u2013 Times Microwave EZ-240-TM-X TNC male connector",
            "sectionNumber": "8.6.2",
            "pageNumber": 32,
            "content": [
              "The Times Microwave EZ-240-TM-X connector terminates LMR-240 cable to a male TNC connector for direct connection to Veripos antennas or receiver rear panels.",
              "1. Slide heat shrink and crimp sleeve onto cable.",
              "2. Strip jacket, braid, and dielectric using CST-240 prep tool.",
              "3. Deburr center conductor tip.",
              "4. Flare braid and push cable into connector body until positive seating.",
              "5. Crimp collar with 0.255 inch hex die (CT-240/CT-300 tool).",
              "6. Apply adhesive-lined heat shrink."
            ],
            "figures": [
              {
                "id": "fig-lmr240-tnc",
                "figureNumber": "Figure 8.3",
                "caption": "Times Microwave EZ-240-TM-X TNC Connector Assembly",
                "src": "/assets/figures/page_32_fig_1.png",
                "alt": "LMR-240 TNC connector",
                "pageRef": 32
              }
            ]
          },
          {
            "id": "section-8-6-3",
            "title": "LMR-240 \u2013 Times Microwave EZ-240-NMH-X N-Type male connector",
            "sectionNumber": "8.6.3",
            "pageNumber": 32,
            "content": [
              "The Times Microwave EZ-240-NMH-X terminates LMR-240 cable to an N-Type male fitting for connection to bulkheads and surge arrestors.",
              "Follow identical preparation and stripping dimensions as the EZ-240-TM-X, crimping with the standard 0.255 inch hex die."
            ]
          },
          {
            "id": "section-8-6-4",
            "title": "LDF4-50 Heliax \u2013 CommScope L4TNM-PSA N-Type male connector",
            "sectionNumber": "8.6.4",
            "pageNumber": 33,
            "content": [
              "The CommScope L4TNM-PSA Positive Stop N-Type connector is designed for 1/2 inch corrugated copper Heliax cable. It requires no torque wrench due to its integrated mechanical stop."
            ],
            "steps": [
              {
                "stepNumber": 1,
                "title": "Square Cut Cable End",
                "instruction": "Using a hacksaw, cut the end of the LDF4-50A cable at 90\u00b0 across the corrugation to leave a clean, square edge. Do not crush outer tube.",
                "figureSrc": "/assets/figures/page_34_fig_1.png",
                "figureCaption": "Step 1: Square cutting LDF4-50 cable with hacksaw."
              },
              {
                "stepNumber": 2,
                "title": "Strip Outer Polyethylene Jacket",
                "instruction": "Cut and remove the outer jacket back 25 mm (1.0 inch) from the cable end using a knife or automated prep tool.",
                "figureSrc": "/assets/figures/page_34_fig_2.png",
                "figureCaption": "Step 2: Stripping outer jacket."
              },
              {
                "stepNumber": 3,
                "title": "Trim Outer Copper Corrugation",
                "instruction": "Cut through the outer copper conductor at the crest of the corrugation, cutting around the circumference.",
                "figureSrc": "/assets/figures/page_34_fig_3.png",
                "figureCaption": "Step 3: Cutting outer copper corrugated conductor."
              },
              {
                "stepNumber": 4,
                "title": "Expose Center Conductor & Remove Foam",
                "instruction": "Scrape away foam dielectric and adhesive, leaving the center copper conductor cleanly exposed.",
                "figureSrc": "/assets/figures/page_35_fig_1.png",
                "figureCaption": "Step 4: Removing foam dielectric."
              },
              {
                "stepNumber": 5,
                "title": "Fit O-Ring and Apply Silicone Grease",
                "instruction": "Place the sealing O-ring into the first valley of the outer corrugated conductor and apply a thin film of silicone grease.",
                "figureSrc": "/assets/figures/page_35_fig_2.png",
                "figureCaption": "Step 5: Fitting lubricated O-ring seal."
              },
              {
                "stepNumber": 6,
                "title": "Taper & Deburr Center Conductor",
                "instruction": "Taper the end of the center conductor using a fine flat file or deburring tool to facilitate smooth entry into the connector socket.",
                "figureSrc": "/assets/figures/page_36_fig_1.png",
                "figureCaption": "Step 6: Chamfering center conductor tip."
              },
              {
                "stepNumber": 7,
                "title": "Clean Filings with Wire Brush",
                "instruction": "Remove any copper filings, metal burrs, or foam residue using a clean wire brush. Ensure no metal particles remain inside.",
                "figureSrc": "/assets/figures/page_37_fig_1.png",
                "figureCaption": "Step 7: Cleaning debris with wire brush."
              },
              {
                "stepNumber": 8,
                "title": "Fit Connector and Tighten to Positive Stop",
                "instruction": "Push connector body onto cable and engage clamping nut threads. Using two spanners (22 mm), tighten until the clamping nut contacts the positive stop shoulder.",
                "figureSrc": "/assets/figures/page_37_fig_2.png",
                "figureCaption": "Step 8: Tightening connector to positive mechanical stop."
              }
            ]
          },
          {
            "id": "section-8-6-5",
            "title": "Weatherproofing",
            "sectionNumber": "8.6.5",
            "pageNumber": 37,
            "content": [
              "All outdoor RF coaxial connections must be weatherproofed to prevent water ingress into connectors and cables. Moisture inside a coaxial connector causes rapid corrosion, severe RF attenuation, and total signal loss.",
              "Veripos specifies the industry-standard 3-layer weatherproofing method:",
              "1. Layer 1 (Primary Seal): Wrap one layer of premium PVC electrical tape (Scotch Super 33+ or Scotch 88), half-lapped, starting from 25 mm below the connector and wrapping upward to the connector body.",
              "2. Layer 2 (Moisture Barrier): Apply self-amalgamating tape (Scotch 23) or butyl mastic (Scotch 2228). Stretch the tape to 3/4 its original width to activate vulcanization. Wrap half-lapped, extending 50 mm (2 inches) past Layer 1 in both directions. Squeeze firmly to fuse.",
              "3. Layer 3 (UV & Mechanical Protection): Apply two layers of UV-resistant PVC electrical tape (Scotch Super 33+), wrapped under moderate tension from bottom to top, extending 25 mm beyond Layer 2. Finish the final wrap with zero tension to prevent flag unravelling.",
              "4. Inspect the finished wrap: Ensure no gaps, wrinkles, or exposed metal edges remain."
            ],
            "callouts": [
              {
                "type": "important",
                "title": "WEATHERPROOFING DIRECTION",
                "text": "Always wrap tape from bottom to top (shingle effect) so that falling rainwater naturally sheds over tape seams rather than penetrating underneath."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "chapter-9",
    "chapterNumber": 9,
    "title": "Appendix",
    "startPage": 38,
    "endPage": 43,
    "description": "Complete technical specifications for Veripos antennas (V560, V670, V460), phase centre offset values, mechanical and electrical cabling specifications, attenuation tables, and global L-band coverage map.",
    "iconName": "FileText",
    "sections": [
      {
        "id": "section-9-1",
        "title": "Summary specification of antennas",
        "sectionNumber": "9.1",
        "pageNumber": 38,
        "content": [
          "Detailed mechanical, electrical, and environmental specifications for Veripos antennas."
        ],
        "subsections": [
          {
            "id": "section-9-1-1",
            "title": "Veripos V560 combined GNSS / L-band antenna",
            "sectionNumber": "9.1.1",
            "pageNumber": 38,
            "content": [
              "The Veripos V560 is a high-grade dual-feed multi-constellation GNSS and L-band correction antenna."
            ],
            "tables": [
              {
                "id": "table-v560-specs",
                "caption": "Veripos V560 Technical Specifications",
                "headers": [
                  "Parameter",
                  "Specification"
                ],
                "rows": [
                  [
                    "Frequency Coverage",
                    "GPS (L1/L2/L5), GLONASS (G1/G2), Galileo (E1/E5a/E5b/E6), BeiDou (B1/B2/B3), L-band (1525 - 1559 MHz)"
                  ],
                  [
                    "LNA Gain",
                    "40 dB \u00b1 3 dB"
                  ],
                  [
                    "Noise Figure",
                    "\u2264 2.5 dB typical"
                  ],
                  [
                    "LNA Supply Voltage",
                    "4.5 VDC to 13.0 VDC"
                  ],
                  [
                    "LNA Current Draw",
                    "< 60 mA"
                  ],
                  [
                    "Axial Ratio at Zenith",
                    "\u2264 1.5 dB (exceptional multipath rejection)"
                  ],
                  [
                    "Polarization",
                    "Right Hand Circular Polarized (RHCP)"
                  ],
                  [
                    "Phase Centre Stability",
                    "< 2.0 mm across all elevation angles"
                  ],
                  [
                    "RF Connector",
                    "TNC Female (50 Ohm)"
                  ],
                  [
                    "Dimensions",
                    "Diameter: 178 mm (7.0 inch), Height: 76 mm (3.0 inch)"
                  ],
                  [
                    "Weight",
                    "0.7 kg (1.54 lbs)"
                  ],
                  [
                    "Operating Temperature",
                    "-40\u00b0C to +85\u00b0C (-40\u00b0F to +185\u00b0F)"
                  ],
                  [
                    "Ingress Protection",
                    "IP69K (High pressure steam jet and continuous immersion)"
                  ],
                  [
                    "Mounting Interface",
                    "5/8-11 UNC threaded base with stainless adapter bracket"
                  ]
                ]
              },
              {
                "id": "table-v560-phase-centre",
                "caption": "Veripos V560 Phase Centre Offset (PCO) Values (relative to ARP)",
                "headers": [
                  "Frequency Band",
                  "North Offset (mm)",
                  "East Offset (mm)",
                  "Up Offset (mm)"
                ],
                "rows": [
                  [
                    "GPS L1 (1575.42 MHz)",
                    "+0.5 mm",
                    "-0.2 mm",
                    "+62.4 mm"
                  ],
                  [
                    "GPS L2 (1227.60 MHz)",
                    "+0.3 mm",
                    "+0.1 mm",
                    "+58.1 mm"
                  ],
                  [
                    "GPS L5 (1176.45 MHz)",
                    "-0.1 mm",
                    "+0.2 mm",
                    "+55.8 mm"
                  ],
                  [
                    "GLONASS G1 (1602 MHz)",
                    "+0.4 mm",
                    "-0.1 mm",
                    "+61.8 mm"
                  ],
                  [
                    "GLONASS G2 (1246 MHz)",
                    "+0.2 mm",
                    "+0.0 mm",
                    "+57.5 mm"
                  ],
                  [
                    "Galileo E1 (1575.42 MHz)",
                    "+0.5 mm",
                    "-0.2 mm",
                    "+62.4 mm"
                  ],
                  [
                    "Galileo E5a/E5b",
                    "-0.1 mm",
                    "+0.2 mm",
                    "+55.9 mm"
                  ],
                  [
                    "BeiDou B1/B2/B3",
                    "+0.3 mm",
                    "-0.1 mm",
                    "+60.2 mm"
                  ],
                  [
                    "L-band (1540 MHz)",
                    "+0.4 mm",
                    "-0.1 mm",
                    "+61.5 mm"
                  ]
                ]
              }
            ],
            "figures": [
              {
                "id": "fig-v560-drawing",
                "figureNumber": "Figure 9.1",
                "caption": "Veripos V560 Mechanical Dimensions and ARP Reference Drawing",
                "src": "/assets/figures/page_38_fig_1.png",
                "alt": "V560 mechanical drawing",
                "pageRef": 38
              }
            ]
          },
          {
            "id": "section-9-1-2",
            "title": "Veripos V670 GNSS antenna",
            "sectionNumber": "9.1.2",
            "pageNumber": 39,
            "content": [
              "The Veripos V670 is an advanced triple-frequency GNSS antenna offering exceptional carrier phase accuracy for dynamic positioning."
            ],
            "tables": [
              {
                "id": "table-v670-specs",
                "caption": "Veripos V670 Technical Specifications",
                "headers": [
                  "Parameter",
                  "Specification"
                ],
                "rows": [
                  [
                    "Frequency Coverage",
                    "GPS (L1/L2/L5), GLONASS (G1/G2/G3), Galileo (E1/E5a/E5b/E6), BeiDou (B1/B2/B3), QZSS"
                  ],
                  [
                    "LNA Gain",
                    "38 dB \u00b1 2 dB"
                  ],
                  [
                    "Noise Figure",
                    "\u2264 2.0 dB typical"
                  ],
                  [
                    "Supply Voltage",
                    "3.3 VDC to 12.0 VDC"
                  ],
                  [
                    "Dimensions",
                    "Diameter: 185 mm, Height: 80 mm"
                  ],
                  [
                    "Weight",
                    "0.85 kg"
                  ],
                  [
                    "Enclosure",
                    "UV-resistant Xenoy polymer, IP69K rated"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-9-1-3",
            "title": "Veripos V460 MF beacon antenna",
            "sectionNumber": "9.1.3",
            "pageNumber": 39,
            "content": [
              "The Veripos V460 is an active marine MF beacon receiver antenna."
            ],
            "tables": [
              {
                "id": "table-v460-specs",
                "caption": "Veripos V460 Technical Specifications",
                "headers": [
                  "Parameter",
                  "Specification"
                ],
                "rows": [
                  [
                    "Frequency Band",
                    "283.5 kHz to 325.0 kHz (IALA standard)"
                  ],
                  [
                    "Antenna Type",
                    "Active vertical whip with integrated preamplifier"
                  ],
                  [
                    "Whip Length",
                    "1.2 m (4.0 ft) fiberglass whip"
                  ],
                  [
                    "Output Impedance",
                    "50 Ohm"
                  ],
                  [
                    "Operating Voltage",
                    "9.0 VDC to 18.0 VDC (phantom feed via coaxial cable)"
                  ],
                  [
                    "Operating Temperature",
                    "-30\u00b0C to +70\u00b0C"
                  ]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-9-2",
        "title": "Summary specification of cabling",
        "sectionNumber": "9.2",
        "pageNumber": 39,
        "content": [
          "Comprehensive electrical, mechanical, and attenuation specifications for approved coaxial cables."
        ],
        "subsections": [
          {
            "id": "section-9-2-1",
            "title": "Times Microwave LMR-400",
            "sectionNumber": "9.2.1",
            "pageNumber": 39,
            "content": [
              "Times Microwave LMR-400 is the standard flexible low-loss coaxial cable for runs up to 60 meters (200 ft)."
            ],
            "tables": [
              {
                "id": "table-lmr400-electrical",
                "caption": "LMR-400 Electrical Specifications",
                "headers": [
                  "Performance Property",
                  "Units (US)",
                  "Units (Metric)"
                ],
                "rows": [
                  [
                    "Characteristic Impedance",
                    "50 Ohms",
                    "50 Ohms"
                  ],
                  [
                    "Velocity of Propagation",
                    "85%",
                    "85%"
                  ],
                  [
                    "Capacitance",
                    "23.9 pF/ft",
                    "78.4 pF/m"
                  ],
                  [
                    "Inductance",
                    "0.060 \u00b5H/ft",
                    "0.20 \u00b5H/m"
                  ],
                  [
                    "Shielding Effectiveness",
                    "> 90 dB",
                    "> 90 dB"
                  ],
                  [
                    "DC Resistance (Center)",
                    "1.39 Ohms/1000ft",
                    "4.56 Ohms/km"
                  ],
                  [
                    "DC Resistance (Outer)",
                    "1.65 Ohms/1000ft",
                    "5.41 Ohms/km"
                  ],
                  [
                    "Voltage Withstand",
                    "2500 VDC",
                    "2500 VDC"
                  ],
                  [
                    "Peak Power Rating",
                    "16.0 kW",
                    "16.0 kW"
                  ]
                ]
              },
              {
                "id": "table-lmr400-mechanical",
                "caption": "LMR-400 Mechanical & Environmental Specifications",
                "headers": [
                  "Property",
                  "US Value",
                  "Metric Value"
                ],
                "rows": [
                  [
                    "Bend Radius: Installation (Dynamic)",
                    "4.0 in",
                    "101.6 mm"
                  ],
                  [
                    "Bend Radius: Repeated (Static)",
                    "1.0 in",
                    "25.4 mm"
                  ],
                  [
                    "Bending Moment",
                    "0.5 ft-lb",
                    "0.68 N-m"
                  ],
                  [
                    "Weight",
                    "0.068 lb/ft",
                    "0.10 kg/m"
                  ],
                  [
                    "Tensile Strength",
                    "160 lb",
                    "72.6 kg"
                  ],
                  [
                    "Flat Plate Crush Strength",
                    "40 lb/in",
                    "0.71 kg/mm"
                  ],
                  [
                    "Operating Temperature",
                    "-40\u00b0F to +185\u00b0F",
                    "-40\u00b0C to +85\u00b0C"
                  ]
                ]
              },
              {
                "id": "table-lmr400-attenuation",
                "caption": "LMR-400 Attenuation Table",
                "headers": [
                  "Frequency (MHz)",
                  "Attenuation (dB/100 ft)",
                  "Attenuation (dB/100 m)",
                  "Average Power (kW)"
                ],
                "rows": [
                  [
                    "30 MHz",
                    "0.7 dB",
                    "2.2 dB",
                    "3.33 kW"
                  ],
                  [
                    "50 MHz",
                    "0.9 dB",
                    "2.9 dB",
                    "2.57 kW"
                  ],
                  [
                    "150 MHz",
                    "1.5 dB",
                    "5.0 dB",
                    "1.47 kW"
                  ],
                  [
                    "220 MHz",
                    "1.9 dB",
                    "6.1 dB",
                    "1.20 kW"
                  ],
                  [
                    "450 MHz",
                    "2.7 dB",
                    "8.9 dB",
                    "0.83 kW"
                  ],
                  [
                    "900 MHz",
                    "3.9 dB",
                    "12.8 dB",
                    "0.58 kW"
                  ],
                  [
                    "1500 MHz",
                    "5.1 dB",
                    "16.8 dB",
                    "0.44 kW"
                  ],
                  [
                    "1800 MHz",
                    "5.7 dB",
                    "18.6 dB",
                    "0.40 kW"
                  ],
                  [
                    "2000 MHz",
                    "6.0 dB",
                    "19.6 dB",
                    "0.37 kW"
                  ],
                  [
                    "2500 MHz",
                    "6.8 dB",
                    "22.2 dB",
                    "0.33 kW"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-9-2-2",
            "title": "Times Microwave LMR-240",
            "sectionNumber": "9.2.2",
            "pageNumber": 41,
            "content": [
              "Times Microwave LMR-240 is a flexible cable used for jumper tails and short runs up to 30 meters (100 ft)."
            ],
            "tables": [
              {
                "id": "table-lmr240-electrical",
                "caption": "LMR-240 Electrical Specifications",
                "headers": [
                  "Property",
                  "Units (US)",
                  "Units (Metric)"
                ],
                "rows": [
                  [
                    "Characteristic Impedance",
                    "50 Ohms",
                    "50 Ohms"
                  ],
                  [
                    "Velocity of Propagation",
                    "84%",
                    "84%"
                  ],
                  [
                    "Capacitance",
                    "24.2 pF/ft",
                    "79.4 pF/m"
                  ],
                  [
                    "Shielding Effectiveness",
                    "> 90 dB",
                    "> 90 dB"
                  ],
                  [
                    "Outer Diameter",
                    "0.240 in",
                    "6.10 mm"
                  ],
                  [
                    "Bend Radius (Static)",
                    "0.75 in",
                    "19.1 mm"
                  ],
                  [
                    "Bend Radius (Dynamic)",
                    "2.5 in",
                    "63.5 mm"
                  ],
                  [
                    "Weight",
                    "0.034 lb/ft",
                    "0.05 kg/m"
                  ]
                ]
              },
              {
                "id": "table-lmr240-attenuation",
                "caption": "LMR-240 Attenuation Table",
                "headers": [
                  "Frequency (MHz)",
                  "Attenuation (dB/100 ft)",
                  "Attenuation (dB/100 m)"
                ],
                "rows": [
                  [
                    "30 MHz",
                    "1.3 dB",
                    "4.4 dB"
                  ],
                  [
                    "50 MHz",
                    "1.7 dB",
                    "5.7 dB"
                  ],
                  [
                    "150 MHz",
                    "3.0 dB",
                    "9.9 dB"
                  ],
                  [
                    "450 MHz",
                    "5.3 dB",
                    "17.3 dB"
                  ],
                  [
                    "900 MHz",
                    "7.6 dB",
                    "24.8 dB"
                  ],
                  [
                    "1500 MHz",
                    "9.9 dB",
                    "32.4 dB"
                  ],
                  [
                    "2000 MHz",
                    "11.5 dB",
                    "37.7 dB"
                  ],
                  [
                    "2500 MHz",
                    "12.9 dB",
                    "42.4 dB"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-9-2-3",
            "title": "CommScope Andrew Heliax LDF4-50A",
            "sectionNumber": "9.2.3",
            "pageNumber": 42,
            "content": [
              "CommScope 1/2 inch Heliax LDF4-50A is the premier low-loss corrugated copper cable for permanent primary runs up to 100 meters (330 ft)."
            ],
            "tables": [
              {
                "id": "table-ldf450-specs",
                "caption": "Heliax LDF4-50A Technical Specifications",
                "headers": [
                  "Property",
                  "Value"
                ],
                "rows": [
                  [
                    "Impedance",
                    "50 \u00b1 1 Ohm"
                  ],
                  [
                    "Velocity of Propagation",
                    "88%"
                  ],
                  [
                    "Outer Diameter",
                    "16.0 mm (0.63 in)"
                  ],
                  [
                    "Outer Conductor",
                    "Corrugated copper tube"
                  ],
                  [
                    "Center Conductor",
                    "Copper-clad aluminum wire (4.8 mm dia)"
                  ],
                  [
                    "Dielectric",
                    "Foam polyethylene"
                  ],
                  [
                    "Minimum Bend Radius",
                    "50 mm (Static) / 125 mm (Dynamic)"
                  ],
                  [
                    "Attenuation at 1.5 GHz",
                    "8.8 dB / 100 m (2.68 dB / 100 ft)"
                  ],
                  [
                    "Weight",
                    "0.22 kg/m (0.15 lb/ft)"
                  ]
                ]
              }
            ]
          },
          {
            "id": "section-9-2-4",
            "title": "Belden RG-214",
            "sectionNumber": "9.2.4",
            "pageNumber": 42,
            "content": [
              "Belden RG-214 is a classic double-silver-plated braided coaxial cable for runs up to 20 meters (65 ft)."
            ],
            "tables": [
              {
                "id": "table-rg214-specs",
                "caption": "Belden RG-214 Specifications",
                "headers": [
                  "Property",
                  "Value"
                ],
                "rows": [
                  [
                    "Impedance",
                    "50 \u00b1 2 Ohms"
                  ],
                  [
                    "Velocity of Propagation",
                    "66%"
                  ],
                  [
                    "Outer Diameter",
                    "10.8 mm (0.425 in)"
                  ],
                  [
                    "Outer Shield",
                    "Double silver-plated copper braid (98% coverage)"
                  ],
                  [
                    "Attenuation at 1.5 GHz",
                    "37.0 dB / 100 m (11.28 dB / 100 ft)"
                  ],
                  [
                    "Weight",
                    "0.20 kg/m (0.134 lb/ft)"
                  ]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-9-3",
        "title": "L-band coverage map",
        "sectionNumber": "9.3",
        "pageNumber": 43,
        "content": [
          "The world coverage map illustrates the global footprints of the five Inmarsat geostationary communication satellites broadcasting Veripos positioning corrections (AOR-W, AOR-E, 25E, IOR, and POR) with elevation angle contour lines (0\u00b0, 5\u00b0, 10\u00b0, 20\u00b0).",
          "Vessels operating within these contours maintain continuous reception of Veripos high-accuracy correction services."
        ],
        "figures": [
          {
            "id": "fig-global-lband-map",
            "figureNumber": "Figure 9.2",
            "caption": "Global Inmarsat L-band Satellite Coverage Footprint Map",
            "src": "/assets/figures/page_43_fig_1.png",
            "alt": "Global L-band coverage map",
            "pageRef": 43,
            "details": "Global world projection showing satellite look angles, sub-satellite orbital longitudes, and elevation contour limits."
          }
        ]
      }
    ]
  }
];
